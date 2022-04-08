<template>
    <div>
      <head-info :name="'ФИО'"/>
      <div class="name">
        <div class="name_column">
          <my-input  type="text" placeholder="Фамилия"
                     :value="inputNameVals[0]" :input="iFuncVals[0]"
                     :err="errNameVals[0]"        need="need"/>
          <my-input  type="text" placeholder="Имя"
                     :value="inputNameVals[1]" :input="iFuncVals[1]"
                     :err="errNameVals[1]"             need="need" />
          <my-input  type="text" placeholder="Отчество"
                     :value="inputNameVals[2]" :input="iFuncVals[2]"
                     :err="errNameVals[2]"/>
        </div>
      </div>
    </div>

</template>

<script>
import HeadInfo from "@/components/HeadInfo";
import MyInput from "@/components/UI/MyInput";
export default {
  components:{
    MyInput,
    HeadInfo,
  },
  props:{
    inputNameVals:{type:Array, required:true},
    errNameVals:{type:Array, required:true},
    iFuncVals:{type:Array, required:true},
  },

  data(){
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped lang="sass">
@import "../../style/vars"

.name_column
  &>*
    margin-bottom: $lowSpace
    &:last-child
      margin-bottom: 0

</style>