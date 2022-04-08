<template>
  <button class="btn">
    {{name}}
  </button>
</template>

<script>
export default {
  props:{
    name:{
      type:String
    }
  }
}
</script>

<style scoped lang="sass">
@import "../../style/vars"

.btn
  width: 80px
  aspect-ratio: 2/1

  border-radius: 5px
  border: none

  background-color: $col
  color: black
  font-weight: bolder
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.5)
  cursor: pointer

  transition: box-shadow 0.2s ease-in-out
  &:hover
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5)
  &:active
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5)
  &[disabled]
    background-color: dimgrey

</style>