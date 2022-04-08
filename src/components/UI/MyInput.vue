<template>
  <div class="input_block">
    <input :type="type" :placeholder="placeholder" :value="value" @input="input" :class="{input:true,err}"
           :style="type===`tel` && {paddingLeft: `30px`}">
    <span v-if="type===`tel`" class="prefix">+7</span>
    <error-message :err="err"/>
    <need-label :need="need"/>
  </div>

</template>

<script>
import ErrorMessage from "@/components/ErrorMessage";
import NeedLabel from "@/components/NeedLabel";
export default {
  components: {NeedLabel, ErrorMessage},
  props:{

    type:{type:String},
    placeholder:{type:String},

    value:{type:String},
    input:{type:Function},

    need:{type:[String,Boolean]},
    err:{
      type:[String,Boolean],
    }
  },

  data(){
    return {

    }
  },

  methods: {
    getClass(){
      let cls = ["input"]
      if(this.err) cls.push("err")
      return cls.join(" ")
    }
  }
}
</script>

<style scoped lang="sass">
@import "../../style/vars"

.input_block
  position: relative
  font-family: sans-serif
  font-size: small

  .prefix
    position: absolute
    left: 10px
    top: 10px




.input
  width: 100%

  padding: 10px
  box-shadow: 0 0 15px 4px rgba(13, 154, 13, 0.2)
  border-radius: 7px

  transition: box-shadow .2s ease-in-out


  &:hover
    box-shadow: 0 0 15px 4px rgba(13, 154, 13, 0.5)


  &:focus
    box-shadow: 0 0 15px 4px rgba(13, 154, 13, 0.5)



  &.err
    box-shadow: 0 0 15px 4px rgba(234, 7, 7,0.2)

    &:hover,&:focus
      box-shadow: 0 0 15px 4px rgba(234, 7, 7,0.5)



</style>