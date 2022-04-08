<template>
  <div class="phone">
    <head-info :name="`Телефон`"/>
    <my-input type="tel" :value="tel" :input="iTel" :err="errTel" :need="true"/>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import HeadInfo from "@/components/HeadInfo";
export default {
  components: {MyInput, HeadInfo},
  methods:{

  },
  props:{
    tel:{
      type:[String,Boolean],
    },
    iTel:{
      type:Function, required:true
    },
    errTel:{type:[String,Boolean]}
  }
}
</script>

<style scoped lang="sass">


</style>