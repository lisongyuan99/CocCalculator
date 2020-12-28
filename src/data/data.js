export default {
  spell: {
    lightening: {
      damage: [0, 150, 180, 210, 240, 270, 320, 400, 480, 560],
      th: [0, 5, 5, 5, 5, 8, 9, 10, 11, 12]
    },
    earthquake: {
      damage: [0, 0.145, 0.17, 0.21, 0.25, 0.29],
      th: [0, 8, 8, 9, 10, 11]
    }
  },
  defence: {
    scattershot: {
      hp: [0, 3600, 4200],
      th: [0, 13, 13]
    },
    eagleArtillery: {
      hp: [0, 4000, 4400, 4800, 5200],
      th: [0, 11, 11, 12, 13]
    }
  },
  hero: {
    royalChampion: {
      hp: [0, 2950, 3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850, 3900, 3940, 3980, 4020, 4060, 4100],
      th: [0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
      ability: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5],
      abilityDamage: [0, 1260, 1460, 1660, 1860, 1960]
    }
  },
  th: [
    {}, {}, {}, {}, {},
    { // 5本
      spell: {
        lightening: 4,
        spellNum: 2,
      }
    },
    {// 6本
      spell: {
        lightening: 4,
        spellNum: 4,
      }
    },
    { // 7本
      spell: {
        lightening: 4,
        spellNum: 6,
      }
    },
    { // 8本
      spell: {
        lightening: 5,
        earthquake: 2,
        spellNum: 7,
        clanSpellNum: 1,
      }
    },
    { // 9本
      spell: {
        lightening: 6,
        earthquake: 3,
        spellNum: 9,
        clanSpellNum: 1,
      }
    },
    { // 10本
      spell: {
        lightening: 7,
        earthquake: 4,
        spellNum: 11,
        clanSpellNum: 1,
      }
    },
    { // 11本
      spell: {
        lightening: 8,
        earthquake: 5,
        spellNum: 11,
        clanSpellNum: 2,
      },
      defence: {
        eagleArtillery: 2,
      }
    },
    { // 12本
      spell: {
        lightening: 9,
        earthquake: 5,
        spellNum: 11,
        clanSpellNum: 2,
      },
      defence: {
        eagleArtillery: 3,
      }
    },
    { // 13本
      spell: {
        lightening: 9,
        earthquake: 5,
        spellNum: 11,
        clanSpellNum: 2,
      },
      defence: {
        scattershot: 2,
        eagleArtillery: 4,
      }
    },
  ]
}