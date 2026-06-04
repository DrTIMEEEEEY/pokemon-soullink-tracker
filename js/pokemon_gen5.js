// =========================
// POKÉMON LIST (Gen 1–5)
// =========================

const pokemonList = [
  {
    name: "Bulbasaur",
    pokedexId: 1,
    familyId: 1
  },
  {
    name: "Ivysaur",
    pokedexId: 2,
    familyId: 1
  },
  {
    name: "Venusaur",
    pokedexId: 3,
    familyId: 1
  },
  {
    name: "Charmander",
    pokedexId: 4,
    familyId: 2
  },
  {
    name: "Charmeleon",
    pokedexId: 5,
    familyId: 2
  },
  {
    name: "Charizard",
    pokedexId: 6,
    familyId: 2
  },
  {
    name: "Squirtle",
    pokedexId: 7,
    familyId: 3
  },
  {
    name: "Wartortle",
    pokedexId: 8,
    familyId: 3
  },
  {
    name: "Blastoise",
    pokedexId: 9,
    familyId: 3
  },
  {
    name: "Caterpie",
    pokedexId: 10,
    familyId: 4
  },
  {
    name: "Metapod",
    pokedexId: 11,
    familyId: 4
  },
  {
    name: "Butterfree",
    pokedexId: 12,
    familyId: 4
  },
  {
    name: "Weedle",
    pokedexId: 13,
    familyId: 5
  },
  {
    name: "Kakuna",
    pokedexId: 14,
    familyId: 5
  },
  {
    name: "Beedrill",
    pokedexId: 15,
    familyId: 5
  },
  {
    name: "Pidgey",
    pokedexId: 16,
    familyId: 6
  },
  {
    name: "Pidgeotto",
    pokedexId: 17,
    familyId: 6
  },
  {
    name: "Pidgeot",
    pokedexId: 18,
    familyId: 6
  },
  {
    name: "Rattata",
    pokedexId: 19,
    familyId: 7
  },
  {
    name: "Raticate",
    pokedexId: 20,
    familyId: 7
  },
  {
    name: "Spearow",
    pokedexId: 21,
    familyId: 7
  },
  {
    name: "Fearow",
    pokedexId: 22,
    familyId: 8
  },
  {
    name: "Ekans",
    pokedexId: 23,
    familyId: 8
  },
  {
    name: "Arbok",
    pokedexId: 24,
    familyId: 8
  },
  {
    name: "Pikachu",
    pokedexId: 25,
    familyId: 9
  },
  {
    name: "Raichu",
    pokedexId: 26,
    familyId: 9
  },
  {
    name: "Sandshrew",
    pokedexId: 27,
    familyId: 9
  },
  {
    name: "Sandslash",
    pokedexId: 28,
    familyId: 10
  },
  {
    name: "Nidoran♀",
    pokedexId: 29,
    familyId: 10
  },
  {
    name: "Nidorina",
    pokedexId: 30,
    familyId: 10
  },
  {
    name: "Nidoqueen",
    pokedexId: 31,
    familyId: 11
  },
  {
    name: "Nidoran♂",
    pokedexId: 32,
    familyId: 11
  },
  {
    name: "Nidorino",
    pokedexId: 33,
    familyId: 11
  },
  {
    name: "Nidoking",
    pokedexId: 34,
    familyId: 12
  },
  {
    name: "Clefairy",
    pokedexId: 35,
    familyId: 12
  },
  {
    name: "Clefable",
    pokedexId: 36,
    familyId: 12
  },
  {
    name: "Vulpix",
    pokedexId: 37,
    familyId: 13
  },
  {
    name: "Ninetales",
    pokedexId: 38,
    familyId: 13
  },
  {
    name: "Jigglypuff",
    pokedexId: 39,
    familyId: 13
  },
  {
    name: "Wigglytuff",
    pokedexId: 40,
    familyId: 14
  },
  {
    name: "Zubat",
    pokedexId: 41,
    familyId: 14
  },
  {
    name: "Golbat",
    pokedexId: 42,
    familyId: 14
  },
  {
    name: "Oddish",
    pokedexId: 43,
    familyId: 15
  },
  {
    name: "Gloom",
    pokedexId: 44,
    familyId: 15
  },
  {
    name: "Vileplume",
    pokedexId: 45,
    familyId: 15
  },
  {
    name: "Paras",
    pokedexId: 46,
    familyId: 16
  },
  {
    name: "Parasect",
    pokedexId: 47,
    familyId: 16
  },
  {
    name: "Venonat",
    pokedexId: 48,
    familyId: 16
  },
  {
    name: "Venomoth",
    pokedexId: 49,
    familyId: 17
  },
  {
    name: "Diglett",
    pokedexId: 50,
    familyId: 17
  },
  {
    name: "Dugtrio",
    pokedexId: 51,
    familyId: 17
  },
  {
    name: "Meowth",
    pokedexId: 52,
    familyId: 18
  },
  {
    name: "Persian",
    pokedexId: 53,
    familyId: 18
  },
  {
    name: "Psyduck",
    pokedexId: 54,
    familyId: 18
  },
  {
    name: "Golduck",
    pokedexId: 55,
    familyId: 19
  },
  {
    name: "Mankey",
    pokedexId: 56,
    familyId: 19
  },
  {
    name: "Primeape",
    pokedexId: 57,
    familyId: 19
  },
  {
    name: "Growlithe",
    pokedexId: 58,
    familyId: 20
  },
  {
    name: "Arcanine",
    pokedexId: 59,
    familyId: 20
  },
  {
    name: "Poliwag",
    pokedexId: 60,
    familyId: 20
  },
  {
    name: "Poliwhirl",
    pokedexId: 61,
    familyId: 21
  },
  {
    name: "Poliwrath",
    pokedexId: 62,
    familyId: 21
  },
  {
    name: "Abra",
    pokedexId: 63,
    familyId: 21
  },
  {
    name: "Kadabra",
    pokedexId: 64,
    familyId: 22
  },
  {
    name: "Alakazam",
    pokedexId: 65,
    familyId: 22
  },
  {
    name: "Machop",
    pokedexId: 66,
    familyId: 22
  },
  {
    name: "Machoke",
    pokedexId: 67,
    familyId: 23
  },
  {
    name: "Machamp",
    pokedexId: 68,
    familyId: 23
  },
  {
    name: "Bellsprout",
    pokedexId: 69,
    familyId: 23
  },
  {
    name: "Weepinbell",
    pokedexId: 70,
    familyId: 24
  },
  {
    name: "Victreebel",
    pokedexId: 71,
    familyId: 24
  },
  {
    name: "Tentacool",
    pokedexId: 72,
    familyId: 24
  },
  {
    name: "Tentacruel",
    pokedexId: 73,
    familyId: 25
  },
  {
    name: "Geodude",
    pokedexId: 74,
    familyId: 25
  },
  {
    name: "Graveler",
    pokedexId: 75,
    familyId: 25
  },
  {
    name: "Golem",
    pokedexId: 76,
    familyId: 26
  },
  {
    name: "Ponyta",
    pokedexId: 77,
    familyId: 26
  },
  {
    name: "Rapidash",
    pokedexId: 78,
    familyId: 26
  },
  {
    name: "Slowpoke",
    pokedexId: 79,
    familyId: 27
  },
  {
    name: "Slowbro",
    pokedexId: 80,
    familyId: 27
  },
  {
    name: "Magnemite",
    pokedexId: 81,
    familyId: 27
  },
  {
    name: "Magneton",
    pokedexId: 82,
    familyId: 28
  },
  {
    name: "Farfetch'd",
    pokedexId: 83,
    familyId: 28
  },
  {
    name: "Doduo",
    pokedexId: 84,
    familyId: 28
  },
  {
    name: "Dodrio",
    pokedexId: 85,
    familyId: 29
  },
  {
    name: "Seel",
    pokedexId: 86,
    familyId: 29
  },
  {
    name: "Dewgong",
    pokedexId: 87,
    familyId: 29
  },
  {
    name: "Grimer",
    pokedexId: 88,
    familyId: 30
  },
  {
    name: "Muk",
    pokedexId: 89,
    familyId: 30
  },
  {
    name: "Shellder",
    pokedexId: 90,
    familyId: 30
  },
  {
    name: "Cloyster",
    pokedexId: 91,
    familyId: 31
  },
  {
    name: "Gastly",
    pokedexId: 92,
    familyId: 31
  },
  {
    name: "Haunter",
    pokedexId: 93,
    familyId: 31
  },
  {
    name: "Gengar",
    pokedexId: 94,
    familyId: 32
  },
  {
    name: "Onix",
    pokedexId: 95,
    familyId: 32
  },
  {
    name: "Drowzee",
    pokedexId: 96,
    familyId: 32
  },
  {
    name: "Hypno",
    pokedexId: 97,
    familyId: 33
  },
  {
    name: "Krabby",
    pokedexId: 98,
    familyId: 33
  },
  {
    name: "Kingler",
    pokedexId: 99,
    familyId: 33
  },
  {
    name: "Voltorb",
    pokedexId: 100,
    familyId: 34
  },
  {
    name: "Electrode",
    pokedexId: 101,
    familyId: 34
  },
  {
    name: "Exeggcute",
    pokedexId: 102,
    familyId: 34
  },
  {
    name: "Exeggutor",
    pokedexId: 103,
    familyId: 35
  },
  {
    name: "Cubone",
    pokedexId: 104,
    familyId: 35
  },
  {
    name: "Marowak",
    pokedexId: 105,
    familyId: 35
  },
  {
    name: "Hitmonlee",
    pokedexId: 106,
    familyId: 36
  },
  {
    name: "Hitmonchan",
    pokedexId: 107,
    familyId: 36
  },
  {
    name: "Lickitung",
    pokedexId: 108,
    familyId: 36
  },
  {
    name: "Koffing",
    pokedexId: 109,
    familyId: 37
  },
  {
    name: "Weezing",
    pokedexId: 110,
    familyId: 37
  },
  {
    name: "Rhyhorn",
    pokedexId: 111,
    familyId: 37
  },
  {
    name: "Rhydon",
    pokedexId: 112,
    familyId: 38
  },
  {
    name: "Chansey",
    pokedexId: 113,
    familyId: 38
  },
  {
    name: "Tangela",
    pokedexId: 114,
    familyId: 38
  },
  {
    name: "Kangaskhan",
    pokedexId: 115,
    familyId: 39
  },
  {
    name: "Horsea",
    pokedexId: 116,
    familyId: 39
  },
  {
    name: "Seadra",
    pokedexId: 117,
    familyId: 39
  },
  {
    name: "Goldeen",
    pokedexId: 118,
    familyId: 40
  },
  {
    name: "Seaking",
    pokedexId: 119,
    familyId: 40
  },
  {
    name: "Staryu",
    pokedexId: 120,
    familyId: 40
  },
  {
    name: "Starmie",
    pokedexId: 121,
    familyId: 41
  },
  {
    name: "Mr. Mime",
    pokedexId: 122,
    familyId: 41
  },
  {
    name: "Scyther",
    pokedexId: 123,
    familyId: 41
  },
  {
    name: "Jynx",
    pokedexId: 124,
    familyId: 42
  },
  {
    name: "Electabuzz",
    pokedexId: 125,
    familyId: 42
  },
  {
    name: "Magmar",
    pokedexId: 126,
    familyId: 42
  },
  {
    name: "Pinsir",
    pokedexId: 127,
    familyId: 43
  },
  {
    name: "Tauros",
    pokedexId: 128,
    familyId: 43
  },
  {
    name: "Magikarp",
    pokedexId: 129,
    familyId: 43
  },
  {
    name: "Gyarados",
    pokedexId: 130,
    familyId: 44
  },
  {
    name: "Lapras",
    pokedexId: 131,
    familyId: 44
  },
  {
    name: "Ditto",
    pokedexId: 132,
    familyId: 44
  },
  {
    name: "Eevee",
    pokedexId: 133,
    familyId: 45
  },
  {
    name: "Vaporeon",
    pokedexId: 134,
    familyId: 45
  },
  {
    name: "Jolteon",
    pokedexId: 135,
    familyId: 45
  },
  {
    name: "Flareon",
    pokedexId: 136,
    familyId: 46
  },
  {
    name: "Porygon",
    pokedexId: 137,
    familyId: 46
  },
  {
    name: "Omanyte",
    pokedexId: 138,
    familyId: 46
  },
  {
    name: "Omastar",
    pokedexId: 139,
    familyId: 47
  },
  {
    name: "Kabuto",
    pokedexId: 140,
    familyId: 47
  },
  {
    name: "Kabutops",
    pokedexId: 141,
    familyId: 47
  },
  {
    name: "Aerodactyl",
    pokedexId: 142,
    familyId: 48
  },
  {
    name: "Snorlax",
    pokedexId: 143,
    familyId: 48
  },
  {
    name: "Articuno",
    pokedexId: 144,
    familyId: 48
  },
  {
    name: "Zapdos",
    pokedexId: 145,
    familyId: 49
  },
  {
    name: "Moltres",
    pokedexId: 146,
    familyId: 49
  },
  {
    name: "Dratini",
    pokedexId: 147,
    familyId: 49
  },
  {
    name: "Dragonair",
    pokedexId: 148,
    familyId: 50
  },
  {
    name: "Dragonite",
    pokedexId: 149,
    familyId: 50
  },
  {
    name: "Mewtwo",
    pokedexId: 150,
    familyId: 50
  },
  {
    name: "Mew",
    pokedexId: 151,
    familyId: 51
  },
  {
    name: "Chikorita",
    pokedexId: 152,
    familyId: 51
  },
  {
    name: "Bayleef",
    pokedexId: 153,
    familyId: 51
  },
  {
    name: "Meganium",
    pokedexId: 154,
    familyId: 52
  },
  {
    name: "Cyndaquil",
    pokedexId: 155,
    familyId: 52
  },
  {
    name: "Quilava",
    pokedexId: 156,
    familyId: 52
  },
  {
    name: "Typhlosion",
    pokedexId: 157,
    familyId: 53
  },
  {
    name: "Totodile",
    pokedexId: 158,
    familyId: 53
  },
  {
    name: "Croconaw",
    pokedexId: 159,
    familyId: 53
  },
  {
    name: "Feraligatr",
    pokedexId: 160,
    familyId: 54
  },
  {
    name: "Sentret",
    pokedexId: 161,
    familyId: 54
  },
  {
    name: "Furret",
    pokedexId: 162,
    familyId: 54
  },
  {
    name: "Hoothoot",
    pokedexId: 163,
    familyId: 55
  },
  {
    name: "Noctowl",
    pokedexId: 164,
    familyId: 55
  },
  {
    name: "Ledyba",
    pokedexId: 165,
    familyId: 55
  },
  {
    name: "Ledian",
    pokedexId: 166,
    familyId: 56
  },
  {
    name: "Spinarak",
    pokedexId: 167,
    familyId: 56
  },
  {
    name: "Ariados",
    pokedexId: 168,
    familyId: 56
  },
  {
    name: "Crobat",
    pokedexId: 169,
    familyId: 57
  },
  {
    name: "Chinchou",
    pokedexId: 170,
    familyId: 57
  },
  {
    name: "Lanturn",
    pokedexId: 171,
    familyId: 57
  },
  {
    name: "Pichu",
    pokedexId: 172,
    familyId: 58
  },
  {
    name: "Cleffa",
    pokedexId: 173,
    familyId: 58
  },
  {
    name: "Igglybuff",
    pokedexId: 174,
    familyId: 58
  },
  {
    name: "Togepi",
    pokedexId: 175,
    familyId: 59
  },
  {
    name: "Togetic",
    pokedexId: 176,
    familyId: 59
  },
  {
    name: "Natu",
    pokedexId: 177,
    familyId: 59
  },
  {
    name: "Xatu",
    pokedexId: 178,
    familyId: 60
  },
  {
    name: "Mareep",
    pokedexId: 179,
    familyId: 60
  },
  {
    name: "Flaaffy",
    pokedexId: 180,
    familyId: 60
  },
  {
    name: "Ampharos",
    pokedexId: 181,
    familyId: 61
  },
  {
    name: "Bellossom",
    pokedexId: 182,
    familyId: 61
  },
  {
    name: "Marill",
    pokedexId: 183,
    familyId: 61
  },
  {
    name: "Azumarill",
    pokedexId: 184,
    familyId: 62
  },
  {
    name: "Sudowoodo",
    pokedexId: 185,
    familyId: 62
  },
  {
    name: "Politoed",
    pokedexId: 186,
    familyId: 62
  },
  {
    name: "Hoppip",
    pokedexId: 187,
    familyId: 63
  },
  {
    name: "Skiploom",
    pokedexId: 188,
    familyId: 63
  },
  {
    name: "Jumpluff",
    pokedexId: 189,
    familyId: 63
  },
  {
    name: "Aipom",
    pokedexId: 190,
    familyId: 64
  },
  {
    name: "Sunkern",
    pokedexId: 191,
    familyId: 64
  },
  {
    name: "Sunflora",
    pokedexId: 192,
    familyId: 64
  },
  {
    name: "Yanma",
    pokedexId: 193,
    familyId: 65
  },
  {
    name: "Wooper",
    pokedexId: 194,
    familyId: 65
  },
  {
    name: "Quagsire",
    pokedexId: 195,
    familyId: 65
  },
  {
    name: "Espeon",
    pokedexId: 196,
    familyId: 66
  },
  {
    name: "Umbreon",
    pokedexId: 197,
    familyId: 66
  },
  {
    name: "Murkrow",
    pokedexId: 198,
    familyId: 66
  },
  {
    name: "Slowking",
    pokedexId: 199,
    familyId: 67
  },
  {
    name: "Misdreavus",
    pokedexId: 200,
    familyId: 67
  },
  {
    name: "Unown",
    pokedexId: 201,
    familyId: 67
  },
  {
    name: "Wobbuffet",
    pokedexId: 202,
    familyId: 68
  },
  {
    name: "Girafarig",
    pokedexId: 203,
    familyId: 68
  },
  {
    name: "Pineco",
    pokedexId: 204,
    familyId: 68
  },
  {
    name: "Forretress",
    pokedexId: 205,
    familyId: 69
  },
  {
    name: "Dunsparce",
    pokedexId: 206,
    familyId: 69
  },
  {
    name: "Gligar",
    pokedexId: 207,
    familyId: 69
  },
  {
    name: "Steelix",
    pokedexId: 208,
    familyId: 70
  },
  {
    name: "Snubbull",
    pokedexId: 209,
    familyId: 70
  },
  {
    name: "Granbull",
    pokedexId: 210,
    familyId: 70
  },
  {
    name: "Qwilfish",
    pokedexId: 211,
    familyId: 71
  },
  {
    name: "Scizor",
    pokedexId: 212,
    familyId: 71
  },
  {
    name: "Shuckle",
    pokedexId: 213,
    familyId: 71
  },
  {
    name: "Heracross",
    pokedexId: 214,
    familyId: 72
  },
  {
    name: "Sneasel",
    pokedexId: 215,
    familyId: 72
  },
  {
    name: "Teddiursa",
    pokedexId: 216,
    familyId: 72
  },
  {
    name: "Ursaring",
    pokedexId: 217,
    familyId: 73
  },
  {
    name: "Slugma",
    pokedexId: 218,
    familyId: 73
  },
  {
    name: "Magcargo",
    pokedexId: 219,
    familyId: 73
  },
  {
    name: "Swinub",
    pokedexId: 220,
    familyId: 74
  },
  {
    name: "Piloswine",
    pokedexId: 221,
    familyId: 74
  },
  {
    name: "Corsola",
    pokedexId: 222,
    familyId: 74
  },
  {
    name: "Remoraid",
    pokedexId: 223,
    familyId: 75
  },
  {
    name: "Octillery",
    pokedexId: 224,
    familyId: 75
  },
  {
    name: "Delibird",
    pokedexId: 225,
    familyId: 75
  },
  {
    name: "Mantine",
    pokedexId: 226,
    familyId: 76
  },
  {
    name: "Skarmory",
    pokedexId: 227,
    familyId: 76
  },
  {
    name: "Houndour",
    pokedexId: 228,
    familyId: 76
  },
  {
    name: "Houndoom",
    pokedexId: 229,
    familyId: 77
  },
  {
    name: "Kingdra",
    pokedexId: 230,
    familyId: 77
  },
  {
    name: "Phanpy",
    pokedexId: 231,
    familyId: 77
  },
  {
    name: "Donphan",
    pokedexId: 232,
    familyId: 78
  },
  {
    name: "Porygon2",
    pokedexId: 233,
    familyId: 78
  },
  {
    name: "Stantler",
    pokedexId: 234,
    familyId: 78
  },
  {
    name: "Smeargle",
    pokedexId: 235,
    familyId: 79
  },
  {
    name: "Tyrogue",
    pokedexId: 236,
    familyId: 79
  },
  {
    name: "Hitmontop",
    pokedexId: 237,
    familyId: 79
  },
  {
    name: "Smoochum",
    pokedexId: 238,
    familyId: 80
  },
  {
    name: "Elekid",
    pokedexId: 239,
    familyId: 80
  },
  {
    name: "Magby",
    pokedexId: 240,
    familyId: 80
  },
  {
    name: "Miltank",
    pokedexId: 241,
    familyId: 81
  },
  {
    name: "Blissey",
    pokedexId: 242,
    familyId: 81
  },
  {
    name: "Raikou",
    pokedexId: 243,
    familyId: 81
  },
  {
    name: "Entei",
    pokedexId: 244,
    familyId: 82
  },
  {
    name: "Suicune",
    pokedexId: 245,
    familyId: 82
  },
  {
    name: "Larvitar",
    pokedexId: 246,
    familyId: 82
  },
  {
    name: "Pupitar",
    pokedexId: 247,
    familyId: 83
  },
  {
    name: "Tyranitar",
    pokedexId: 248,
    familyId: 83
  },
  {
    name: "Lugia",
    pokedexId: 249,
    familyId: 83
  },
  {
    name: "Ho-Oh",
    pokedexId: 250,
    familyId: 84
  },
  {
    name: "Celebi",
    pokedexId: 251,
    familyId: 84
  },
  {
    name: "Treecko",
    pokedexId: 252,
    familyId: 84
  },
  {
    name: "Grovyle",
    pokedexId: 253,
    familyId: 85
  },
  {
    name: "Sceptile",
    pokedexId: 254,
    familyId: 85
  },
  {
    name: "Torchic",
    pokedexId: 255,
    familyId: 85
  },
  {
    name: "Combusken",
    pokedexId: 256,
    familyId: 86
  },
  {
    name: "Blaziken",
    pokedexId: 257,
    familyId: 86
  },
  {
    name: "Mudkip",
    pokedexId: 258,
    familyId: 86
  },
  {
    name: "Marshtomp",
    pokedexId: 259,
    familyId: 87
  },
  {
    name: "Swampert",
    pokedexId: 260,
    familyId: 87
  },
  {
    name: "Poochyena",
    pokedexId: 261,
    familyId: 87
  },
  {
    name: "Mightyena",
    pokedexId: 262,
    familyId: 88
  },
  {
    name: "Zigzagoon",
    pokedexId: 263,
    familyId: 88
  },
  {
    name: "Linoone",
    pokedexId: 264,
    familyId: 88
  },
  {
    name: "Wurmple",
    pokedexId: 265,
    familyId: 89
  },
  {
    name: "Silcoon",
    pokedexId: 266,
    familyId: 89
  },
  {
    name: "Beautifly",
    pokedexId: 267,
    familyId: 89
  },
  {
    name: "Cascoon",
    pokedexId: 268,
    familyId: 90
  },
  {
    name: "Dustox",
    pokedexId: 269,
    familyId: 90
  },
  {
    name: "Lotad",
    pokedexId: 270,
    familyId: 90
  },
  {
    name: "Lombre",
    pokedexId: 271,
    familyId: 91
  },
  {
    name: "Ludicolo",
    pokedexId: 272,
    familyId: 91
  },
  {
    name: "Seedot",
    pokedexId: 273,
    familyId: 91
  },
  {
    name: "Nuzleaf",
    pokedexId: 274,
    familyId: 92
  },
  {
    name: "Shiftry",
    pokedexId: 275,
    familyId: 92
  },
  {
    name: "Taillow",
    pokedexId: 276,
    familyId: 92
  },
  {
    name: "Swellow",
    pokedexId: 277,
    familyId: 93
  },
  {
    name: "Wingull",
    pokedexId: 278,
    familyId: 93
  },
  {
    name: "Pelipper",
    pokedexId: 279,
    familyId: 93
  },
  {
    name: "Ralts",
    pokedexId: 280,
    familyId: 94
  },
  {
    name: "Kirlia",
    pokedexId: 281,
    familyId: 94
  },
  {
    name: "Gardevoir",
    pokedexId: 282,
    familyId: 94
  },
  {
    name: "Surskit",
    pokedexId: 283,
    familyId: 95
  },
  {
    name: "Masquerain",
    pokedexId: 284,
    familyId: 95
  },
  {
    name: "Shroomish",
    pokedexId: 285,
    familyId: 95
  },
  {
    name: "Breloom",
    pokedexId: 286,
    familyId: 96
  },
  {
    name: "Slakoth",
    pokedexId: 287,
    familyId: 96
  },
  {
    name: "Vigoroth",
    pokedexId: 288,
    familyId: 96
  },
  {
    name: "Slaking",
    pokedexId: 289,
    familyId: 97
  },
  {
    name: "Nincada",
    pokedexId: 290,
    familyId: 97
  },
  {
    name: "Ninjask",
    pokedexId: 291,
    familyId: 97
  },
  {
    name: "Shedinja",
    pokedexId: 292,
    familyId: 98
  },
  {
    name: "Whismur",
    pokedexId: 293,
    familyId: 98
  },
  {
    name: "Loudred",
    pokedexId: 294,
    familyId: 98
  },
  {
    name: "Exploud",
    pokedexId: 295,
    familyId: 99
  },
  {
    name: "Makuhita",
    pokedexId: 296,
    familyId: 99
  },
  {
    name: "Hariyama",
    pokedexId: 297,
    familyId: 99
  },
  {
    name: "Azurill",
    pokedexId: 298,
    familyId: 100
  },
  {
    name: "Nosepass",
    pokedexId: 299,
    familyId: 100
  },
  {
    name: "Skitty",
    pokedexId: 300,
    familyId: 100
  },
  {
    name: "Delcatty",
    pokedexId: 301,
    familyId: 101
  },
  {
    name: "Sableye",
    pokedexId: 302,
    familyId: 101
  },
  {
    name: "Mawile",
    pokedexId: 303,
    familyId: 101
  },
  {
    name: "Aron",
    pokedexId: 304,
    familyId: 102
  },
  {
    name: "Lairon",
    pokedexId: 305,
    familyId: 102
  },
  {
    name: "Aggron",
    pokedexId: 306,
    familyId: 102
  },
  {
    name: "Meditite",
    pokedexId: 307,
    familyId: 103
  },
  {
    name: "Medicham",
    pokedexId: 308,
    familyId: 103
  },
  {
    name: "Electrike",
    pokedexId: 309,
    familyId: 103
  },
  {
    name: "Manectric",
    pokedexId: 310,
    familyId: 104
  },
  {
    name: "Plusle",
    pokedexId: 311,
    familyId: 104
  },
  {
    name: "Minun",
    pokedexId: 312,
    familyId: 104
  },
  {
    name: "Volbeat",
    pokedexId: 313,
    familyId: 105
  },
  {
    name: "Illumise",
    pokedexId: 314,
    familyId: 105
  },
  {
    name: "Roselia",
    pokedexId: 315,
    familyId: 105
  },
  {
    name: "Gulpin",
    pokedexId: 316,
    familyId: 106
  },
  {
    name: "Swalot",
    pokedexId: 317,
    familyId: 106
  },
  {
    name: "Carvanha",
    pokedexId: 318,
    familyId: 106
  },
  {
    name: "Sharpedo",
    pokedexId: 319,
    familyId: 107
  },
  {
    name: "Wailmer",
    pokedexId: 320,
    familyId: 107
  },
  {
    name: "Wailord",
    pokedexId: 321,
    familyId: 107
  },
  {
    name: "Numel",
    pokedexId: 322,
    familyId: 108
  },
  {
    name: "Camerupt",
    pokedexId: 323,
    familyId: 108
  },
  {
    name: "Torkoal",
    pokedexId: 324,
    familyId: 108
  },
  {
    name: "Spoink",
    pokedexId: 325,
    familyId: 109
  },
  {
    name: "Grumpig",
    pokedexId: 326,
    familyId: 109
  },
  {
    name: "Spinda",
    pokedexId: 327,
    familyId: 109
  },
  {
    name: "Trapinch",
    pokedexId: 328,
    familyId: 110
  },
  {
    name: "Vibrava",
    pokedexId: 329,
    familyId: 110
  },
  {
    name: "Flygon",
    pokedexId: 330,
    familyId: 110
  },
  {
    name: "Cacnea",
    pokedexId: 331,
    familyId: 111
  },
  {
    name: "Cacturne",
    pokedexId: 332,
    familyId: 111
  },
  {
    name: "Swablu",
    pokedexId: 333,
    familyId: 111
  },
  {
    name: "Altaria",
    pokedexId: 334,
    familyId: 112
  },
  {
    name: "Zangoose",
    pokedexId: 335,
    familyId: 112
  },
  {
    name: "Seviper",
    pokedexId: 336,
    familyId: 112
  },
  {
    name: "Lunatone",
    pokedexId: 337,
    familyId: 113
  },
  {
    name: "Solrock",
    pokedexId: 338,
    familyId: 113
  },
  {
    name: "Barboach",
    pokedexId: 339,
    familyId: 113
  },
  {
    name: "Whiscash",
    pokedexId: 340,
    familyId: 114
  },
  {
    name: "Corphish",
    pokedexId: 341,
    familyId: 114
  },
  {
    name: "Crawdaunt",
    pokedexId: 342,
    familyId: 114
  },
  {
    name: "Baltoy",
    pokedexId: 343,
    familyId: 115
  },
  {
    name: "Claydol",
    pokedexId: 344,
    familyId: 115
  },
  {
    name: "Lileep",
    pokedexId: 345,
    familyId: 115
  },
  {
    name: "Cradily",
    pokedexId: 346,
    familyId: 116
  },
  {
    name: "Anorith",
    pokedexId: 347,
    familyId: 116
  },
  {
    name: "Armaldo",
    pokedexId: 348,
    familyId: 116
  },
  {
    name: "Feebas",
    pokedexId: 349,
    familyId: 117
  },
  {
    name: "Milotic",
    pokedexId: 350,
    familyId: 117
  },
  {
    name: "Castform",
    pokedexId: 351,
    familyId: 117
  },
  {
    name: "Kecleon",
    pokedexId: 352,
    familyId: 118
  },
  {
    name: "Shuppet",
    pokedexId: 353,
    familyId: 118
  },
  {
    name: "Banette",
    pokedexId: 354,
    familyId: 118
  },
  {
    name: "Duskull",
    pokedexId: 355,
    familyId: 119
  },
  {
    name: "Dusclops",
    pokedexId: 356,
    familyId: 119
  },
  {
    name: "Tropius",
    pokedexId: 357,
    familyId: 119
  },
  {
    name: "Chimecho",
    pokedexId: 358,
    familyId: 120
  },
  {
    name: "Absol",
    pokedexId: 359,
    familyId: 120
  },
  {
    name: "Wynaut",
    pokedexId: 360,
    familyId: 120
  },
  {
    name: "Snorunt",
    pokedexId: 361,
    familyId: 121
  },
  {
    name: "Glalie",
    pokedexId: 362,
    familyId: 121
  },
  {
    name: "Spheal",
    pokedexId: 363,
    familyId: 121
  },
  {
    name: "Sealeo",
    pokedexId: 364,
    familyId: 122
  },
  {
    name: "Walrein",
    pokedexId: 365,
    familyId: 122
  },
  {
    name: "Clamperl",
    pokedexId: 366,
    familyId: 122
  },
  {
    name: "Huntail",
    pokedexId: 367,
    familyId: 123
  },
  {
    name: "Gorebyss",
    pokedexId: 368,
    familyId: 123
  },
  {
    name: "Relicanth",
    pokedexId: 369,
    familyId: 123
  },
  {
    name: "Luvdisc",
    pokedexId: 370,
    familyId: 124
  },
  {
    name: "Bagon",
    pokedexId: 371,
    familyId: 124
  },
  {
    name: "Shelgon",
    pokedexId: 372,
    familyId: 124
  },
  {
    name: "Salamence",
    pokedexId: 373,
    familyId: 125
  },
  {
    name: "Beldum",
    pokedexId: 374,
    familyId: 125
  },
  {
    name: "Metang",
    pokedexId: 375,
    familyId: 125
  },
  {
    name: "Metagross",
    pokedexId: 376,
    familyId: 126
  },
  {
    name: "Regirock",
    pokedexId: 377,
    familyId: 126
  },
  {
    name: "Regice",
    pokedexId: 378,
    familyId: 126
  },
  {
    name: "Registeel",
    pokedexId: 379,
    familyId: 127
  },
  {
    name: "Latias",
    pokedexId: 380,
    familyId: 127
  },
  {
    name: "Latios",
    pokedexId: 381,
    familyId: 127
  },
  {
    name: "Kyogre",
    pokedexId: 382,
    familyId: 128
  },
  {
    name: "Groudon",
    pokedexId: 383,
    familyId: 128
  },
  {
    name: "Rayquaza",
    pokedexId: 384,
    familyId: 128
  },
  {
    name: "Jirachi",
    pokedexId: 385,
    familyId: 129
  },
  {
    name: "Deoxys",
    pokedexId: 386,
    familyId: 129
  },
  {
    name: "Turtwig",
    pokedexId: 387,
    familyId: 129
  },
  {
    name: "Grotle",
    pokedexId: 388,
    familyId: 130
  },
  {
    name: "Torterra",
    pokedexId: 389,
    familyId: 130
  },
  {
    name: "Chimchar",
    pokedexId: 390,
    familyId: 130
  },
  {
    name: "Monferno",
    pokedexId: 391,
    familyId: 131
  },
  {
    name: "Infernape",
    pokedexId: 392,
    familyId: 131
  },
  {
    name: "Piplup",
    pokedexId: 393,
    familyId: 131
  },
  {
    name: "Prinplup",
    pokedexId: 394,
    familyId: 132
  },
  {
    name: "Empoleon",
    pokedexId: 395,
    familyId: 132
  },
  {
    name: "Starly",
    pokedexId: 396,
    familyId: 132
  },
  {
    name: "Staravia",
    pokedexId: 397,
    familyId: 133
  },
  {
    name: "Staraptor",
    pokedexId: 398,
    familyId: 133
  },
  {
    name: "Bidoof",
    pokedexId: 399,
    familyId: 133
  },
  {
    name: "Bibarel",
    pokedexId: 400,
    familyId: 134
  },
  {
    name: "Kricketot",
    pokedexId: 401,
    familyId: 134
  },
  {
    name: "Kricketune",
    pokedexId: 402,
    familyId: 134
  },
  {
    name: "Shinx",
    pokedexId: 403,
    familyId: 135
  },
  {
    name: "Luxio",
    pokedexId: 404,
    familyId: 135
  },
  {
    name: "Luxray",
    pokedexId: 405,
    familyId: 135
  },
  {
    name: "Budew",
    pokedexId: 406,
    familyId: 136
  },
  {
    name: "Roserade",
    pokedexId: 407,
    familyId: 136
  },
  {
    name: "Cranidos",
    pokedexId: 408,
    familyId: 136
  },
  {
    name: "Rampardos",
    pokedexId: 409,
    familyId: 137
  },
  {
    name: "Shieldon",
    pokedexId: 410,
    familyId: 137
  },
  {
    name: "Bastiodon",
    pokedexId: 411,
    familyId: 137
  },
  {
    name: "Burmy",
    pokedexId: 412,
    familyId: 138
  },
  {
    name: "Wormadam",
    pokedexId: 413,
    familyId: 138
  },
  {
    name: "Mothim",
    pokedexId: 414,
    familyId: 138
  },
  {
    name: "Combee",
    pokedexId: 415,
    familyId: 139
  },
  {
    name: "Vespiquen",
    pokedexId: 416,
    familyId: 139
  },
  {
    name: "Pachirisu",
    pokedexId: 417,
    familyId: 139
  },
  {
    name: "Buizel",
    pokedexId: 418,
    familyId: 140
  },
  {
    name: "Floatzel",
    pokedexId: 419,
    familyId: 140
  },
  {
    name: "Cherubi",
    pokedexId: 420,
    familyId: 140
  },
  {
    name: "Cherrim",
    pokedexId: 421,
    familyId: 141
  },
  {
    name: "Shellos",
    pokedexId: 422,
    familyId: 141
  },
  {
    name: "Gastrodon",
    pokedexId: 423,
    familyId: 141
  },
  {
    name: "Ambipom",
    pokedexId: 424,
    familyId: 142
  },
  {
    name: "Drifloon",
    pokedexId: 425,
    familyId: 142
  },
  {
    name: "Drifblim",
    pokedexId: 426,
    familyId: 142
  },
  {
    name: "Buneary",
    pokedexId: 427,
    familyId: 143
  },
  {
    name: "Lopunny",
    pokedexId: 428,
    familyId: 143
  },
  {
    name: "Mismagius",
    pokedexId: 429,
    familyId: 143
  },
  {
    name: "Honchkrow",
    pokedexId: 430,
    familyId: 144
  },
  {
    name: "Glameow",
    pokedexId: 431,
    familyId: 144
  },
  {
    name: "Purugly",
    pokedexId: 432,
    familyId: 144
  },
  {
    name: "Chingling",
    pokedexId: 433,
    familyId: 145
  },
  {
    name: "Stunky",
    pokedexId: 434,
    familyId: 145
  },
  {
    name: "Skuntank",
    pokedexId: 435,
    familyId: 145
  },
  {
    name: "Bronzor",
    pokedexId: 436,
    familyId: 146
  },
  {
    name: "Bronzong",
    pokedexId: 437,
    familyId: 146
  },
  {
    name: "Bonsly",
    pokedexId: 438,
    familyId: 146
  },
  {
    name: "Mime Jr.",
    pokedexId: 439,
    familyId: 147
  },
  {
    name: "Happiny",
    pokedexId: 440,
    familyId: 147
  },
  {
    name: "Chatot",
    pokedexId: 441,
    familyId: 147
  },
  {
    name: "Spiritomb",
    pokedexId: 442,
    familyId: 148
  },
  {
    name: "Gible",
    pokedexId: 443,
    familyId: 148
  },
  {
    name: "Gabite",
    pokedexId: 444,
    familyId: 148
  },
  {
    name: "Garchomp",
    pokedexId: 445,
    familyId: 149
  },
  {
    name: "Munchlax",
    pokedexId: 446,
    familyId: 149
  },
  {
    name: "Riolu",
    pokedexId: 447,
    familyId: 149
  },
  {
    name: "Lucario",
    pokedexId: 448,
    familyId: 150
  },
  {
    name: "Hippopotas",
    pokedexId: 449,
    familyId: 150
  },
  {
    name: "Hippowdon",
    pokedexId: 450,
    familyId: 150
  },
  {
    name: "Skorupi",
    pokedexId: 451,
    familyId: 151
  },
  {
    name: "Drapion",
    pokedexId: 452,
    familyId: 151
  },
  {
    name: "Croagunk",
    pokedexId: 453,
    familyId: 151
  },
  {
    name: "Toxicroak",
    pokedexId: 454,
    familyId: 152
  },
  {
    name: "Carnivine",
    pokedexId: 455,
    familyId: 152
  },
  {
    name: "Finneon",
    pokedexId: 456,
    familyId: 152
  },
  {
    name: "Lumineon",
    pokedexId: 457,
    familyId: 153
  },
  {
    name: "Mantyke",
    pokedexId: 458,
    familyId: 153
  },
  {
    name: "Snover",
    pokedexId: 459,
    familyId: 153
  },
  {
    name: "Abomasnow",
    pokedexId: 460,
    familyId: 154
  },
  {
    name: "Weavile",
    pokedexId: 461,
    familyId: 154
  },
  {
    name: "Magnezone",
    pokedexId: 462,
    familyId: 154
  },
  {
    name: "Lickilicky",
    pokedexId: 463,
    familyId: 155
  },
  {
    name: "Rhyperior",
    pokedexId: 464,
    familyId: 155
  },
  {
    name: "Tangrowth",
    pokedexId: 465,
    familyId: 155
  },
  {
    name: "Electivire",
    pokedexId: 466,
    familyId: 156
  },
  {
    name: "Magmortar",
    pokedexId: 467,
    familyId: 156
  },
  {
    name: "Togekiss",
    pokedexId: 468,
    familyId: 156
  },
  {
    name: "Yanmega",
    pokedexId: 469,
    familyId: 157
  },
  {
    name: "Leafeon",
    pokedexId: 470,
    familyId: 157
  },
  {
    name: "Glaceon",
    pokedexId: 471,
    familyId: 157
  },
  {
    name: "Gliscor",
    pokedexId: 472,
    familyId: 158
  },
  {
    name: "Mamoswine",
    pokedexId: 473,
    familyId: 158
  },
  {
    name: "Porygon-Z",
    pokedexId: 474,
    familyId: 158
  },
  {
    name: "Gallade",
    pokedexId: 475,
    familyId: 159
  },
  {
    name: "Probopass",
    pokedexId: 476,
    familyId: 159
  },
  {
    name: "Dusknoir",
    pokedexId: 477,
    familyId: 159
  },
  {
    name: "Froslass",
    pokedexId: 478,
    familyId: 160
  },
  {
    name: "Rotom",
    pokedexId: 479,
    familyId: 160
  },
  {
    name: "Uxie",
    pokedexId: 480,
    familyId: 160
  },
  {
    name: "Mesprit",
    pokedexId: 481,
    familyId: 161
  },
  {
    name: "Azelf",
    pokedexId: 482,
    familyId: 161
  },
  {
    name: "Dialga",
    pokedexId: 483,
    familyId: 161
  },
  {
    name: "Palkia",
    pokedexId: 484,
    familyId: 162
  },
  {
    name: "Heatran",
    pokedexId: 485,
    familyId: 162
  },
  {
    name: "Regigigas",
    pokedexId: 486,
    familyId: 162
  },
  {
    name: "Giratina",
    pokedexId: 487,
    familyId: 163
  },
  {
    name: "Cresselia",
    pokedexId: 488,
    familyId: 163
  },
  {
    name: "Phione",
    pokedexId: 489,
    familyId: 163
  },
  {
    name: "Manaphy",
    pokedexId: 490,
    familyId: 164
  },
  {
    name: "Darkrai",
    pokedexId: 491,
    familyId: 164
  },
  {
    name: "Shaymin",
    pokedexId: 492,
    familyId: 164
  },
  {
    name: "Arceus",
    pokedexId: 493,
    familyId: 165
  },
  {
    name: "Victini",
    pokedexId: 494,
    familyId: 165
  },
  {
    name: "Snivy",
    pokedexId: 495,
    familyId: 165
  },
  {
    name: "Servine",
    pokedexId: 496,
    familyId: 166
  },
  {
    name: "Serperior",
    pokedexId: 497,
    familyId: 166
  },
  {
    name: "Tepig",
    pokedexId: 498,
    familyId: 166
  },
  {
    name: "Pignite",
    pokedexId: 499,
    familyId: 167
  },
  {
    name: "Emboar",
    pokedexId: 500,
    familyId: 167
  },
  {
    name: "Oshawott",
    pokedexId: 501,
    familyId: 167
  },
  {
    name: "Dewott",
    pokedexId: 502,
    familyId: 168
  },
  {
    name: "Samurott",
    pokedexId: 503,
    familyId: 168
  },
  {
    name: "Patrat",
    pokedexId: 504,
    familyId: 168
  },
  {
    name: "Watchog",
    pokedexId: 505,
    familyId: 169
  },
  {
    name: "Lillipup",
    pokedexId: 506,
    familyId: 169
  },
  {
    name: "Herdier",
    pokedexId: 507,
    familyId: 169
  },
  {
    name: "Stoutland",
    pokedexId: 508,
    familyId: 170
  },
  {
    name: "Purrloin",
    pokedexId: 509,
    familyId: 170
  },
  {
    name: "Liepard",
    pokedexId: 510,
    familyId: 170
  },
  {
    name: "Pansage",
    pokedexId: 511,
    familyId: 171
  },
  {
    name: "Simisage",
    pokedexId: 512,
    familyId: 171
  },
  {
    name: "Pansear",
    pokedexId: 513,
    familyId: 171
  },
  {
    name: "Simisear",
    pokedexId: 514,
    familyId: 172
  },
  {
    name: "Panpour",
    pokedexId: 515,
    familyId: 172
  },
  {
    name: "Simipour",
    pokedexId: 516,
    familyId: 172
  },
  {
    name: "Munna",
    pokedexId: 517,
    familyId: 173
  },
  {
    name: "Musharna",
    pokedexId: 518,
    familyId: 173
  },
  {
    name: "Pidove",
    pokedexId: 519,
    familyId: 173
  },
  {
    name: "Tranquill",
    pokedexId: 520,
    familyId: 174
  },
  {
    name: "Unfezant",
    pokedexId: 521,
    familyId: 174
  },
  {
    name: "Blitzle",
    pokedexId: 522,
    familyId: 174
  },
  {
    name: "Zebstrika",
    pokedexId: 523,
    familyId: 175
  },
  {
    name: "Roggenrola",
    pokedexId: 524,
    familyId: 175
  },
  {
    name: "Boldore",
    pokedexId: 525,
    familyId: 175
  },
  {
    name: "Gigalith",
    pokedexId: 526,
    familyId: 176
  },
  {
    name: "Woobat",
    pokedexId: 527,
    familyId: 176
  },
  {
    name: "Swoobat",
    pokedexId: 528,
    familyId: 176
  },
  {
    name: "Drilbur",
    pokedexId: 529,
    familyId: 177
  },
  {
    name: "Excadrill",
    pokedexId: 530,
    familyId: 177
  },
  {
    name: "Audino",
    pokedexId: 531,
    familyId: 177
  },
  {
    name: "Timburr",
    pokedexId: 532,
    familyId: 178
  },
  {
    name: "Gurdurr",
    pokedexId: 533,
    familyId: 178
  },
  {
    name: "Conkeldurr",
    pokedexId: 534,
    familyId: 178
  },
  {
    name: "Tympole",
    pokedexId: 535,
    familyId: 179
  },
  {
    name: "Palpitoad",
    pokedexId: 536,
    familyId: 179
  },
  {
    name: "Seismitoad",
    pokedexId: 537,
    familyId: 179
  },
  {
    name: "Throh",
    pokedexId: 538,
    familyId: 180
  },
  {
    name: "Sawk",
    pokedexId: 539,
    familyId: 180
  },
  {
    name: "Sewaddle",
    pokedexId: 540,
    familyId: 180
  },
  {
    name: "Swadloon",
    pokedexId: 541,
    familyId: 181
  },
  {
    name: "Leavanny",
    pokedexId: 542,
    familyId: 181
  },
  {
    name: "Venipede",
    pokedexId: 543,
    familyId: 181
  },
  {
    name: "Whirlipede",
    pokedexId: 544,
    familyId: 182
  },
  {
    name: "Scolipede",
    pokedexId: 545,
    familyId: 182
  },
  {
    name: "Cottonee",
    pokedexId: 546,
    familyId: 182
  },
  {
    name: "Whimsicott",
    pokedexId: 547,
    familyId: 183
  },
  {
    name: "Petilil",
    pokedexId: 548,
    familyId: 183
  },
  {
    name: "Lilligant",
    pokedexId: 549,
    familyId: 183
  },
  {
    name: "Basculin",
    pokedexId: 550,
    familyId: 184
  },
  {
    name: "Sandile",
    pokedexId: 551,
    familyId: 184
  },
  {
    name: "Krokorok",
    pokedexId: 552,
    familyId: 184
  },
  {
    name: "Krookodile",
    pokedexId: 553,
    familyId: 185
  },
  {
    name: "Darumaka",
    pokedexId: 554,
    familyId: 185
  },
  {
    name: "Darmanitan",
    pokedexId: 555,
    familyId: 185
  },
  {
    name: "Maractus",
    pokedexId: 556,
    familyId: 186
  },
  {
    name: "Dwebble",
    pokedexId: 557,
    familyId: 186
  },
  {
    name: "Crustle",
    pokedexId: 558,
    familyId: 186
  },
  {
    name: "Scraggy",
    pokedexId: 559,
    familyId: 187
  },
  {
    name: "Scrafty",
    pokedexId: 560,
    familyId: 187
  },
  {
    name: "Sigilyph",
    pokedexId: 561,
    familyId: 187
  },
  {
    name: "Yamask",
    pokedexId: 562,
    familyId: 188
  },
  {
    name: "Cofagrigus",
    pokedexId: 563,
    familyId: 188
  },
  {
    name: "Tirtouga",
    pokedexId: 564,
    familyId: 188
  },
  {
    name: "Carracosta",
    pokedexId: 565,
    familyId: 189
  },
  {
    name: "Archen",
    pokedexId: 566,
    familyId: 189
  },
  {
    name: "Archeops",
    pokedexId: 567,
    familyId: 189
  },
  {
    name: "Trubbish",
    pokedexId: 568,
    familyId: 190
  },
  {
    name: "Garbodor",
    pokedexId: 569,
    familyId: 190
  },
  {
    name: "Zorua",
    pokedexId: 570,
    familyId: 190
  },
  {
    name: "Zoroark",
    pokedexId: 571,
    familyId: 191
  },
  {
    name: "Minccino",
    pokedexId: 572,
    familyId: 191
  },
  {
    name: "Cinccino",
    pokedexId: 573,
    familyId: 191
  },
  {
    name: "Gothita",
    pokedexId: 574,
    familyId: 192
  },
  {
    name: "Gothorita",
    pokedexId: 575,
    familyId: 192
  },
  {
    name: "Gothitelle",
    pokedexId: 576,
    familyId: 192
  },
  {
    name: "Solosis",
    pokedexId: 577,
    familyId: 193
  },
  {
    name: "Duosion",
    pokedexId: 578,
    familyId: 193
  },
  {
    name: "Reuniclus",
    pokedexId: 579,
    familyId: 193
  },
  {
    name: "Ducklett",
    pokedexId: 580,
    familyId: 194
  },
  {
    name: "Swanna",
    pokedexId: 581,
    familyId: 194
  },
  {
    name: "Vanillite",
    pokedexId: 582,
    familyId: 194
  },
  {
    name: "Vanillish",
    pokedexId: 583,
    familyId: 195
  },
  {
    name: "Vanilluxe",
    pokedexId: 584,
    familyId: 195
  },
  {
    name: "Deerling",
    pokedexId: 585,
    familyId: 195
  },
  {
    name: "Sawsbuck",
    pokedexId: 586,
    familyId: 196
  },
  {
    name: "Emolga",
    pokedexId: 587,
    familyId: 196
  },
  {
    name: "Karrablast",
    pokedexId: 588,
    familyId: 196
  },
  {
    name: "Escavalier",
    pokedexId: 589,
    familyId: 197
  },
  {
    name: "Foongus",
    pokedexId: 590,
    familyId: 197
  },
  {
    name: "Amoonguss",
    pokedexId: 591,
    familyId: 197
  },
  {
    name: "Frillish",
    pokedexId: 592,
    familyId: 198
  },
  {
    name: "Jellicent",
    pokedexId: 593,
    familyId: 198
  },
  {
    name: "Alomomola",
    pokedexId: 594,
    familyId: 198
  },
  {
    name: "Joltik",
    pokedexId: 595,
    familyId: 199
  },
  {
    name: "Galvantula",
    pokedexId: 596,
    familyId: 199
  },
  {
    name: "Ferroseed",
    pokedexId: 597,
    familyId: 199
  },
  {
    name: "Ferrothorn",
    pokedexId: 598,
    familyId: 200
  },
  {
    name: "Klink",
    pokedexId: 599,
    familyId: 200
  },
  {
    name: "Klang",
    pokedexId: 600,
    familyId: 200
  },
  {
    name: "Klinklang",
    pokedexId: 601,
    familyId: 201
  },
  {
    name: "Tynamo",
    pokedexId: 602,
    familyId: 201
  },
  {
    name: "Eelektrik",
    pokedexId: 603,
    familyId: 201
  },
  {
    name: "Eelektross",
    pokedexId: 604,
    familyId: 202
  },
  {
    name: "Elgyem",
    pokedexId: 605,
    familyId: 202
  },
  {
    name: "Beheeyem",
    pokedexId: 606,
    familyId: 202
  },
  {
    name: "Litwick",
    pokedexId: 607,
    familyId: 203
  },
  {
    name: "Lampent",
    pokedexId: 608,
    familyId: 203
  },
  {
    name: "Chandelure",
    pokedexId: 609,
    familyId: 203
  },
  {
    name: "Axew",
    pokedexId: 610,
    familyId: 204
  },
  {
    name: "Fraxure",
    pokedexId: 611,
    familyId: 204
  },
  {
    name: "Haxorus",
    pokedexId: 612,
    familyId: 204
  },
  {
    name: "Cubchoo",
    pokedexId: 613,
    familyId: 205
  },
  {
    name: "Beartic",
    pokedexId: 614,
    familyId: 205
  },
  {
    name: "Cryogonal",
    pokedexId: 615,
    familyId: 205
  },
  {
    name: "Shelmet",
    pokedexId: 616,
    familyId: 206
  },
  {
    name: "Accelgor",
    pokedexId: 617,
    familyId: 206
  },
  {
    name: "Stunfisk",
    pokedexId: 618,
    familyId: 206
  },
  {
    name: "Mienfoo",
    pokedexId: 619,
    familyId: 207
  },
  {
    name: "Mienshao",
    pokedexId: 620,
    familyId: 207
  },
  {
    name: "Druddigon",
    pokedexId: 621,
    familyId: 207
  },
  {
    name: "Golett",
    pokedexId: 622,
    familyId: 208
  },
  {
    name: "Golurk",
    pokedexId: 623,
    familyId: 208
  },
  {
    name: "Pawniard",
    pokedexId: 624,
    familyId: 208
  },
  {
    name: "Bisharp",
    pokedexId: 625,
    familyId: 209
  },
  {
    name: "Bouffalant",
    pokedexId: 626,
    familyId: 209
  },
  {
    name: "Rufflet",
    pokedexId: 627,
    familyId: 209
  },
  {
    name: "Braviary",
    pokedexId: 628,
    familyId: 210
  },
  {
    name: "Vullaby",
    pokedexId: 629,
    familyId: 210
  },
  {
    name: "Mandibuzz",
    pokedexId: 630,
    familyId: 210
  },
  {
    name: "Heatmor",
    pokedexId: 631,
    familyId: 211
  },
  {
    name: "Durant",
    pokedexId: 632,
    familyId: 211
  },
  {
    name: "Deino",
    pokedexId: 633,
    familyId: 211
  },
  {
    name: "Zweilous",
    pokedexId: 634,
    familyId: 212
  },
  {
    name: "Hydreigon",
    pokedexId: 635,
    familyId: 212
  },
  {
    name: "Larvesta",
    pokedexId: 636,
    familyId: 212
  },
  {
    name: "Volcarona",
    pokedexId: 637,
    familyId: 213
  },
  {
    name: "Cobalion",
    pokedexId: 638,
    familyId: 213
  },
  {
    name: "Terrakion",
    pokedexId: 639,
    familyId: 213
  },
  {
    name: "Virizion",
    pokedexId: 640,
    familyId: 214
  },
  {
    name: "Tornadus",
    pokedexId: 641,
    familyId: 214
  },
  {
    name: "Thundurus",
    pokedexId: 642,
    familyId: 214
  },
  {
    name: "Reshiram",
    pokedexId: 643,
    familyId: 215
  },
  {
    name: "Zekrom",
    pokedexId: 644,
    familyId: 215
  },
  {
    name: "Landorus",
    pokedexId: 645,
    familyId: 215
  },
  {
    name: "Kyurem",
    pokedexId: 646,
    familyId: 216
  },
  {
    name: "Keldeo",
    pokedexId: 647,
    familyId: 216
  },
  {
    name: "Meloetta",
    pokedexId: 648,
    familyId: 216
  },
  {
    name: "Genesect",
    pokedexId: 649,
    familyId: 217
  }
];