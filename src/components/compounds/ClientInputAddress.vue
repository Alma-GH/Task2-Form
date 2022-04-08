<template>
  <div class="address">
    <head-info :name="`Адрес`"/>
    <div class="address_input">

      <div class="macroGeo address_column">
        <my-input  type="text" placeholder="Индекс"
                   :value="addressVals[0]" :input="iFuncVals[0]"
                   :err="errAddressVals[0]"/>
        <my-input  type="text" placeholder="Страна"
                   :value="addressVals[1]" :input="iFuncVals[1]"
                   :err="errAddressVals[1]"/>
        <my-input  type="text" placeholder="Область"
                   :value="addressVals[2]" :input="iFuncVals[2]"
                   :err="errAddressVals[2]"/>
      </div>

      <div class="geo address_column">
        <my-input  type="text" placeholder="Город"
                   :value="addressVals[3]" :input="iFuncVals[3]"
                   :err="errAddressVals[3]" :need="true"/>
        <my-input  type="text" placeholder="Улица"
                   :value="addressVals[4]" :input="iFuncVals[4]"
                   :err="errAddressVals[4]"/>
        <my-input  type="text" placeholder="Дом"
                   :value="addressVals[5]" :input="iFuncVals[5]"
                   :err="errAddressVals[5]"/>
      </div>

    </div>
  </div>
</template>

<script>
import HeadInfo from "@/components/HeadInfo";
import MyInput from "@/components/UI/MyInput";
export default {
  components: {MyInput,HeadInfo},
  props:{
    iFuncVals: {type:Array},
    addressVals: {type: Array},
    errAddressVals:{type:Array}
  }
}
</script>

<style scoped lang="sass">
@import "../../style/vars"

.address_input
  display: flex
  flex-direction: column

  &>.macroGeo
    margin-bottom: $space*2

.address_column
  &>*
    margin-bottom: $lowSpace
    &:last-child
      margin-bottom: 0

</style>