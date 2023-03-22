const tiles = [
  {
    id: 1,
    back: "green",
    faction: "The Federation of Sol",
    deal: false,
    planets: [
      {
        name: "Jord",
        res: 4,
        inf: 2,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 2,
    back: "green",
    faction: "The Mentak Coalition",
    deal: false,
    planets: [
      {
        name: "Moll Primus",
        res: 4,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 3,
    back: "green",
    faction: "The Yin Brotherhood",
    deal: false,
    planets: [
      {
        name: "Darien",
        res: 4,
        inf: 4,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 4,
    back: "green",
    faction: "The Embers of Muaat",
    deal: false,
    planets: [
      {
        name: "Muaat",
        res: 4,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 5,
    back: "green",
    faction: "The Arborec",
    deal: false,
    planets: [
      {
        name: "Nestphar",
        res: 3,
        inf: 2,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 6,
    back: "green",
    faction: "The L1Z1X Mindnet",
    deal: false,
    planets: [
      {
        name: "[0.0.0]",
        res: 5,
        inf: 0,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 7,
    back: "green",
    faction: "The Winnu",
    deal: false,
    planets: [
      {
        name: "Winnu",
        res: 3,
        inf: 4,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 8,
    back: "green",
    faction: "The Nekro Virus",
    deal: false,
    planets: [
      {
        name: "Mordai II",
        res: 4,
        inf: 0,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 9,
    back: "green",
    faction: "The Naalu Collective",
    deal: false,
    planets: [
      {
        name: "Maaluuk",
        res: 0,
        inf: 2,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Druaa",
        res: 3,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 10,
    back: "green",
    faction: "The Barony of Letnev",
    deal: false,
    planets: [
      {
        name: "Arc Prime",
        res: 4,
        inf: 0,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Wren Terra",
        res: 2,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 11,
    back: "green",
    faction: "The Clans of Saar",
    deal: false,
    planets: [
      {
        name: "Lisis II",
        res: 1,
        inf: 0,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Ragh",
        res: 2,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 12,
    back: "green",
    faction: "The Universities of Jol-Nar",
    deal: false,
    planets: [
      {
        name: "Nar",
        res: 2,
        inf: 3,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Jol",
        res: 1,
        inf: 2,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 13,
    back: "green",
    faction: "Sardakk N'orr",
    deal: false,
    planets: [
      {
        name: "Tren'lak",
        res: 1,
        inf: 0,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Quinarra",
        res: 3,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 14,
    back: "green",
    faction: "The Xxcha Kingdom",
    deal: false,
    planets: [
      {
        name: "Archon Ren",
        res: 2,
        inf: 3,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Archon Tau",
        res: 1,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 15,
    back: "green",
    faction: "The Yssaril Tribes",
    deal: false,
    planets: [
      {
        name: "Retillion",
        res: 2,
        inf: 3,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Shalloq",
        res: 1,
        inf: 2,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 16,
    back: "green",
    faction: "The Emirates of Hacan",
    deal: false,
    planets: [
      {
        name: "Hercant",
        res: 1,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Arretze",
        res: 2,
        inf: 0,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Kamdorn",
        res: 0,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 17,
    back: "green",
    faction: "The Ghosts of Creuss",
    deal: false,
    planets: [],
    wormhole: "Delta",
    anomaly: null
  },
  {
    id: 18,
    back: "blue",
    faction: null,
    deal: false,
    planets: [
      {
        name: "Mecatol Rex",
        res: 1,
        inf: 6,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 19,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Wellon",
        res: 1,
        inf: 2,
        trait: "Industrial",
        skip: "Yellow",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 20,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Vefut II",
        res: 2,
        inf: 2,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 21,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Thibah",
        res: 1,
        inf: 1,
        trait: "Industrial",
        skip: "Blue",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 22,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Tar'mann",
        res: 1,
        inf: 1,
        trait: "Industrial",
        skip: "Green",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 23,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Saudor",
        res: 2,
        inf: 2,
        trait: "Industrial",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 24,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Mehar Xull",
        res: 1,
        inf: 3,
        trait: "Hazardous",
        skip: "Red",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 25,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Quann",
        res: 2,
        inf: 1,
        trait: "Cultural",
        skip: null,
        legendary: false
      }
    ],
    wormhole: "Beta",
    anomaly: null
  },
  {
    id: 26,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Lodor",
        res: 3,
        inf: 1,
        trait: "Cultural",
        skip: null,
        legendary: false
      }
    ],
    wormhole: "Alpha",
    anomaly: null
  },
  {
    id: 27,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "New Albion",
        res: 1,
        inf: 1,
        trait: "Industrial",
        skip: "Green",
        legendary: false
      },
      {
        name: "Starpoint",
        res: 3,
        inf: 1,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 28,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Tequ'ran",
        res: 2,
        inf: 0,
        trait: "Hazardous",
        skip: null,
        legendary: false
      },
      {
        name: "Torkan",
        res: 0,
        inf: 3,
        trait: "Cultural",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 29,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Quecen'n",
        res: 1,
        inf: 2,
        trait: "Industrial",
        skip: null,
        legendary: false
      },
      {
        name: "Rarron",
        res: 0,
        inf: 3,
        trait: "Cultural",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 30,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Mellon",
        res: 0,
        inf: 2,
        trait: "Cultural",
        skip: null,
        legendary: false
      },
      {
        name: "Zohbat",
        res: 3,
        inf: 1,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 31,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Lazar",
        res: 1,
        inf: 0,
        trait: "Industrial",
        skip: "Yellow",
        legendary: false
      },
      {
        name: "Sakulag",
        res: 2,
        inf: 1,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 32,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Dal Bootha",
        res: 0,
        inf: 2,
        trait: "Cultural",
        skip: null,
        legendary: false
      },
      {
        name: "Xxehan",
        res: 1,
        inf: 1,
        trait: "Cultural",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 33,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Corneeq",
        res: 1,
        inf: 2,
        trait: "Cultural",
        skip: null,
        legendary: false
      },
      {
        name: "Resculon",
        res: 2,
        inf: 0,
        trait: "Cultural",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 34,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Centauri",
        res: 1,
        inf: 3,
        trait: "Cultural",
        skip: null,
        legendary: false
      },
      {
        name: "Gral",
        res: 1,
        inf: 1,
        trait: "Industrial",
        skip: "Blue",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 35,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Bereg",
        res: 3,
        inf: 1,
        trait: "Hazardous",
        skip: null,
        legendary: false
      },
      {
        name: "Lirta IV",
        res: 2,
        inf: 3,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 36,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Arnor",
        res: 2,
        inf: 1,
        trait: "Industrial",
        skip: null,
        legendary: false
      },
      {
        name: "Lor",
        res: 1,
        inf: 2,
        trait: "Industrial",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 37,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Arinam",
        res: 1,
        inf: 2,
        trait: "Industrial",
        skip: null,
        legendary: false
      },
      {
        name: "Meer",
        res: 0,
        inf: 4,
        trait: "Hazardous",
        skip: "Red",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 38,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Abyz",
        res: 3,
        inf: 0,
        trait: "Hazardous",
        skip: null,
        legendary: false
      },
      {
        name: "Fria",
        res: 2,
        inf: 0,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 39,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: "Alpha",
    anomaly: null
  },
  {
    id: 40,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: "Beta",
    anomaly: null
  },
  {
    id: 41,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: "Gravity Rift"
  },
  {
    id: 42,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: "Nebula"
  },
  {
    id: 43,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: "Supernova"
  },
  {
    id: 44,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: "Asteroid Field"
  },
  {
    id: 45,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: "Asteroid Field"
  },
  {
    id: 46,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: null,
    empty: true
  },
  {
    id: 47,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: null,
    empty: true
  },
  {
    id: 48,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: null,
    empty: true
  },
  {
    id: 49,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: null,
    empty: true
  },
  {
    id: 50,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: null,
    empty: true
  },
  {
    id: 51,
    back: "green",
    faction: "The Ghosts of Creuss",
    deal: false,
    planets: [
      {
        name: "Creuss",
        res: 4,
        inf: 2,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: "Delta",
    anomaly: null
  },
  {
    id: 52,
    back: "green",
    faction: "The Mahact Gene-Sorcerors",
    deal: false,
    planets: [
      {
        name: "Ixth",
        res: 3,
        inf: 5,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 53,
    back: "green",
    faction: "The Nomad",
    deal: false,
    planets: [
      {
        name: "Arcturus",
        res: 4,
        inf: 4,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 54,
    back: "green",
    faction: "The Vuil'Raith Cabal",
    deal: false,
    planets: [
      {
        name: "Acheron",
        res: 4,
        inf: 0,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 55,
    back: "green",
    faction: "The Titans of Ul",
    deal: false,
    planets: [
      {
        name: "Elysium",
        res: 4,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 56,
    back: "green",
    faction: "The Empyrean",
    deal: false,
    planets: [
      {
        name: "The Dark",
        res: 3,
        inf: 4,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: "Nebula"
  },
  {
    id: 57,
    back: "green",
    faction: "The Naaz-Rokha Alliance",
    deal: false,
    planets: [
      {
        name: "Naazir",
        res: 2,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Rokha",
        res: 1,
        inf: 2,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 58,
    back: "green",
    faction: "The Argent Flight",
    deal: false,
    planets: [
      {
        name: "Valk",
        res: 2,
        inf: 0,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Ylir",
        res: 0,
        inf: 2,
        trait: null,
        skip: null,
        legendary: false
      },
      {
        name: "Avar",
        res: 1,
        inf: 1,
        trait: null,
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 59,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Archon Vail",
        res: 1,
        inf: 3,
        trait: "Hazardous",
        skip: "Blue",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 60,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Perimeter",
        res: 2,
        inf: 1,
        trait: "Industrial",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 61,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Ang",
        res: 2,
        inf: 0,
        trait: "Industrial",
        skip: "Red",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 62,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Sem-Lore",
        res: 3,
        inf: 2,
        trait: "Cultural",
        skip: "Yellow",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 63,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Vorhal",
        res: 0,
        inf: 2,
        trait: "Cultural",
        skip: "Green",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 64,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Atlas",
        res: 3,
        inf: 1,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: "Beta",
    anomaly: null
  },
  {
    id: 65,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Primor",
        res: 2,
        inf: 1,
        trait: "Cultural",
        skip: null,
        legendary: true
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 66,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Hope's End",
        res: 3,
        inf: 0,
        trait: "Hazardous",
        skip: null,
        legendary: true
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 67,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Cormund",
        res: 2,
        inf: 0,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: "Gravity Rift"
  },
  {
    id: 68,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Everra",
        res: 3,
        inf: 1,
        trait: "Cultural",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: "Nebula"
  },
  {
    id: 69,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Accoen",
        res: 2,
        inf: 3,
        trait: "Industrial",
        skip: null,
        legendary: false
      },
      {
        name: "Jeol Ir",
        res: 2,
        inf: 3,
        trait: "Industrial",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 70,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Kraag",
        res: 2,
        inf: 1,
        trait: "Hazardous",
        skip: null,
        legendary: false
      },
      {
        name: "Siig",
        res: 0,
        inf: 2,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 71,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Ba'kal",
        res: 3,
        inf: 2,
        trait: "Industrial",
        skip: null,
        legendary: false
      },
      {
        name: "Alio Prima",
        res: 1,
        inf: 1,
        trait: "Cultural",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 72,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Lisis",
        res: 2,
        inf: 2,
        trait: "Industrial",
        skip: null,
        legendary: false
      },
      {
        name: "Velnor",
        res: 2,
        inf: 1,
        trait: "Industrial",
        skip: "Red",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 73,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Cealdri",
        res: 0,
        inf: 2,
        trait: "Cultural",
        skip: "Yellow",
        legendary: false
      },
      {
        name: "Xanhact",
        res: 0,
        inf: 1,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 74,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Vega Major",
        res: 2,
        inf: 1,
        trait: "Cultural",
        skip: null,
        legendary: false
      },
      {
        name: "Vega Minor",
        res: 1,
        inf: 2,
        trait: "Cultural",
        skip: "Blue",
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 75,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Loki",
        res: 1,
        inf: 2,
        trait: "Cultural",
        skip: null,
        legendary: false
      },
      {
        name: "Abaddon",
        res: 1,
        inf: 0,
        trait: "Cultural",
        skip: null,
        legendary: false
      },
      {
        name: "Ashtroth",
        res: 2,
        inf: 0,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 76,
    back: "blue",
    faction: null,
    deal: true,
    planets: [
      {
        name: "Rigel III",
        res: 1,
        inf: 1,
        trait: "Industrial",
        skip: "Green",
        legendary: false
      },
      {
        name: "Rigel II",
        res: 1,
        inf: 2,
        trait: "Industrial",
        skip: null,
        legendary: false
      },
      {
        name: "Rigel I",
        res: 0,
        inf: 1,
        trait: "Hazardous",
        skip: null,
        legendary: false
      }
    ],
    wormhole: null,
    anomaly: null
  },
  {
    id: 77,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: null,
    empty: true
  },
  {
    id: 78,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: null,
    empty: true
  },
  {
    id: 79,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: "Alpha",
    anomaly: "Asteroid Field"
  },
  {
    id: 80,
    back: "red",
    faction: null,
    deal: true,
    planets: [],
    wormhole: null,
    anomaly: "Supernova"
  },
  {
    id: 81,
    back: "green",
    faction: "The Embers of Muaat",
    deal: false,
    planets: [],
    wormhole: null,
    anomaly: "Supernova"
  },
  {
    id: 82,
    back: "blue",
    faction: null,
    deal: false,
    planets: [
      {
        name: "Mallice",
        res: 0,
        inf: 3,
        trait: "Cultural",
        skip: null,
        legendary: true
      }
    ],
    wormhole: "Gamma",
    anomaly: null
  }
]

export default tiles