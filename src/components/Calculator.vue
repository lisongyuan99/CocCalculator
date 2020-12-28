<template>
  <v-container>
    <my-number-input v-model="num"></my-number-input>
    <v-btn @click="test">测试</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th></th>
          <th>地震×0</th>
          <th>地震×1</th>
          <th>地震×2</th>
          <th>地震×3</th>
          <th>地震×4</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(line,key) in table" :key="key">
          <td>{{key}}</td>
          <td v-for="(item, index) in line" :key="index" >
            <div class="table-cell">
              <div v-if="item.lightening !== 0"
                   class="table-item">闪电×{{item.lightening}}
              </div>
              <div v-if="item.earthquake !== 0"
                   class="table-item">地震×{{item.earthquake}}
              </div>
              <div v-if="item.lighteningFull !== 0"
                   class="table-item">满级闪电×{{item.lighteningFull}}
              </div>
              <div v-if="item.earthquakeFull !== 0"
                   class="table-item">满级地震×{{item.earthquakeFull}}
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import MyNumberInput from "@/components/MyNumberInput";
import data from "../data/data";

export default {
  components: {
    MyNumberInput
  },
  name: 'Calculator',
  created: function () {
    this.data = data
  },
  data() {
    return {
      num: 0,
      table: {
        eagleArtillery: [
          {
            lightening: 1,
            earthquake: 1,
            lighteningFull: 1,
            earthquakeFull: 1
          }, {
            lightening: 1,
            earthquake: 0,
            lighteningFull: 1,
            earthquakeFull: 0
          }, {
            lightening: 0,
            earthquake: 1,
            lighteningFull: 0,
            earthquakeFull: 1
          }, {
            lightening: 0,
            earthquake: 1,
            lighteningFull: 1,
            earthquakeFull: 1
          }, {
            lightening: 0,
            earthquake: 0,
            lighteningFull: 0,
            earthquakeFull: 1
          }
        ],
        scattershot: [
          {
            lightening: 0,
            earthquake: 0,
            lighteningFull: 0,
            earthquakeFull: 0
          }, {
            lightening: 0,
            earthquake: 0,
            lighteningFull: 0,
            earthquakeFull: 0
          }, {
            lightening: 0,
            earthquake: 0,
            lighteningFull: 0,
            earthquakeFull: 0
          }, {
            lightening: 0,
            earthquake: 0,
            lighteningFull: 0,
            earthquakeFull: 0
          }
        ]
      },
      data: {}
    }
  },
  methods: {
    clicked(e1, e2) {
      console.log(e1)
      console.log(e2)
    },
    test() {
      console.log(this)
    },
    updateAll() {

    },
    updateLine() {

    }

  }
}
</script>

<style scoped>
.table-cell{
  display: flex;
  flex-direction: column;
}
.table-item{
  margin-right: 5px;
}
</style>