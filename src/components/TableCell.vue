<template>
  <div v-if="nums[0] + nums[1] <= spellSum" class="table-cell">
    <div v-if="nums[0] !== 0" class="table-item">地震×{{nums[0]}}</div>
    <div v-if="nums[2] !== 0" class="table-item">满级地震×{{nums[2]}}</div>
    <div v-if="nums[1] !== 0" class="table-item">闪电×{{nums[1]}}</div>
    <div v-if="nums[3] !== 0" class="table-item">满级闪电×{{nums[3]}}</div>
    <div v-if="nums[4] !== 0" class="table-item">闰土技能</div>
  </div>
  <div v-else class="table-cell">
    <div>你在想🍑</div>
    <div>你™劈不掉</div>
  </div>

</template>

<script>
export default {
  name: "table-cell",
  props: {
    nums: {
      type: Array,
      require: true,
    },
    spellSum: {
      type: Number,
      require: true,
    }
  }
}
</script>

<style scoped>
.table-cell {

}

.table-item {

}
</style>