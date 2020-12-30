<template>
  <div class="number-input-box">
    <div @click="minus" class="icon">
      <v-icon :color="minusColor">mdi-minus</v-icon>
    </div>
    <!--    <v-text-field v-model="value" type="number" readonly-->
    <!--                  class="centered-input"></v-text-field>-->
    <div class="num">{{value}}</div>
    <div @click="plus" class="icon">
      <v-icon :color="plusColor">mdi-plus</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-number-input",
  props: {
    min: {
      type: Number,
      default: 1,
      require: true,
    },
    max: {
      type: Number,
      default: 100,
      require: true,
    },
    value: Number
  },
  data() {
    return {}
  },
  computed: {
    // 计算按钮的颜色
    minusColor() {
      return this.value <= this.min ? '#dddddd' : '#757575'
    },
    plusColor(){
      return this.value >= this.max ? '#dddddd' : '#757575'
    }
  },
  methods: {
    plus() { // 点击增加按钮
      if (this.value + 1 <= this.max) {
        this.$emit('input', this.value + 1);
        this.$emit('numChange')
      }
    },
    minus() { // 点击减少按钮
      if (this.value - 1 >= this.min) {
        this.$emit('input', this.value - 1);
        this.$emit('numChange')
      }
    }
  }
}
</script>

<style scoped>
.number-input-box {
  display: flex;
  flex-direction: row;
  align-content: center;
}

.icon {
  display: flex;
  justify-content: center;
}

.num {
  width: 20px;
  text-align: center;
}

/*.centered-input >>> input {*/
/*  text-align: center*/
/*}*/
</style>