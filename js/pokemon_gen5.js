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
    familyId: 8
  },
  {
    name: "Fearow",
    pokedexId: 22,
    familyId: 8
  },
  {
    name: "Ekans",
    pokedexId: 23,
    familyId: 9
  },
  {
    name: "Arbok",
    pokedexId: 24,
    familyId: 9
  },
  {
    name: "Pikachu",
    pokedexId: 25,
    familyId: 10
  },
  {
    name: "Raichu",
    pokedexId: 26,
    familyId: 10
  },
  {
    name: "Sandshrew",
    pokedexId: 27,
    familyId: 11
  },
  {
    name: "Sandslash",
    pokedexId: 28,
    familyId: 11
  },
  {
    name: "Nidoran♀",
    pokedexId: 29,
    familyId: 12
  },
  {
    name: "Nidorina",
    pokedexId: 30,
    familyId: 12
  },
  {
    name: "Nidoqueen",
    pokedexId: 31,
    familyId: 12
  },
  {
    name: "Nidoran♂",
    pokedexId: 32,
    familyId: 12
  },
  {
    name: "Nidorino",
    pokedexId: 33,
    familyId: 12
  },
  {
    name: "Nidoking",
    pokedexId: 34,
    familyId: 12
  },
  {
    name: "Clefairy",
    pokedexId: 35,
    familyId: 13
  },
  {
    name: "Clefable",
    pokedexId: 36,
    familyId: 13
  },
  {
    name: "Vulpix",
    pokedexId: 37,
    familyId: 14
  },
  {
    name: "Ninetales",
    pokedexId: 38,
    familyId: 14
  },
  {
    name: "Jigglypuff",
    pokedexId: 39,
    familyId: 15
  },
  {
    name: "Wigglytuff",
    pokedexId: 40,
    familyId: 15
  },
  {
    name: "Zubat",
    pokedexId: 41,
    familyId: 16
  },
  {
    name: "Golbat",
    pokedexId: 42,
    familyId: 16
  },
  {
    name: "Oddish",
    pokedexId: 43,
    familyId: 17
  },
  {
    name: "Gloom",
    pokedexId: 44,
    familyId: 17
  },
  {
    name: "Vileplume",
    pokedexId: 45,
    familyId: 17
  },
  {
    name: "Paras",
    pokedexId: 46,
    familyId: 18
  },
  {
    name: "Parasect",
    pokedexId: 47,
    familyId: 18
  },
  {
    name: "Venonat",
    pokedexId: 48,
    familyId: 19
  },
  {
    name: "Venomoth",
    pokedexId: 49,
    familyId: 19
  },
  {
    name: "Diglett",
    pokedexId: 50,
    familyId: 20
  },
  {
    name: "Dugtrio",
    pokedexId: 51,
    familyId: 20
  },
  {
    name: "Meowth",
    pokedexId: 52,
    familyId: 21
  },
  {
    name: "Persian",
    pokedexId: 53,
    familyId: 22
  },
  {
    name: "Psyduck",
    pokedexId: 54,
    familyId: 23
  },
  {
    name: "Golduck",
    pokedexId: 55,
    familyId: 23
  },
  {
    name: "Mankey",
    pokedexId: 56,
    familyId: 24
  },
  {
    name: "Primeape",
    pokedexId: 57,
    familyId: 24
  },
  {
    name: "Growlithe",
    pokedexId: 58,
    familyId: 25
  },
  {
    name: "Arcanine",
    pokedexId: 59,
    familyId: 25
  },
  {
    name: "Poliwag",
    pokedexId: 60,
    familyId: 26
  },
  {
    name: "Poliwhirl",
    pokedexId: 61,
    familyId: 26
  },
  {
    name: "Poliwrath",
    pokedexId: 62,
    familyId: 26
  },
  {
    name: "Abra",
    pokedexId: 63,
    familyId: 27
  },
  {
    name: "Kadabra",
    pokedexId: 64,
    familyId: 27
  },
  {
    name: "Alakazam",
    pokedexId: 65,
    familyId: 27
  },
  {
    name: "Machop",
    pokedexId: 66,
    familyId: 28
  },
  {
    name: "Machoke",
    pokedexId: 67,
    familyId: 28
  },
  {
    name: "Machamp",
    pokedexId: 68,
    familyId: 28
  },
  {
    name: "Bellsprout",
    pokedexId: 69,
    familyId: 29
  },
  {
    name: "Weepinbell",
    pokedexId: 70,
    familyId: 29
  },
  {
    name: "Victreebel",
    pokedexId: 71,
    familyId: 29
  },
  {
    name: "Tentacool",
    pokedexId: 72,
    familyId: 30
  },
  {
    name: "Tentacruel",
    pokedexId: 73,
    familyId: 30
  },
  {
    name: "Geodude",
    pokedexId: 74,
    familyId: 31
  },
  {
    name: "Graveler",
    pokedexId: 75,
    familyId: 31
  },
  {
    name: "Golem",
    pokedexId: 76,
    familyId: 31
  },
  {
    name: "Ponyta",
    pokedexId: 77,
    familyId: 32
  },
  {
    name: "Rapidash",
    pokedexId: 78,
    familyId: 32
  },
  {
    name: "Slowpoke",
    pokedexId: 79,
    familyId: 33
  },
  {
    name: "Slowbro",
    pokedexId: 80,
    familyId: 33
  },
  {
    name: "Magnemite",
    pokedexId: 81,
    familyId: 34
  },
  {
    name: "Magneton",
    pokedexId: 82,
    familyId: 34
  },
  {
    name: "Farfetch'd",
    pokedexId: 83,
    familyId: 35
  },
  {
    name: "Doduo",
    pokedexId: 84,
    familyId: 36
  },
  {
    name: "Dodrio",
    pokedexId: 85,
    familyId: 36
  },
  {
    name: "Seel",
    pokedexId: 86,
    familyId: 37
  },
  {
    name: "Dewgong",
    pokedexId: 87,
    familyId: 37
  },
  {
    name: "Grimer",
    pokedexId: 88,
    familyId: 38
  },
  {
    name: "Muk",
    pokedexId: 89,
    familyId: 38
  },
  {
    name: "Shellder",
    pokedexId: 90,
    familyId: 39
  },
  {
    name: "Cloyster",
    pokedexId: 91,
    familyId: 39
  },
  {
    name: "Gastly",
    pokedexId: 92,
    familyId: 40
  },
  {
    name: "Haunter",
    pokedexId: 93,
    familyId: 40
  },
  {
    name: "Gengar",
    pokedexId: 94,
    familyId: 40
  },
  {
    name: "Onix",
    pokedexId: 95,
    familyId: 41
  },
  {
    name: "Drowzee",
    pokedexId: 96,
    familyId: 42
  },
  {
    name: "Hypno",
    pokedexId: 97,
    familyId: 42
  },
  {
    name: "Krabby",
    pokedexId: 98,
    familyId: 43
  },
  {
    name: "Kingler",
    pokedexId: 99,
    familyId: 43
  },
  {
    name: "Voltorb",
    pokedexId: 100,
    familyId: 44
  },
  {
    name: "Electrode",
    pokedexId: 101,
    familyId: 44
  },
  {
    name: "Exeggcute",
    pokedexId: 102,
    familyId: 45
  },
  {
    name: "Exeggutor",
    pokedexId: 103,
    familyId: 45
  },
  {
    name: "Cubone",
    pokedexId: 104,
    familyId: 46
  },
  {
    name: "Marowak",
    pokedexId: 105,
    familyId: 46
  },
  {
    name: "Hitmonlee",
    pokedexId: 106,
    familyId: 47
  },
  {
    name: "Hitmonchan",
    pokedexId: 107,
    familyId: 47
  },
  {
    name: "Lickitung",
    pokedexId: 108,
    familyId: 48
  },
  {
    name: "Koffing",
    pokedexId: 109,
    familyId: 49
  },
  {
    name: "Weezing",
    pokedexId: 110,
    familyId: 49
  },
  {
    name: "Rhyhorn",
    pokedexId: 111,
    familyId: 50
  },
  {
    name: "Rhydon",
    pokedexId: 112,
    familyId: 50
  },
  {
    name: "Chansey",
    pokedexId: 113,
    familyId: 51
  },
  {
    name: "Tangela",
    pokedexId: 114,
    familyId: 52
  },
  {
    name: "Kangaskhan",
    pokedexId: 115,
    familyId: 53
  },
  {
    name: "Horsea",
    pokedexId: 116,
    familyId: 54
  },
  {
    name: "Seadra",
    pokedexId: 117,
    familyId: 54
  },
  {
    name: "Goldeen",
    pokedexId: 118,
    familyId: 55
  },
  {
    name: "Seaking",
    pokedexId: 119,
    familyId: 55
  },
  {
    name: "Staryu",
    pokedexId: 120,
    familyId: 56
  },
  {
    name: "Starmie",
    pokedexId: 121,
    familyId: 56
  },
  {
    name: "Mr. Mime",
    pokedexId: 122,
    familyId: 57
  },
  {
    name: "Scyther",
    pokedexId: 123,
    familyId: 58
  },
  {
    name: "Jynx",
    pokedexId: 124,
    familyId: 59
  },
  {
    name: "Electabuzz",
    pokedexId: 125,
    familyId: 60
  },
  {
    name: "Magmar",
    pokedexId: 126,
    familyId: 61
  },
  {
    name: "Pinsir",
    pokedexId: 127,
    familyId: 62
  },
  {
    name: "Tauros",
    pokedexId: 128,
    familyId: 63
  },
  {
    name: "Magikarp",
    pokedexId: 129,
    familyId: 64
  },
  {
    name: "Gyarados",
    pokedexId: 130,
    familyId: 64
  },
  {
    name: "Lapras",
    pokedexId: 131,
    familyId: 65
  },
  {
    name: "Ditto",
    pokedexId: 132,
    familyId: 66
  },
  {
    name: "Eevee",
    pokedexId: 133,
    familyId: 67
  },
  {
    name: "Vaporeon",
    pokedexId: 134,
    familyId: 67
  },
  {
    name: "Jolteon",
    pokedexId: 135,
    familyId: 67
  },
  {
    name: "Flareon",
    pokedexId: 136,
    familyId: 67
  },
  {
    name: "Porygon",
    pokedexId: 137,
    familyId: 68
  },
  {
    name: "Omanyte",
    pokedexId: 138,
    familyId: 69
  },
  {
    name: "Omastar",
    pokedexId: 139,
    familyId: 69
  },
  {
    name: "Kabuto",
    pokedexId: 140,
    familyId: 70
  },
  {
    name: "Kabutops",
    pokedexId: 141,
    familyId: 70
  },
  {
    name: "Aerodactyl",
    pokedexId: 142,
    familyId: 71
  },
  {
    name: "Snorlax",
    pokedexId: 143,
    familyId: 72
  },
  {
    name: "Articuno",
    pokedexId: 144,
    familyId: 73
  },
  {
    name: "Zapdos",
    pokedexId: 145,
    familyId: 74
  },
  {
    name: "Moltres",
    pokedexId: 146,
    familyId: 75
  },
  {
    name: "Dratini",
    pokedexId: 147,
    familyId: 76
  },
  {
    name: "Dragonair",
    pokedexId: 148,
    familyId: 76
  },
  {
    name: "Dragonite",
    pokedexId: 149,
    familyId: 76
  },
  {
    name: "Mewtwo",
    pokedexId: 150,
    familyId: 77
  },
  {
    name: "Mew",
    pokedexId: 151,
    familyId: 78
  },
  {
    name: "Chikorita",
    pokedexId: 152,
    familyId: 79
  },
  {
    name: "Bayleef",
    pokedexId: 153,
    familyId: 79
  },
  {
    name: "Meganium",
    pokedexId: 154,
    familyId: 79
  },
  {
    name: "Cyndaquil",
    pokedexId: 155,
    familyId: 80
  },
  {
    name: "Quilava",
    pokedexId: 156,
    familyId: 80
  },
  {
    name: "Typhlosion",
    pokedexId: 157,
    familyId: 80
  },
  {
    name: "Totodile",
    pokedexId: 158,
    familyId: 81
  },
  {
    name: "Croconaw",
    pokedexId: 159,
    familyId: 81
  },
  {
    name: "Feraligatr",
    pokedexId: 160,
    familyId: 81
  },
  {
    name: "Sentret",
    pokedexId: 161,
    familyId: 82
  },
  {
    name: "Furret",
    pokedexId: 162,
    familyId: 82
  },
  {
    name: "Hoothoot",
    pokedexId: 163,
    familyId: 83
  },
  {
    name: "Noctowl",
    pokedexId: 164,
    familyId: 83
  },
  {
    name: "Ledyba",
    pokedexId: 165,
    familyId: 84
  },
  {
    name: "Ledian",
    pokedexId: 166,
    familyId: 84
  },
  {
    name: "Spinarak",
    pokedexId: 167,
    familyId: 85
  },
  {
    name: "Ariados",
    pokedexId: 168,
    familyId: 85
  },
  {
    name: "Crobat",
    pokedexId: 169,
    familyId: 16
  },
  {
    name: "Chinchou",
    pokedexId: 170,
    familyId: 86
  },
  {
    name: "Lanturn",
    pokedexId: 171,
    familyId: 86
  },
  {
    name: "Pichu",
    pokedexId: 172,
    familyId: 10
  },
  {
    name: "Cleffa",
    pokedexId: 173,
    familyId: 13
  },
  {
    name: "Igglybuff",
    pokedexId: 174,
    familyId: 15
  },
  {
    name: "Togepi",
    pokedexId: 175,
    familyId: 87
  },
  {
    name: "Togetic",
    pokedexId: 176,
    familyId: 87
  },
  {
    name: "Natu",
    pokedexId: 177,
    familyId: 88
  },
  {
    name: "Xatu",
    pokedexId: 178,
    familyId: 88
  },
  {
    name: "Mareep",
    pokedexId: 179,
    familyId: 89
  },
  {
    name: "Flaaffy",
    pokedexId: 180,
    familyId: 89
  },
  {
    name: "Ampharos",
    pokedexId: 181,
    familyId: 89
  },
  {
    name: "Bellossom",
    pokedexId: 182,
    familyId: 17
  },
  {
    name: "Marill",
    pokedexId: 183,
    familyId: 90
  },
  {
    name: "Azumarill",
    pokedexId: 184,
    familyId: 90
  },
  {
    name: "Sudowoodo",
    pokedexId: 185,
    familyId: 91
  },
  {
    name: "Politoed",
    pokedexId: 186,
    familyId: 26
  },
  {
    name: "Hoppip",
    pokedexId: 187,
    familyId: 92
  },
  {
    name: "Skiploom",
    pokedexId: 188,
    familyId: 92
  },
  {
    name: "Jumpluff",
    pokedexId: 189,
    familyId: 92
  },
  {
    name: "Aipom",
    pokedexId: 190,
    familyId: 93
  },
  {
    name: "Sunkern",
    pokedexId: 191,
    familyId: 94
  },
  {
    name: "Sunflora",
    pokedexId: 192,
    familyId: 94
  },
  {
    name: "Yanma",
    pokedexId: 193,
    familyId: 95
  },
  {
    name: "Wooper",
    pokedexId: 194,
    familyId: 96
  },
  {
    name: "Quagsire",
    pokedexId: 195,
    familyId: 96
  },
  {
    name: "Espeon",
    pokedexId: 196,
    familyId: 67
  },
  {
    name: "Umbreon",
    pokedexId: 197,
    familyId: 67
  },
  {
    name: "Murkrow",
    pokedexId: 198,
    familyId: 97
  },
  {
    name: "Slowking",
    pokedexId: 199,
    familyId: 33
  },
  {
    name: "Misdreavus",
    pokedexId: 200,
    familyId: 98
  },
  {
    name: "Unown",
    pokedexId: 201,
    familyId: 99
  },
  {
    name: "Wobbuffet",
    pokedexId: 202,
    familyId: 100
  },
  {
    name: "Girafarig",
    pokedexId: 203,
    familyId: 101
  },
  {
    name: "Pineco",
    pokedexId: 204,
    familyId: 102
  },
  {
    name: "Forretress",
    pokedexId: 205,
    familyId: 102
  },
  {
    name: "Dunsparce",
    pokedexId: 206,
    familyId: 103
  },
  {
    name: "Gligar",
    pokedexId: 207,
    familyId: 104
  },
  {
    name: "Steelix",
    pokedexId: 208,
    familyId: 41
  },
  {
    name: "Snubbull",
    pokedexId: 209,
    familyId: 105
  },
  {
    name: "Granbull",
    pokedexId: 210,
    familyId: 105
  },
  {
    name: "Qwilfish",
    pokedexId: 211,
    familyId: 106
  },
  {
    name: "Scizor",
    pokedexId: 212,
    familyId: 58
  },
  {
    name: "Shuckle",
    pokedexId: 213,
    familyId: 107
  },
  {
    name: "Heracross",
    pokedexId: 214,
    familyId: 108
  },
  {
    name: "Sneasel",
    pokedexId: 215,
    familyId: 109
  },
  {
    name: "Teddiursa",
    pokedexId: 216,
    familyId: 110
  },
  {
    name: "Ursaring",
    pokedexId: 217,
    familyId: 110
  },
  {
    name: "Slugma",
    pokedexId: 218,
    familyId: 111
  },
  {
    name: "Magcargo",
    pokedexId: 219,
    familyId: 111
  },
  {
    name: "Swinub",
    pokedexId: 220,
    familyId: 112
  },
  {
    name: "Piloswine",
    pokedexId: 221,
    familyId: 112
  },
  {
    name: "Corsola",
    pokedexId: 222,
    familyId: 113
  },
  {
    name: "Remoraid",
    pokedexId: 223,
    familyId: 114
  },
  {
    name: "Octillery",
    pokedexId: 224,
    familyId: 114
  },
  {
    name: "Delibird",
    pokedexId: 225,
    familyId: 115
  },
  {
    name: "Mantine",
    pokedexId: 226,
    familyId: 116
  },
  {
    name: "Skarmory",
    pokedexId: 227,
    familyId: 117
  },
  {
    name: "Houndour",
    pokedexId: 228,
    familyId: 118
  },
  {
    name: "Houndoom",
    pokedexId: 229,
    familyId: 118
  },
  {
    name: "Kingdra",
    pokedexId: 230,
    familyId: 54
  },
  {
    name: "Phanpy",
    pokedexId: 231,
    familyId: 119
  },
  {
    name: "Donphan",
    pokedexId: 232,
    familyId: 119
  },
  {
    name: "Porygon2",
    pokedexId: 233,
    familyId: 68
  },
  {
    name: "Stantler",
    pokedexId: 234,
    familyId: 120
  },
  {
    name: "Smeargle",
    pokedexId: 235,
    familyId: 121
  },
  {
    name: "Tyrogue",
    pokedexId: 236,
    familyId: 47
  },
  {
    name: "Hitmontop",
    pokedexId: 237,
    familyId: 47
  },
  {
    name: "Smoochum",
    pokedexId: 238,
    familyId: 59
  },
  {
    name: "Elekid",
    pokedexId: 239,
    familyId: 60
  },
  {
    name: "Magby",
    pokedexId: 240,
    familyId: 61
  },
  {
    name: "Miltank",
    pokedexId: 241,
    familyId: 122
  },
  {
    name: "Blissey",
    pokedexId: 242,
    familyId: 51
  },
  {
    name: "Raikou",
    pokedexId: 243,
    familyId: 123
  },
  {
    name: "Entei",
    pokedexId: 244,
    familyId: 124
  },
  {
    name: "Suicune",
    pokedexId: 245,
    familyId: 125
  },
  {
    name: "Larvitar",
    pokedexId: 246,
    familyId: 126
  },
  {
    name: "Pupitar",
    pokedexId: 247,
    familyId: 126
  },
  {
    name: "Tyranitar",
    pokedexId: 248,
    familyId: 126
  },
  {
    name: "Lugia",
    pokedexId: 249,
    familyId: 127
  },
  {
    name: "Ho-Oh",
    pokedexId: 250,
    familyId: 128
  },
  {
    name: "Celebi",
    pokedexId: 251,
    familyId: 129
  },
  {
    name: "Treecko",
    pokedexId: 252,
    familyId: 130
  },
  {
    name: "Grovyle",
    pokedexId: 253,
    familyId: 131
  },
  {
    name: "Sceptile",
    pokedexId: 254,
    familyId: 131
  },
  {
    name: "Torchic",
    pokedexId: 255,
    familyId: 132
  },
  {
    name: "Combusken",
    pokedexId: 256,
    familyId: 132
  },
  {
    name: "Blaziken",
    pokedexId: 257,
    familyId: 132
  },
  {
    name: "Mudkip",
    pokedexId: 258,
    familyId: 133
  },
  {
    name: "Marshtomp",
    pokedexId: 259,
    familyId: 133
  },
  {
    name: "Swampert",
    pokedexId: 260,
    familyId: 133
  },
  {
    name: "Poochyena",
    pokedexId: 261,
    familyId: 134
  },
  {
    name: "Mightyena",
    pokedexId: 262,
    familyId: 134
  },
  {
    name: "Zigzagoon",
    pokedexId: 263,
    familyId: 135
  },
  {
    name: "Linoone",
    pokedexId: 264,
    familyId: 135
  },
  {
    name: "Wurmple",
    pokedexId: 265,
    familyId: 136
  },
  {
    name: "Silcoon",
    pokedexId: 266,
    familyId: 136
  },
  {
    name: "Beautifly",
    pokedexId: 267,
    familyId: 136
  },
  {
    name: "Cascoon",
    pokedexId: 268,
    familyId: 136
  },
  {
    name: "Dustox",
    pokedexId: 269,
    familyId: 136
  },
  {
    name: "Lotad",
    pokedexId: 270,
    familyId: 137
  },
  {
    name: "Lombre",
    pokedexId: 271,
    familyId: 137
  },
  {
    name: "Ludicolo",
    pokedexId: 272,
    familyId: 137
  },
  {
    name: "Seedot",
    pokedexId: 273,
    familyId: 138
  },
  {
    name: "Nuzleaf",
    pokedexId: 274,
    familyId: 138
  },
  {
    name: "Shiftry",
    pokedexId: 275,
    familyId: 138
  },
  {
    name: "Taillow",
    pokedexId: 276,
    familyId: 139
  },
  {
    name: "Swellow",
    pokedexId: 277,
    familyId: 139
  },
  {
    name: "Wingull",
    pokedexId: 278,
    familyId: 140
  },
  {
    name: "Pelipper",
    pokedexId: 279,
    familyId: 140
  },
  {
    name: "Ralts",
    pokedexId: 280,
    familyId: 141
  },
  {
    name: "Kirlia",
    pokedexId: 281,
    familyId: 141
  },
  {
    name: "Gardevoir",
    pokedexId: 282,
    familyId: 141
  },
  {
    name: "Surskit",
    pokedexId: 283,
    familyId: 142
  },
  {
    name: "Masquerain",
    pokedexId: 284,
    familyId: 142
  },
  {
    name: "Shroomish",
    pokedexId: 285,
    familyId: 143
  },
  {
    name: "Breloom",
    pokedexId: 286,
    familyId: 143
  },
  {
    name: "Slakoth",
    pokedexId: 287,
    familyId: 144
  },
  {
    name: "Vigoroth",
    pokedexId: 288,
    familyId: 144
  },
  {
    name: "Slaking",
    pokedexId: 289,
    familyId: 144
  },
  {
    name: "Nincada",
    pokedexId: 290,
    familyId: 145
  },
  {
    name: "Ninjask",
    pokedexId: 291,
    familyId: 145
  },
  {
    name: "Shedinja",
    pokedexId: 292,
    familyId: 145
  },
  {
    name: "Whismur",
    pokedexId: 293,
    familyId: 146
  },
  {
    name: "Loudred",
    pokedexId: 294,
    familyId: 146
  },
  {
    name: "Exploud",
    pokedexId: 295,
    familyId: 146
  },
  {
    name: "Makuhita",
    pokedexId: 296,
    familyId: 147
  },
  {
    name: "Hariyama",
    pokedexId: 297,
    familyId: 147
  },
  {
    name: "Azurill",
    pokedexId: 298,
    familyId: 90
  },
  {
    name: "Nosepass",
    pokedexId: 299,
    familyId: 91
  },
  {
    name: "Skitty",
    pokedexId: 300,
    familyId: 92
  },
  {
    name: "Delcatty",
    pokedexId: 301,
    familyId: 92
  },
  {
    name: "Sableye",
    pokedexId: 302,
    familyId: 93
  },
  {
    name: "Mawile",
    pokedexId: 303,
    familyId: 94
  },
  {
    name: "Aron",
    pokedexId: 304,
    familyId: 95
  },
  {
    name: "Lairon",
    pokedexId: 305,
    familyId: 95
  },
  {
    name: "Aggron",
    pokedexId: 306,
    familyId: 95
  },
  {
    name: "Meditite",
    pokedexId: 307,
    familyId: 96
  },
  {
    name: "Medicham",
    pokedexId: 308,
    familyId: 96
  },
  {
    name: "Electrike",
    pokedexId: 309,
    familyId: 97
  },
  {
    name: "Manectric",
    pokedexId: 310,
    familyId: 97
  },
  {
    name: "Plusle",
    pokedexId: 311,
    familyId: 98
  },
  {
    name: "Minun",
    pokedexId: 312,
    familyId: 98
  },
  {
    name: "Volbeat",
    pokedexId: 313,
    familyId: 99
  },
  {
    name: "Illumise",
    pokedexId: 314,
    familyId: 99
  },
  {
    name: "Roselia",
    pokedexId: 315,
    familyId: 100
  },
  {
    name: "Gulpin",
    pokedexId: 316,
    familyId: 101
  },
  {
    name: "Swalot",
    pokedexId: 317,
    familyId: 101
  },
  {
    name: "Carvanha",
    pokedexId: 318,
    familyId: 102
  },
  {
    name: "Sharpedo",
    pokedexId: 319,
    familyId: 102
  },
  {
    name: "Wailmer",
    pokedexId: 320,
    familyId: 103
  },
  {
    name: "Wailord",
    pokedexId: 321,
    familyId: 103
  },
  {
    name: "Numel",
    pokedexId: 322,
    familyId: 104
  },
  {
    name: "Camerupt",
    pokedexId: 323,
    familyId: 104
  },
  {
    name: "Torkoal",
    pokedexId: 324,
    familyId: 105
  },
  {
    name: "Spoink",
    pokedexId: 325,
    familyId: 106
  },
  {
    name: "Grumpig",
    pokedexId: 326,
    familyId: 106
  },
  {
    name: "Spinda",
    pokedexId: 327,
    familyId: 107
  },
  {
    name: "Trapinch",
    pokedexId: 328,
    familyId: 108
  },
  {
    name: "Vibrava",
    pokedexId: 329,
    familyId: 108
  },
  {
    name: "Flygon",
    pokedexId: 330,
    familyId: 108
  },
  {
    name: "Cacnea",
    pokedexId: 331,
    familyId: 109
  },
  {
    name: "Cacturne",
    pokedexId: 332,
    familyId: 109
  },
  {
    name: "Swablu",
    pokedexId: 333,
    familyId: 110
  },
  {
    name: "Altaria",
    pokedexId: 334,
    familyId: 110
  },
  {
    name: "Zangoose",
    pokedexId: 335,
    familyId: 111
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
    familyId: 114
  },
  {
    name: "Barboach",
    pokedexId: 339,
    familyId: 115
  },
  {
    name: "Whiscash",
    pokedexId: 340,
    familyId: 116
  },
  {
    name: "Corphish",
    pokedexId: 341,
    familyId: 117
  },
  {
    name: "Crawdaunt",
    pokedexId: 342,
    familyId: 117
  },
  {
    name: "Baltoy",
    pokedexId: 343,
    familyId: 118
  },
  {
    name: "Claydol",
    pokedexId: 344,
    familyId: 118
  },
  {
    name: "Lileep",
    pokedexId: 345,
    familyId: 119
  },
  {
    name: "Cradily",
    pokedexId: 346,
    familyId: 119
  },
  {
    name: "Anorith",
    pokedexId: 347,
    familyId: 120
  },
  {
    name: "Armaldo",
    pokedexId: 348,
    familyId: 120
  },
  {
    name: "Feebas",
    pokedexId: 349,
    familyId: 121
  },
  {
    name: "Milotic",
    pokedexId: 350,
    familyId: 121
  },
  {
    name: "Castform",
    pokedexId: 351,
    familyId: 122
  },
  {
    name: "Kecleon",
    pokedexId: 352,
    familyId: 123
  },
  {
    name: "Shuppet",
    pokedexId: 353,
    familyId: 124
  },
  {
    name: "Banette",
    pokedexId: 354,
    familyId: 124
  },
  {
    name: "Duskull",
    pokedexId: 355,
    familyId: 125
  },
  {
    name: "Dusclops",
    pokedexId: 356,
    familyId: 125
  },
  {
    name: "Tropius",
    pokedexId: 357,
    familyId: 126
  },
  {
    name: "Chimecho",
    pokedexId: 358,
    familyId: 127
  },
  {
    name: "Absol",
    pokedexId: 359,
    familyId: 128
  },
  {
    name: "Wynaut",
    pokedexId: 360,
    familyId: 100
  },
  {
    name: "Snorunt",
    pokedexId: 361,
    familyId: 129
  },
  {
    name: "Glalie",
    pokedexId: 362,
    familyId: 129
  },
  {
    name: "Spheal",
    pokedexId: 363,
    familyId: 130
  },
  {
    name: "Sealeo",
    pokedexId: 364,
    familyId: 130
  },
  {
    name: "Walrein",
    pokedexId: 365,
    familyId: 130
  },
  {
    name: "Clamperl",
    pokedexId: 366,
    familyId: 131
  },
  {
    name: "Huntail",
    pokedexId: 367,
    familyId: 131
  },
  {
    name: "Gorebyss",
    pokedexId: 368,
    familyId: 131
  },
  {
    name: "Relicanth",
    pokedexId: 369,
    familyId: 132
  },
  {
    name: "Luvdisc",
    pokedexId: 370,
    familyId: 132
  },
  {
    name: "Bagon",
    pokedexId: 371,
    familyId: 133
  },
  {
    name: "Shelgon",
    pokedexId: 372,
    familyId: 134
  },
  {
    name: "Salamence",
    pokedexId: 373,
    familyId: 135
  },
  {
    name: "Beldum",
    pokedexId: 374,
    familyId: 136
  },
  {
    name: "Metang",
    pokedexId: 375,
    familyId: 136
  },
  {
    name: "Metagross",
    pokedexId: 376,
    familyId: 136
  },
  {
    name: "Regirock",
    pokedexId: 377,
    familyId: 137
  },
  {
    name: "Regice",
    pokedexId: 378,
    familyId: 138
  },
  {
    name: "Registeel",
    pokedexId: 379,
    familyId: 139
  },
  {
    name: "Latias",
    pokedexId: 380,
    familyId: 140
  },
  {
    name: "Latios",
    pokedexId: 381,
    familyId: 141
  },
  {
    name: "Kyogre",
    pokedexId: 382,
    familyId: 142
  },
  {
    name: "Groudon",
    pokedexId: 383,
    familyId: 143
  },
  {
    name: "Rayquaza",
    pokedexId: 384,
    familyId: 144
  },
  {
    name: "Jirachi",
    pokedexId: 385,
    familyId: 145
  },
  {
    name: "Deoxys",
    pokedexId: 386,
    familyId: 146
  },
  {
    name: "Turtwig",
    pokedexId: 387,
    familyId: 147
  },
  {
    name: "Grotle",
    pokedexId: 388,
    familyId: 147
  },
  {
    name: "Torterra",
    pokedexId: 389,
    familyId: 147
  },
  {
    name: "Chimchar",
    pokedexId: 390,
    familyId: 148
  },
  {
    name: "Monferno",
    pokedexId: 391,
    familyId: 148
  },
  {
    name: "Infernape",
    pokedexId: 392,
    familyId: 148
  },
  {
    name: "Piplup",
    pokedexId: 393,
    familyId: 149
  },
  {
    name: "Prinplup",
    pokedexId: 394,
    familyId: 149
  },
  {
    name: "Empoleon",
    pokedexId: 395,
    familyId: 149
  },
  {
    name: "Starly",
    pokedexId: 396,
    familyId: 150
  },
  {
    name: "Staravia",
    pokedexId: 397,
    familyId: 150
  },
  {
    name: "Staraptor",
    pokedexId: 398,
    familyId: 150
  },
  {
    name: "Bidoof",
    pokedexId: 399,
    familyId: 151
  },
  {
    name: "Bibarel",
    pokedexId: 400,
    familyId: 151
  },
  {
    name: "Kricketot",
    pokedexId: 401,
    familyId: 152
  },
  {
    name: "Kricketune",
    pokedexId: 402,
    familyId: 152
  },
  {
    name: "Shinx",
    pokedexId: 403,
    familyId: 153
  },
  {
    name: "Luxio",
    pokedexId: 404,
    familyId: 153
  },
  {
    name: "Luxray",
    pokedexId: 405,
    familyId: 153
  },
  {
    name: "Budew",
    pokedexId: 406,
    familyId: 100
  },
  {
    name: "Roserade",
    pokedexId: 407,
    familyId: 100
  },
  {
    name: "Cranidos",
    pokedexId: 408,
    familyId: 154
  },
  {
    name: "Rampardos",
    pokedexId: 409,
    familyId: 154
  },
  {
    name: "Shieldon",
    pokedexId: 410,
    familyId: 155
  },
  {
    name: "Bastiodon",
    pokedexId: 411,
    familyId: 155
  },
  {
    name: "Burmy",
    pokedexId: 412,
    familyId: 156
  },
  {
    name: "Wormadam",
    pokedexId: 413,
    familyId: 156
  },
  {
    name: "Mothim",
    pokedexId: 414,
    familyId: 156
  },
  {
    name: "Combee",
    pokedexId: 415,
    familyId: 157
  },
  {
    name: "Vespiquen",
    pokedexId: 416,
    familyId: 157
  },
  {
    name: "Pachirisu",
    pokedexId: 417,
    familyId: 158
  },
  {
    name: "Buizel",
    pokedexId: 418,
    familyId: 159
  },
  {
    name: "Floatzel",
    pokedexId: 419,
    familyId: 159
  },
  {
    name: "Cherubi",
    pokedexId: 420,
    familyId: 160
  },
  {
    name: "Cherrim",
    pokedexId: 421,
    familyId: 160
  },
  {
    name: "Shellos",
    pokedexId: 422,
    familyId: 161
  },
  {
    name: "Gastrodon",
    pokedexId: 423,
    familyId: 161
  },
  {
    name: "Ambipom",
    pokedexId: 424,
    familyId: 93
  },
  {
    name: "Drifloon",
    pokedexId: 425,
    familyId: 162
  },
  {
    name: "Drifblim",
    pokedexId: 426,
    familyId: 162
  },
  {
    name: "Buneary",
    pokedexId: 427,
    familyId: 163
  },
  {
    name: "Lopunny",
    pokedexId: 428,
    familyId: 163
  },
  {
    name: "Mismagius",
    pokedexId: 429,
    familyId: 164
  },
  {
    name: "Honchkrow",
    pokedexId: 430,
    familyId: 97
  },
  {
    name: "Glameow",
    pokedexId: 431,
    familyId: 165
  },
  {
    name: "Purugly",
    pokedexId: 432,
    familyId: 165
  },
  {
    name: "Chingling",
    pokedexId: 433,
    familyId: 127
  },
  {
    name: "Stunky",
    pokedexId: 434,
    familyId: 166
  },
  {
    name: "Skuntank",
    pokedexId: 435,
    familyId: 166
  },
  {
    name: "Bronzor",
    pokedexId: 436,
    familyId: 167
  },
  {
    name: "Bronzong",
    pokedexId: 437,
    familyId: 167
  },
  {
    name: "Bonsly",
    pokedexId: 438,
    familyId: 91
  },
  {
    name: "Mime Jr.",
    pokedexId: 439,
    familyId: 57
  },
  {
    name: "Happiny",
    pokedexId: 440,
    familyId: 51
  },
  {
    name: "Chatot",
    pokedexId: 441,
    familyId: 168
  },
  {
    name: "Spiritomb",
    pokedexId: 442,
    familyId: 169
  },
  {
    name: "Gible",
    pokedexId: 443,
    familyId: 170
  },
  {
    name: "Gabite",
    pokedexId: 444,
    familyId: 170
  },
  {
    name: "Garchomp",
    pokedexId: 445,
    familyId: 170
  },
  {
    name: "Munchlax",
    pokedexId: 446,
    familyId: 72
  },
  {
    name: "Riolu",
    pokedexId: 447,
    familyId: 171
  },
  {
    name: "Lucario",
    pokedexId: 448,
    familyId: 171
  },
  {
    name: "Hippopotas",
    pokedexId: 449,
    familyId: 172
  },
  {
    name: "Hippowdon",
    pokedexId: 450,
    familyId: 172
  },
  {
    name: "Skorupi",
    pokedexId: 451,
    familyId: 173
  },
  {
    name: "Drapion",
    pokedexId: 452,
    familyId: 173
  },
  {
    name: "Croagunk",
    pokedexId: 453,
    familyId: 174
  },
  {
    name: "Toxicroak",
    pokedexId: 454,
    familyId: 174
  },
  {
    name: "Carnivine",
    pokedexId: 455,
    familyId: 175
  },
  {
    name: "Finneon",
    pokedexId: 456,
    familyId: 176
  },
  {
    name: "Lumineon",
    pokedexId: 457,
    familyId: 176
  },
  {
    name: "Mantyke",
    pokedexId: 458,
    familyId: 116
  },
  {
    name: "Snover",
    pokedexId: 459,
    familyId: 177
  },
  {
    name: "Abomasnow",
    pokedexId: 460,
    familyId: 177
  },
  {
    name: "Weavile",
    pokedexId: 461,
    familyId: 109
  },
  {
    name: "Magnezone",
    pokedexId: 462,
    familyId: 34
  },
  {
    name: "Lickilicky",
    pokedexId: 463,
    familyId: 48
  },
  {
    name: "Rhyperior",
    pokedexId: 464,
    familyId: 50
  },
  {
    name: "Tangrowth",
    pokedexId: 465,
    familyId: 52
  },
  {
    name: "Electivire",
    pokedexId: 466,
    familyId: 60
  },
  {
    name: "Magmortar",
    pokedexId: 467,
    familyId: 61
  },
  {
    name: "Togekiss",
    pokedexId: 468,
    familyId: 87
  },
  {
    name: "Yanmega",
    pokedexId: 469,
    familyId: 95
  },
  {
    name: "Leafeon",
    pokedexId: 470,
    familyId: 67
  },
  {
    name: "Glaceon",
    pokedexId: 471,
    familyId: 67
  },
  {
    name: "Gliscor",
    pokedexId: 472,
    familyId: 104
  },
  {
    name: "Mamoswine",
    pokedexId: 473,
    familyId: 112
  },
  {
    name: "Porygon-Z",
    pokedexId: 474,
    familyId: 68
  },
  {
    name: "Gallade",
    pokedexId: 475,
    familyId: 141
  },
  {
    name: "Probopass",
    pokedexId: 476,
    familyId: 91
  },
  {
    name: "Dusknoir",
    pokedexId: 477,
    familyId: 125
  },
  {
    name: "Froslass",
    pokedexId: 478,
    familyId: 129
  },
  {
    name: "Rotom",
    pokedexId: 479,
    familyId: 178
  },
  {
    name: "Uxie",
    pokedexId: 480,
    familyId: 179
  },
  {
    name: "Mesprit",
    pokedexId: 481,
    familyId: 180
  },
  {
    name: "Azelf",
    pokedexId: 482,
    familyId: 181
  },
  {
    name: "Dialga",
    pokedexId: 483,
    familyId: 182
  },
  {
    name: "Palkia",
    pokedexId: 484,
    familyId: 183
  },
  {
    name: "Heatran",
    pokedexId: 485,
    familyId: 184
  },
  {
    name: "Regigigas",
    pokedexId: 486,
    familyId: 185
  },
  {
    name: "Giratina",
    pokedexId: 487,
    familyId: 186
  },
  {
    name: "Cresselia",
    pokedexId: 488,
    familyId: 187
  },
  {
    name: "Phione",
    pokedexId: 489,
    familyId: 188
  },
  {
    name: "Manaphy",
    pokedexId: 490,
    familyId: 189
  },
  {
    name: "Darkrai",
    pokedexId: 491,
    familyId: 190
  },
  {
    name: "Shaymin",
    pokedexId: 492,
    familyId: 191
  },
  {
    name: "Arceus",
    pokedexId: 493,
    familyId: 192
  },
  {
    name: "Victini",
    pokedexId: 494,
    familyId: 193
  },
  {
    name: "Snivy",
    pokedexId: 495,
    familyId: 194
  },
  {
    name: "Servine",
    pokedexId: 496,
    familyId: 194
  },
  {
    name: "Serperior",
    pokedexId: 497,
    familyId: 194
  },
  {
    name: "Tepig",
    pokedexId: 498,
    familyId: 195
  },
  {
    name: "Pignite",
    pokedexId: 499,
    familyId: 195
  },
  {
    name: "Emboar",
    pokedexId: 500,
    familyId: 195
  },
  {
    name: "Oshawott",
    pokedexId: 501,
    familyId: 196
  },
  {
    name: "Dewott",
    pokedexId: 502,
    familyId: 196
  },
  {
    name: "Samurott",
    pokedexId: 503,
    familyId: 196
  },
  {
    name: "Patrat",
    pokedexId: 504,
    familyId: 197
  },
  {
    name: "Watchog",
    pokedexId: 505,
    familyId: 197
  },
  {
    name: "Lillipup",
    pokedexId: 506,
    familyId: 198
  },
  {
    name: "Herdier",
    pokedexId: 507,
    familyId: 198
  },
  {
    name: "Stoutland",
    pokedexId: 508,
    familyId: 198
  },
  {
    name: "Purrloin",
    pokedexId: 509,
    familyId: 199
  },
  {
    name: "Liepard",
    pokedexId: 510,
    familyId: 199
  },
  {
    name: "Pansage",
    pokedexId: 511,
    familyId: 200
  },
  {
    name: "Simisage",
    pokedexId: 512,
    familyId: 200
  },
  {
    name: "Pansear",
    pokedexId: 513,
    familyId: 201
  },
  {
    name: "Simisear",
    pokedexId: 514,
    familyId: 201
  },
  {
    name: "Panpour",
    pokedexId: 515,
    familyId: 202
  },
  {
    name: "Simipour",
    pokedexId: 516,
    familyId: 202
  },
  {
    name: "Munna",
    pokedexId: 517,
    familyId: 203
  },
  {
    name: "Musharna",
    pokedexId: 518,
    familyId: 203
  },
  {
    name: "Pidove",
    pokedexId: 519,
    familyId: 204
  },
  {
    name: "Tranquill",
    pokedexId: 520,
    familyId: 204
  },
  {
    name: "Unfezant",
    pokedexId: 521,
    familyId: 204
  },
  {
    name: "Blitzle",
    pokedexId: 522,
    familyId: 205
  },
  {
    name: "Zebstrika",
    pokedexId: 523,
    familyId: 205
  },
  {
    name: "Roggenrola",
    pokedexId: 524,
    familyId: 206
  },
  {
    name: "Boldore",
    pokedexId: 525,
    familyId: 206
  },
  {
    name: "Gigalith",
    pokedexId: 526,
    familyId: 206
  },
  {
    name: "Woobat",
    pokedexId: 527,
    familyId: 207
  },
  {
    name: "Swoobat",
    pokedexId: 528,
    familyId: 207
  },
  {
    name: "Drilbur",
    pokedexId: 529,
    familyId: 208
  },
  {
    name: "Excadrill",
    pokedexId: 530,
    familyId: 208
  },
  {
    name: "Audino",
    pokedexId: 531,
    familyId: 209
  },
  {
    name: "Timburr",
    pokedexId: 532,
    familyId: 210
  },
  {
    name: "Gurdurr",
    pokedexId: 533,
    familyId: 210
  },
  {
    name: "Conkeldurr",
    pokedexId: 534,
    familyId: 210
  },
  {
    name: "Tympole",
    pokedexId: 535,
    familyId: 211
  },
  {
    name: "Palpitoad",
    pokedexId: 536,
    familyId: 211
  },
  {
    name: "Seismitoad",
    pokedexId: 537,
    familyId: 211
  },
  {
    name: "Throh",
    pokedexId: 538,
    familyId: 212
  },
  {
    name: "Sawk",
    pokedexId: 539,
    familyId: 212
  },
  {
    name: "Sewaddle",
    pokedexId: 540,
    familyId: 213
  },
  {
    name: "Swadloon",
    pokedexId: 541,
    familyId: 213
  },
  {
    name: "Leavanny",
    pokedexId: 542,
    familyId: 213
  },
  {
    name: "Venipede",
    pokedexId: 543,
    familyId: 214
  },
  {
    name: "Whirlipede",
    pokedexId: 544,
    familyId: 214
  },
  {
    name: "Scolipede",
    pokedexId: 545,
    familyId: 214
  },
  {
    name: "Cottonee",
    pokedexId: 546,
    familyId: 215
  },
  {
    name: "Whimsicott",
    pokedexId: 547,
    familyId: 215
  },
  {
    name: "Petilil",
    pokedexId: 548,
    familyId: 216
  },
  {
    name: "Lilligant",
    pokedexId: 549,
    familyId: 217
  },
  {
    name: "Basculin",
    pokedexId: 550,
    familyId: 218
  },
  {
    name: "Sandile",
    pokedexId: 551,
    familyId: 219
  },
  {
    name: "Krokorok",
    pokedexId: 552,
    familyId: 219
  },
  {
    name: "Krookodile",
    pokedexId: 553,
    familyId: 219
  },
  {
    name: "Darumaka",
    pokedexId: 554,
    familyId: 220
  },
  {
    name: "Darmanitan",
    pokedexId: 555,
    familyId: 220
  },
  {
    name: "Maractus",
    pokedexId: 556,
    familyId: 221
  },
  {
    name: "Dwebble",
    pokedexId: 557,
    familyId: 222
  },
  {
    name: "Crustle",
    pokedexId: 558,
    familyId: 222
  },
  {
    name: "Scraggy",
    pokedexId: 559,
    familyId: 223
  },
  {
    name: "Scrafty",
    pokedexId: 560,
    familyId: 223
  },
  {
    name: "Sigilyph",
    pokedexId: 561,
    familyId: 224
  },
  {
    name: "Yamask",
    pokedexId: 562,
    familyId: 225
  },
  {
    name: "Cofagrigus",
    pokedexId: 563,
    familyId: 225
  },
  {
    name: "Tirtouga",
    pokedexId: 564,
    familyId: 226
  },
  {
    name: "Carracosta",
    pokedexId: 565,
    familyId: 226
  },
  {
    name: "Archen",
    pokedexId: 566,
    familyId: 227
  },
  {
    name: "Archeops",
    pokedexId: 567,
    familyId: 227
  },
  {
    name: "Trubbish",
    pokedexId: 568,
    familyId: 228
  },
  {
    name: "Garbodor",
    pokedexId: 569,
    familyId: 228
  },
  {
    name: "Zorua",
    pokedexId: 570,
    familyId: 229
  },
  {
    name: "Zoroark",
    pokedexId: 571,
    familyId: 229
  },
  {
    name: "Minccino",
    pokedexId: 572,
    familyId: 230
  },
  {
    name: "Cinccino",
    pokedexId: 573,
    familyId: 230
  },
  {
    name: "Gothita",
    pokedexId: 574,
    familyId: 231
  },
  {
    name: "Gothorita",
    pokedexId: 575,
    familyId: 231
  },
  {
    name: "Gothitelle",
    pokedexId: 576,
    familyId: 231
  },
  {
    name: "Solosis",
    pokedexId: 577,
    familyId: 232
  },
  {
    name: "Duosion",
    pokedexId: 578,
    familyId: 232
  },
  {
    name: "Reuniclus",
    pokedexId: 579,
    familyId: 232
  },
  {
    name: "Ducklett",
    pokedexId: 580,
    familyId: 233
  },
  {
    name: "Swanna",
    pokedexId: 581,
    familyId: 233
  },
  {
    name: "Vanillite",
    pokedexId: 582,
    familyId: 234
  },
  {
    name: "Vanillish",
    pokedexId: 583,
    familyId: 234
  },
  {
    name: "Vanilluxe",
    pokedexId: 584,
    familyId: 234
  },
  {
    name: "Deerling",
    pokedexId: 585,
    familyId: 235
  },
  {
    name: "Sawsbuck",
    pokedexId: 586,
    familyId: 236
  },
  {
    name: "Emolga",
    pokedexId: 587,
    familyId: 237
  },
  {
    name: "Karrablast",
    pokedexId: 588,
    familyId: 238
  },
  {
    name: "Escavalier",
    pokedexId: 589,
    familyId: 238
  },
  {
    name: "Foongus",
    pokedexId: 590,
    familyId: 239
  },
  {
    name: "Amoonguss",
    pokedexId: 591,
    familyId: 239
  },
  {
    name: "Frillish",
    pokedexId: 592,
    familyId: 240
  },
  {
    name: "Jellicent",
    pokedexId: 593,
    familyId: 240
  },
  {
    name: "Alomomola",
    pokedexId: 594,
    familyId: 241
  },
  {
    name: "Joltik",
    pokedexId: 595,
    familyId: 242
  },
  {
    name: "Galvantula",
    pokedexId: 596,
    familyId: 242
  },
  {
    name: "Ferroseed",
    pokedexId: 597,
    familyId: 243
  },
  {
    name: "Ferrothorn",
    pokedexId: 598,
    familyId: 243
  },
  {
    name: "Klink",
    pokedexId: 599,
    familyId: 244
  },
  {
    name: "Klang",
    pokedexId: 600,
    familyId: 244
  },
  {
    name: "Klinklang",
    pokedexId: 601,
    familyId: 244
  },
  {
    name: "Tynamo",
    pokedexId: 602,
    familyId: 245
  },
  {
    name: "Eelektrik",
    pokedexId: 603,
    familyId: 245
  },
  {
    name: "Eelektross",
    pokedexId: 604,
    familyId: 245
  },
  {
    name: "Elgyem",
    pokedexId: 605,
    familyId: 246
  },
  {
    name: "Beheeyem",
    pokedexId: 606,
    familyId: 246
  },
  {
    name: "Litwick",
    pokedexId: 607,
    familyId: 247
  },
  {
    name: "Lampent",
    pokedexId: 608,
    familyId: 247
  },
  {
    name: "Chandelure",
    pokedexId: 609,
    familyId: 247
  },
  {
    name: "Axew",
    pokedexId: 610,
    familyId: 248
  },
  {
    name: "Fraxure",
    pokedexId: 611,
    familyId: 248
  },
  {
    name: "Haxorus",
    pokedexId: 612,
    familyId: 248
  },
  {
    name: "Cubchoo",
    pokedexId: 613,
    familyId: 249
  },
  {
    name: "Beartic",
    pokedexId: 614,
    familyId: 249
  },
  {
    name: "Cryogonal",
    pokedexId: 615,
    familyId: 250
  },
  {
    name: "Shelmet",
    pokedexId: 616,
    familyId: 251
  },
  {
    name: "Accelgor",
    pokedexId: 617,
    familyId: 251
  },
  {
    name: "Stunfisk",
    pokedexId: 618,
    familyId: 252
  },
  {
    name: "Mienfoo",
    pokedexId: 619,
    familyId: 253
  },
  {
    name: "Mienshao",
    pokedexId: 620,
    familyId: 253
  },
  {
    name: "Druddigon",
    pokedexId: 621,
    familyId: 254
  },
  {
    name: "Golett",
    pokedexId: 622,
    familyId: 255
  },
  {
    name: "Golurk",
    pokedexId: 623,
    familyId: 255
  },
  {
    name: "Pawniard",
    pokedexId: 624,
    familyId: 256
  },
  {
    name: "Bisharp",
    pokedexId: 625,
    familyId: 256
  },
  {
    name: "Bouffalant",
    pokedexId: 626,
    familyId: 257
  },
  {
    name: "Rufflet",
    pokedexId: 627,
    familyId: 258
  },
  {
    name: "Braviary",
    pokedexId: 628,
    familyId: 258
  },
  {
    name: "Vullaby",
    pokedexId: 629,
    familyId: 259
  },
  {
    name: "Mandibuzz",
    pokedexId: 630,
    familyId: 259
  },
  {
    name: "Heatmor",
    pokedexId: 631,
    familyId: 260
  },
  {
    name: "Durant",
    pokedexId: 632,
    familyId: 261
  },
  {
    name: "Deino",
    pokedexId: 633,
    familyId: 262
  },
  {
    name: "Zweilous",
    pokedexId: 634,
    familyId: 262
  },
  {
    name: "Hydreigon",
    pokedexId: 635,
    familyId: 262
  },
  {
    name: "Larvesta",
    pokedexId: 636,
    familyId: 263
  },
  {
    name: "Volcarona",
    pokedexId: 637,
    familyId: 263
  },
  {
    name: "Cobalion",
    pokedexId: 638,
    familyId: 264
  },
  {
    name: "Terrakion",
    pokedexId: 639,
    familyId: 265
  },
  {
    name: "Virizion",
    pokedexId: 640,
    familyId: 266
  },
  {
    name: "Tornadus",
    pokedexId: 641,
    familyId: 267
  },
  {
    name: "Thundurus",
    pokedexId: 642,
    familyId: 268
  },
  {
    name: "Reshiram",
    pokedexId: 643,
    familyId: 269
  },
  {
    name: "Zekrom",
    pokedexId: 644,
    familyId: 270
  },
  {
    name: "Landorus",
    pokedexId: 645,
    familyId: 271
  },
  {
    name: "Kyurem",
    pokedexId: 646,
    familyId: 272
  },
  {
    name: "Keldeo",
    pokedexId: 647,
    familyId: 273
  },
  {
    name: "Meloetta",
    pokedexId: 648,
    familyId: 274
  },
  {
    name: "Genesect",
    pokedexId: 649,
    familyId: 275
  }
];