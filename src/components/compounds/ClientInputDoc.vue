<template>
  <div class="document">
    <head-info :name="`Документ`"/>
    <div>
      <div class="block">
        <my-select :options="docTypeVars" default-option="Тип документа"
                   :change="changeDocType" :value="docType" :err="errDocVals[3]"/>
        <need-label :need="true"/>
        <error-message :err="errDocVals[3]"/>
      </div>


      <div class="doc_input block">
        <div class="doc_row">
          <my-input  type="text" placeholder="Серия"
                     :value="docVals[0]" :input="iAddressFuncVals[0]"
                     :err="errDocVals[0]"/>
          <my-input  type="text" placeholder="Номер"
                     :value="docVals[1]" :input="iAddressFuncVals[1]"
                     :err="errDocVals[1]"/>
        </div>
        <my-input class="wide_input" type="text" placeholder="Кем выдан"
                  :value="docVals[2]" :input="iAddressFuncVals[2]"
                  :err="errDocVals[2]"/>
      </div>

      <div class="issued">
        <head-info name="Дата выдачи"/>
        <my-date :data="docDateVals" :input="iDocDateFuncVals" :err="errDateVals"/>
        <need-label need="need"/>
      </div>

    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import HeadInfo from "@/components/HeadInfo";
import MySelect from "@/components/UI/MySelect";
import NeedLabel from "@/components/NeedLabel";
import ErrorMessage from "@/components/ErrorMessage";
import MyDate from "@/components/UI/MyDate";
export default {
  components: {
    MyDate,
    ErrorMessage,
    NeedLabel,
    MySelect,
    MyInput,
    HeadInfo},
  props:{
    docVals:{type:Array, required:true},
    iAddressFuncVals:{type:Array, required:true},

    docType:{type:String, required:true},
    changeDocType:{type:Function, required:true},

    docDateVals:{type:Object, required:true},
    iDocDateFuncVals:{type:Object, required:true},

    errDocVals:{type:Array, required:true},
    errDateVals:{type:[String,Boolean], required:true}
  },
  data(){
    return{
      docTypeVars:[
        {value:"Паспорт",                  name:"Паспорт"},
        {value:"Свидетельство о рождении", name:"Свидетельство о рождении"},
        {value:"Вод. удостоверение",       name:"Вод. удостоверение"},
      ]
    }
  }
}
</script>

<style scoped lang="sass">
@import "../../style/vars"

.block
  position: relative
  margin-bottom: $lowSpace

  div>&:first-child
    width: $blockWidth



.doc_input

  .doc_row
    @extend %left_right
    margin-bottom: $lowSpace
    &>*
      width: 45%

  .wide_input
    width: 100%

.issued
  position: relative
  width: $blockWidth

@media (max-width: $fp)
  .doc_input
    .doc_row
      &>*
        width: 100%
        &:first-child
          margin-bottom: $lowSpace


</style>