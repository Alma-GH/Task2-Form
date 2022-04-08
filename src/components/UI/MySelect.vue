<template>
  <select :class="{select:true, err}" :multiple="multiple" @change="change">
    <option v-if="defaultOption" value="" selected disabled hidden>{{defaultOption}}</option>
    <option v-for="option in options" :value="option.value" :key="option.value"
            :selected="isSelected(option.value)">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  methods:{
    isSelected(val){
      if(typeof this.value === "object"){
        return this.value.includes(val)
      }else{
        return val === this.value
      }
    }
  },
  props:{
    multiple:{},
    err:{},
    value:{
      type:[String,Array]
    },
    defaultOption:{
      type: String
    },
    options:{
      type: Array,
      required: true
    },
    change:{
      type:Function,
      required: true,
    }
  }
}
</script>

<style scoped lang="sass">
@import "./../../style/vars"



.select
  width: 250px
  padding: 10px
  border-radius: 10px
  overflow: hidden
  cursor: pointer

  &[multiple]
    cursor: default

  &.err,&.err:focus
    border-color: red
    color: red

  option
    height: 25px

    cursor: pointer
    display: flex
    align-items: center
    padding: 3px
    border-radius: 3px
    margin-bottom: 5px
  option[disabled]
    display: none




</style>