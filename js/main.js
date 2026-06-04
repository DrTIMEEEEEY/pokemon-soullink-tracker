let refreshTimeout = null;

function scheduleRefresh() {

  clearTimeout(refreshTimeout);

  refreshTimeout = setTimeout(() => {

    requestAnimationFrame(() => {
      refreshAllSelects();
    });

  }, 50);
}

// =========================
// LOCAL STORAGE HELPERS
// =========================

function savePick(locationIndex, player, value) {
const key = `bw2-${locationIndex}-${player}`;
localStorage.setItem(key, value);
}

function loadPick(locationIndex, player) {
const key = `bw2-${locationIndex}-${player}`;
return localStorage.getItem(key) || "";
}

function saveStatus(index, status) {
  localStorage.setItem(`bw2-status-${index}`, status);
}

function loadStatus(index) {
  return localStorage.getItem(`bw2-status-${index}`) || "";
}

// =========================
// BUILD UI
// =========================

const tracker = document.getElementById("tracker");

locations.forEach((location, index) => {
const card = document.createElement("div");
card.className = "location-card";

card.innerHTML = `
  <div class="location-title">${location}</div>

  <div class="selectors">

    <div class="player-box">

      <div class="player-label">
        Your Pokémon
      </div>

      <select id="player1-${index}">
          <option value="">Select Pokémon...</option>
      </select>

      <button
        class="status-btn defeated-btn"
        id="defeated1-${index}"
        title="Defeated"
      >
        💀
      </button>

      <button
        class="status-btn failed-btn"
        id="failed1-${index}"
        title="Not Caught"
      >
        ✕
      </button>

      <span class="pokemon-name" id="display1-${index}">
        None
      </span>

    </div>

    <div class="player-box">

      <div class="player-label">
        Partner
      </div>

      <select id="player2-${index}">
          <option value="">Select Pokémon...</option>
      </select>

      <button
        class="status-btn defeated-btn"
        id="defeated2-${index}"
        title="Defeated"
      >
        💀
      </button>

      <button
        class="status-btn failed-btn"
        id="failed2-${index}"
        title="Not Caught"
      >
        ✕
      </button>

      <span class="pokemon-name" id="display2-${index}">
        None
      </span>

    </div>
`;

tracker.appendChild(card);

// =========================
// INIT TOM SELECT (PLAYER 1)
// =========================

const ts1 = new TomSelect(`#player1-${index}`, {
  create: false,
  maxOptions: 1500,

    onChange: function(value) {

      savePick(index, "p1", value);

      const status = loadStatus(index);

      updateDisplay(index, "1", value, status);
    },

    onDropdownOpen: function() {
        refreshSingleSelect(this);
    }
});

// =========================
// INIT TOM SELECT (PLAYER 2)
// =========================

const ts2 = new TomSelect(`#player2-${index}`, {
  create: false,
  maxOptions: 1500,

    onChange: function(value) {

      savePick(index, "p2", value);

      const status = loadStatus(index);

      updateDisplay(index, "2", value, status);
    },

    onDropdownOpen: function() {
        refreshSingleSelect(this);
    }
});

// =========================
// PLAYER 1 BUTTONS
// =========================

const defeatedBtn1 = document.getElementById(`defeated1-${index}`);
const failedBtn1 = document.getElementById(`failed1-${index}`);

defeatedBtn1.addEventListener("click", () => {
  const current = loadStatus(index);
  setStatus(index, current === "defeated" ? "" : "defeated");
  scheduleRefresh();
});

failedBtn1.addEventListener("click", () => {
  const current = loadStatus(index);
  setStatus(index, current === "failed" ? "" : "failed");
  scheduleRefresh();
});

// =========================
// PLAYER 2 BUTTONS
// =========================

const defeatedBtn2 = document.getElementById(`defeated2-${index}`);
const failedBtn2 = document.getElementById(`failed2-${index}`);

defeatedBtn2.addEventListener("click", () => {
  const current = loadStatus(index);
  setStatus(index, current === "defeated" ? "" : "defeated");
  scheduleRefresh();
});

failedBtn2.addEventListener("click", () => {
  const current = loadStatus(index);
  setStatus(index, current === "failed" ? "" : "failed");
  scheduleRefresh();
});

// =========================
// LOAD SAVED DATA
// =========================

const saved1 = loadPick(index, "p1");
const saved2 = loadPick(index, "p2");

if (saved1) {
  ts1.setValue(saved1);
  document.getElementById(`display1-${index}`).textContent = saved1;
}

if (saved2) {
  ts2.setValue(saved2);
  document.getElementById(`display2-${index}`).textContent = saved2;
}

// =========================
// LOAD SAVED STATUS
// =========================

const savedStatus = loadStatus(index);

syncButtons(index, savedStatus);

updateDisplay(index, "1", saved1, savedStatus);
updateDisplay(index, "2", saved2, savedStatus);

scheduleRefresh();
});

document.getElementById("resetSaveBtn").addEventListener("click", () => {
  const confirmReset = confirm("Are you sure you want to delete all saved Pokémon?");
  if (!confirmReset) return;

  // Clear only BW2 tracker data
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith("bw2-")) {
      localStorage.removeItem(key);
    }
  });

  // Reset all TomSelect instances + displays
  locations.forEach((_, index) => {

      const select1 =
        document.querySelector(`#player1-${index}`)?.tomselect;

      const select2 =
        document.querySelector(`#player2-${index}`)?.tomselect;

      if (select1) select1.clear(true);
      if (select2) select2.clear(true);

      syncButtons(index, "");

      updateDisplay(index, "1", "", "");
      updateDisplay(index, "2", "", "");
    });

  alert("All saves cleared!");
});

function setStatus(index, status) {

  saveStatus(index, status);

  const p1 = loadPick(index, "p1");
  const p2 = loadPick(index, "p2");

  updateDisplay(index, "1", p1, status);
  updateDisplay(index, "2", p2, status);

  syncButtons(index, status);

}

function syncButtons(index, status) {

  const d1 = document.getElementById(`defeated1-${index}`);
  const f1 = document.getElementById(`failed1-${index}`);
  const d2 = document.getElementById(`defeated2-${index}`);
  const f2 = document.getElementById(`failed2-${index}`);

  [d1, d2].forEach(btn =>
    btn.classList.toggle("active", status === "defeated")
  );

  [f1, f2].forEach(btn =>
    btn.classList.toggle("active", status === "failed")
  );
}

function updateDisplay(index, player, value, status) {

  const display = document.getElementById(`display${player}-${index}`);

  display.classList.remove("caught", "defeated", "failed");

  if (!value) {
    display.textContent = "None";
    return;
  }

  const pokemon = getPokemonById(value);

  if (!pokemon) {
    display.textContent = "Unknown";
    return;
  }

  // Emoji based display
  let prefix = "🟢";

  if (status === "defeated") prefix = "💀";
  if (status === "failed") prefix = "✕";

  display.textContent = `${prefix} ${pokemon.name}`;

  if (status === "defeated") display.classList.add("defeated");
  else if (status === "failed") display.classList.add("failed");
  else display.classList.add("caught");
}

function getPokemonById(id) {
  return pokemonList.find(
    p => p.pokedexId === Number(id)
  );
}

function getFamilyEmojiStatus(familyId) {

  let foundCaught = false;

  for (let i = 0; i < locations.length; i++) {

    const status = loadStatus(i);

    const p1 = loadPick(i, "p1");
    const p2 = loadPick(i, "p2");

    for (const id of [p1, p2]) {

      if (!id) continue;

      const pokemon = getPokemonById(id);

      if (!pokemon) continue;

      if (pokemon.familyId !== familyId) continue;

      if (status === "defeated") {
        return "defeated";
      }

      if (status === "failed") {
        return "failed";
      }

      foundCaught = true;
    }
  }

  return foundCaught ? "caught" : "";
}

function buildPokemonOptions() {

  return pokemonList.map(p => {

    const status = getFamilyEmojiStatus(p.familyId);

    let emoji = "⚪";

    if (status === "caught") emoji = "🟢";
    if (status === "defeated") emoji = "💀";
    if (status === "failed") emoji = "✕";

    return `
      <option value="${p.pokedexId}">
        ${emoji} ${p.name}
      </option>
    `;
  }).join("");
}

function refreshAllSelects() {

  document.querySelectorAll("select").forEach(select => {

    const ts = select.tomselect;
    if (!ts) return;

    const currentValue = ts.getValue();

    // 🔥 HARD RESET (wichtig!)
    ts.clear(true);
    ts.clearOptions();

    pokemonList.forEach(p => {

      const status = getFamilyEmojiStatus(p.familyId);

      let emoji = "⚪";

      if (status === "caught") emoji = "🟢";
      if (status === "defeated") emoji = "💀";
      if (status === "failed") emoji = "✕";

      ts.addOption({
        value: p.pokedexId,
        text: `${emoji} ${p.name}`
      });
    });

    ts.refreshOptions(false);

    // restore selection
    requestAnimationFrame(() => {
      ts.setValue(currentValue, true);
    });
  });
}

function refreshSingleSelect(ts) {

    const currentValue = ts.getValue();

    ts.clearOptions();

    pokemonList.forEach(p => {

        const status = getFamilyEmojiStatus(p.familyId);

        let emoji = "⚪";

        if (status === "caught") emoji = "🟢";
        if (status === "defeated") emoji = "💀";
        if (status === "failed") emoji = "✕";

        ts.addOption({
            value: p.pokedexId,
            text: `${emoji} ${p.name}`
        });
    });

    ts.setValue(currentValue, true);
}