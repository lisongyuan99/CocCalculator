export default {
  spell: {
    lightening: {
      name: "闪电",
      damage: [0, 150, 180, 210, 240, 270, 320, 400, 480, 560],
      th: [0, 5, 5, 5, 5, 8, 9, 10, 11, 12]
    },
    earthquake: {
      name: "地震",
      damage: [0, 0.145, 0.17, 0.21, 0.25, 0.29],
      th: [0, 8, 8, 9, 10, 11]
    }
  },
  defence: {
    eagleArtillery: {
      name: "天鹰火炮",
      hp: [0, 4000, 4400, 4800, 5200]
    },
    scattershot: {
      name: "投石炮",
      hp: [0, 3600, 4200]
    },
    infernoTower: {
      name: "地狱塔",
      hp: [0, 1500, 1800, 2100, 2400, 2700, 3000, 3300]
    },
    airDefence: {
      name: "防空火箭",
      hp: [0, 800, 850, 900, 950, 1000, 1050, 1100, 1210, 1300, 1400, 1500]
    },
    airSweeper: {
      name: "空气炮",
      hp: [0, 750, 800, 850, 900, 950, 1000, 1050]
    },
    wizardTower: {
      name: "法师塔",
      hp: [0, 620, 650, 680, 730, 840, 960, 1200, 1440, 1680, 2000, 2240, 2480, 2700]
    },
    xBow: {
      name: "X连弩",
      hp: [0, 1500, 1900, 2300, 2700, 3100, 3500, 3900, 4200]
    },
  },
  hero: {
    royalChampion: {
      name: "飞盾战神",
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
        clanSpellNum: 0,
      },
      defence: {
        airDefence: 3,
        wizardTower: 2,
      },
      hero: {}
    },
    {// 6本
      spell: {
        lightening: 4,
        spellNum: 4,
        clanSpellNum: 0,
      },
      defence: {
        airDefence: 4,
        airSweeper: 2,
        wizardTower: 3,
      },
      hero: {}
    },
    { // 7本
      spell: {
        lightening: 4,
        spellNum: 6,
        clanSpellNum: 0,
      },
      defence: {
        airDefence: 5,
        airSweeper: 3,
        wizardTower: 4,
      },
      hero: {}
    },
    { // 8本
      spell: {
        lightening: 5,
        earthquake: 2,
        spellNum: 7,
        clanSpellNum: 1,
      },
      defence: {
        airDefence: 6,
        airSweeper: 4,
        wizardTower: 6,
      },
      hero: {}
    },
    { // 9本
      spell: {
        lightening: 6,
        earthquake: 3,
        spellNum: 9,
        clanSpellNum: 1,
      },
      defence: {
        airDefence: 7,
        airSweeper: 5,
        wizardTower: 7,
        xBow: 3,
      },
      hero: {}
    },
    { // 10本
      spell: {
        lightening: 7,
        earthquake: 4,
        spellNum: 11,
        clanSpellNum: 1,
      },
      defence: {
        infernoTower: 3,
        airDefence: 8,
        airSweeper: 6,
        wizardTower: 9,
        xBow: 4,
      },
      hero: {}
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
        infernoTower: 5,
        airDefence: 9,
        airSweeper: 7,
        wizardTower: 10,
        xBow: 5,
      },
      hero: {}
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
        infernoTower: 6,
        airDefence: 10,
        airSweeper: 7,
        wizardTower: 11,
        xBow: 6,
      },
      hero: {}
    },
    { // 13本
      spell: {
        lightening: 9,
        earthquake: 5,
        spellNum: 11,
        clanSpellNum: 2,
      },
      defence: {
        eagleArtillery: 4,
        scattershot: 2,
        infernoTower: 7,
        airDefence: 11,
        airSweeper: 7,
        wizardTower: 13,
        xBow: 8,
      },
      hero: {
        royalChampion: 25
      }
    },
  ],
  maxTh: 13,
  maxEarthquake: 0.29,
  maxLightening: 560,
  maxEarthquakeLv:5,
  maxLighteningLv:9,
}