<template>
  <div v-if="err && typeof err === 'string'" class="errMessage">{{err}}</div>
</template>

<script>
export default {
  props:{
    err:{type:[String,Boolean], required:true}
  }
}
</script>

<style scoped lang="sass">
@import "../style/vars"

.errMessage
  @extend %errMessage

</style>