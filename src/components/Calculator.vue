<template>
  <v-container>
    <!-- 我的信息-->
    <v-btn @click="test">test</v-btn>
    <div class="info-input-panel">
      <div class="info-input">
        大本等级
        <my-number-input v-model="myTh" @numChange="myThChange" :max="13"
                         :min="5"/>
      </div>
      <div class="info-input">闪电等级
        <my-number-input v-model="myLightening"
                         :max="data.th[myTh].spell.lightening"/>
      </div>
      <div class="info-input">地震等级
        <my-number-input v-model="myEarthquake"
                         :max="data.th[myTh].spell.earthquake"/>
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
    <div class="clan-spell-panel"></div>
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
          <td v-for="n in 5" :key="n">
            <table-cell :nums="getSpellNum(n-1,
            data.defence[key].hp[enemyDefence[key]], useRoyalChampion)"
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
      useRoyalChampion: false,
      myRoyalChampion: 25,
      enemyTh: 13,
      fullEarthquakeNum: 0,
      fullLighteningNum: 0,
      enemyDefence: {
        eagleArtillery: 4,
        scattershot: 2,
        infernoTower: 7,
        airDefence: 11,
        airSweeper: 7,
        wizardTower: 13,
        xBow: 8,
      },
      data: {}
    }
  },
  methods: {
    test() {
      for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
          this.fullEarthquakeNum = i;
          this.getSpellNum(j, 10000)
        }
      }
    },
    myThChange() { // 自己大本等级变化
      this.myLightening = this.data.th[this.myTh].spell.lightening
      this.myEarthquake = this.data.th[this.myTh].spell.earthquake
      this.myRoyalChampion = this.data.th[this.myTh].hero.royalChampion
      if (typeof(this.data.th[this.myTh].hero.royalChampion) == "undefined") {
        this.useRoyalChampion = false
      }
      this.enemyTh = this.myTh;
      this.enemyThChange()
    },
    enemyThChange() {
      let defenceLevel = this.data.th[this.enemyTh].defence;
      for (let i in defenceLevel) {
        this.enemyDefence[i] = defenceLevel[i]
      }
    },
    getSpellNum(earthquakeNum, defenceHp, useSkill) {
      var e, l, fe, fl, r = 0
      // 计算需要多少满级地震 多少普通地震
      if (earthquakeNum <= this.fullEarthquakeNum) {
        fe = earthquakeNum
        e = 0
      } else {
        fe = this.fullEarthquakeNum
        e = earthquakeNum - this.fullEarthquakeNum
      }

      // 满级地震摧毁血量百分比
      let feDamageRate = this.data.earthquakeDamageRate[0][fe] *
          this.data.maxEarthquake
      // 满级地震摧毁血量百分比
      let eDamageRate = this.data.earthquakeDamageRate[fe + 1][fe + e] *
          this.data.spell.earthquake.damage[this.myEarthquake]
      // 剩余血量
      let restHp = defenceHp * (1 - (feDamageRate + eDamageRate))
      // 使用闰土技能
      if (useSkill) {
        let skillDamageLv =
            this.data.hero.royalChampion.ability[this.myRoyalChampion]
        restHp = restHp -
            this.data.hero.royalChampion.abilityDamage[skillDamageLv]
        r = 1
      }
      // 还有血量
      if (restHp > 0) {
        // 需要满级闪电个数
        let flNum = Math.ceil(restHp / this.data.maxLightening);
        if (this.fullLighteningNum >= flNum) {
          fl = flNum
          l = 0
        } else {
          restHp = restHp - this.fullLighteningNum * this.data.maxLightening
          fl = this.fullLighteningNum
          l = Math.ceil(restHp / this.data.spell.lightening.damage[this.myLightening])
        }
      } else {
        l = 0
        fl = 0
      }
      return [e, l, fe, fl, r];
    }
  },
  watch: {}
}
</script>

<style scoped>
.info-input {
  display: flex;
  flex-direction: row;
  align-items: center;
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