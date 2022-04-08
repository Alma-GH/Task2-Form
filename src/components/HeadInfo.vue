<template>
  <h3 class="head">{{name}}</h3>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
    }
  }
}
</script>

<style scoped lang="sass">
  .head
    margin-bottom: 10px
    margin-left: 5px

</style>