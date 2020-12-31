<template>
  <v-container>
    <!-- 我的信息-->
    <!--    <v-btn @click="test">test</v-btn>-->
    <div class="info-input-panel">
      <div class="info-input">
        大本等级
        <my-number-input v-model="myTh" @numChange="myThChange" :max="13"
                         :min="5"/>
      </div>
      <div class="info-input">闪电等级
        <my-number-input v-model="myLightening"
                         :max="data.th[myTh].spell.lightening"/>
        伤害：{{data.spell.lightening.damage[myLightening]}}
      </div>
      <div v-if="useEarthquake" class="info-input">地震等级
        <my-number-input v-model="myEarthquake"
                         :max="data.th[myTh].spell.earthquake"/>
        伤害：{{data.spell.earthquake.damage[myEarthquake]}}
      </div>
    </div>
    <div v-if="clanSpellNum >= 1" class="info-input-panel">
      <div class="info-input">
        援军法术
        <div class="info-input">
          <v-radio-group v-model="radio" @change="clanSpellChange" row
                         mandatory>
            <v-radio label="不使用" value="0"/>
            <v-radio v-if="clanSpellNum >= 1" label="闪电×1" value="1"/>
            <v-radio v-if="clanSpellNum >= 1" label="地震×1" value="2"/>
            <v-radio v-if="clanSpellNum >= 2" label="闪电×2" value="3"/>
            <v-radio v-if="clanSpellNum >= 2" label="闪电×1 地震×1" value="4"/>
            <v-radio v-if="clanSpellNum >= 2" label="地震×2" value="5"/>
          </v-radio-group>
        </div>

      </div>
    </div>
    <div v-if="data.th[myTh].hero.royalChampion" class="info-input-panel">
      <div class="info-input">
        <v-switch v-model="useRoyalChampion" label="闰土技能"></v-switch>
      </div>
      <div v-if="useRoyalChampion" class="info-input">闰土等级
        <my-number-input v-model="myRoyalChampion"
                         :max="data.th[myTh].hero.royalChampion"/>
      </div>
    </div>
    <div class="info-input-panel">
      <div class="info-input">
        敌人大本
        <my-number-input v-model="enemyTh" @numChange="enemyThChange" :max="13"
                         :min="5"/>
      </div>
    </div>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
        <tr>
          <th>防御</th>
          <th>地震×0</th>
          <th>地震×1</th>
          <th>地震×2</th>
          <th>地震×3</th>
          <th>地震×4</th>
        </tr>
        </thead>
        <tbody>
        <!--每一行-->
        <tr v-for="(value,key) in data.th[enemyTh].defence" :key="key">
          <td>
            <div class="defence-input-panel">
              <div>{{data.defence[key].name}}</div>
              <div>
                <my-number-input v-model="enemyDefence[key]" :max="value"
                                 :min="1"/>
              </div>
              <div>
                血量：{{data.defence[key].hp[enemyDefence[key]]}}
              </div>
            </div>
          </td>
          <td v-for="n in tableHeader" :key="n">
            <!--            {{-->
            <!--              getSpellNum(n, myEarthquake, useEarthquake, myLightening,-->
            <!--                  maxEarthquakeNum, maxLighteningNum, useRoyalChampion,-->
            <!--                  myRoyalChampion, data.defence[key].hp[enemyDefence[key]])-->
            <!--            }}-->
            <table-cell :nums="getSpellNum(n, myEarthquake, useEarthquake, myLightening,
                  maxEarthquakeNum, maxLighteningNum, useRoyalChampion,
                  myRoyalChampion, data.defence[key].hp[enemyDefence[key]])"
                        :spell-sum="data.th[myTh].spell.spellNum"/>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import MyNumberInput from "@/components/MyNumberInput";
import TableCell from "./TableCell";
import data from "../data/data";

export default {
  components: {
    MyNumberInput,
    TableCell
  },
  name: 'Calculator',
  created: function () {
    this.data = data
  },
  data() {
    return {
      myTh: 13,
      myLightening: 9,
      myEarthquake: 5,
      clanSpellNum: 2,
      useRoyalChampion: false,
      useEarthquake: true,
      myRoyalChampion: 25,
      enemyTh: 13,
      radio: 0,
      maxEarthquakeNum: 0,
      maxLighteningNum: 0,
      enemyDefence: {
        eagleArtillery: 4,
        scattershot: 2,
        infernoTower: 7,
        airDefence: 11,
        airSweeper: 7,
        wizardTower: 13,
        xBow: 8,
      },
      tableHeader: [0, 1, 2, 3, 4],
      data: {}
    }
  },
  methods: {
    test() {
      console.log(this.radio)
    },
    myThChange() { // 自己大本等级变化
      this.myLightening = this.data.th[this.myTh].spell.lightening
      this.myEarthquake = this.data.th[this.myTh].spell.earthquake
      this.myRoyalChampion = this.data.th[this.myTh].hero.royalChampion
      if (typeof (this.data.th[this.myTh].hero.royalChampion) == "undefined") {
        this.useRoyalChampion = false
      }
      this.useEarthquake = !(typeof (this.data.th[this.myTh].spell.earthquake)
          == "undefined")
      if (this.useEarthquake) {
        this.tableHeader = [0, 1, 2, 3, 4]
      } else {
        this.tableHeader = [0]
      }
      this.radio = 0
      this.maxLighteningNum = 0
      this.maxEarthquakeNum = 0
      this.clanSpellNum = this.data.th[this.myTh].spell.clanSpellNum
      this.enemyTh = this.myTh
      this.enemyThChange()
    },
    enemyThChange() {
      let defenceLevel = this.data.th[this.enemyTh].defence;
      for (let i in defenceLevel) {
        this.enemyDefence[i] = defenceLevel[i]
      }
    },
    getSpellNum(earthquakeNum, earthquakeLv, useEarthquake, lighteningLv,
                maxEarthquakeNum, maxLighteningNum, useSkill,
                heroLv, defenceHp) {
      let e = 0
      let fe = 0
      let l = 0
      let fl = 0
      let r = 0
      let restHp = defenceHp;
      if (this.data.maxEarthquakeLv === earthquakeLv) {
        maxEarthquakeNum = 0
      }
      if (this.data.maxLighteningLv === lighteningLv) {
        maxLighteningNum = 0
      }
      // 地震
      if (useEarthquake) {
        let earthquakeDamage = 0;
        let restMaxEarthquakeNum = maxEarthquakeNum
        for (let i = 0; i < earthquakeNum; i++) {
          if (restMaxEarthquakeNum > 0) {
            restMaxEarthquakeNum--
            earthquakeDamage += this.data.maxEarthquake * (1 / (2 * i + 1))
            fe++
          } else {
            earthquakeDamage += this.data.spell.earthquake.damage[earthquakeLv]
                * (1 / (2 * i + 1))
            e++
          }
        }
        restHp = restHp * (1 - earthquakeDamage)
      }
      // 技能
      if (useSkill) {
        let damageLv = this.data.hero.royalChampion.ability[heroLv]
        restHp -= this.data.hero.royalChampion.abilityDamage[damageLv];
        r = 1
      }
      if (restHp > 0) {
        // 闪电
        let restHp2 = restHp
        let maxLighteningDamage = this.data.maxLightening
        let lighteningDamage = this.data.spell.lightening.damage[lighteningLv]
        let temp = Math.ceil(restHp / maxLighteningDamage)
        if (temp <= maxLighteningNum) {
          fl = temp
        } else {
          restHp -= this.data.maxLightening * maxLighteningNum
          fl = maxLighteningNum
          l = Math.ceil(restHp / lighteningDamage)
        }
        // 计算过量伤害换非满级闪电
        let overflowDamage = fl * maxLighteningDamage + l * lighteningDamage - restHp2
        let lighteningDamageDifference = maxLighteningDamage - lighteningDamage
        let fl2 = fl
        for (let i = 0; i < fl2; i++) {
          if (overflowDamage > lighteningDamageDifference && fl > 0) {
            fl--
            l++
            overflowDamage - lighteningDamageDifference
          }
        }
      }
      return [e, l, fe, fl, r];
    },
    clanSpellChange() {
      console.log(this.radio);
      let tempL = [0, 1, 0, 2, 1, 0]
      let tempE = [0, 0, 1, 0, 1, 2]
      this.maxEarthquakeNum = tempE[this.radio]
      this.maxLighteningNum = tempL[this.radio]
    }
  },
}
</script>

<style scoped>
.info-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
}

.info-input-panel {
  display: flex;
  flex-direction: row;
  margin: 30px;
}

.table-cell {
  /*表格内部元素*/
  display: flex;
  flex-direction: column;
}
</style>