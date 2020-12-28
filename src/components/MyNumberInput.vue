<template>
  <div>
    <v-text-field
        prepend-icon="mdi-minus"
        append-outer-icon="mdi-plus"
        v-model="value"
        type="number"
        readonly
        @click:prepend="minus"
        @click:append-outer="plus"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "my-number-input",
  props: {
    min: Number,
    max: Number,
    value: Number
  },
  data() {
    return {
      num: 0
    }
  },
  methods:{
    plus() {
      this.$emit('input', this.value + 1)
    },
    minus(){
      this.$emit('input', this.value - 1)
    }
  }
}
</script>

<style scoped>

</style>