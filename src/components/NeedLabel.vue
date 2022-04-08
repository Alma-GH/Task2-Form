<template>
    <span v-if="need" class="need">*</span>
</template>

<script>
export default {
  props:{
    need:{required:true}
  }
}
</script>

<style scoped lang="sass">
.need
  position: absolute
  right: 3px
  top: 3px
</style>