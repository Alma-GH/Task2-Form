<template>
  <div class="date">
    <div class="date_input">
      <div class="day">
        <h4>День</h4>
        <my-input text="text" :value="data.day" :input="input.day" :err="!!err"/>
      </div>

      <div class="month">
        <h4>Месяц</h4>
        <my-input text="text" :value="data.month" :input="input.month" :err="!!err"/>
      </div>

      <div class="year">
        <h4>Год</h4>
        <my-input text="text" :value="data.year" :input="input.year" :err="!!err"/>
      </div>
    </div>
    <error-message :err="err"/>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput"
import ErrorMessage from "@/components/ErrorMessage";
export default {
  components:{
    ErrorMessage,
    MyInput
  },
  props:{
    data:{type:Object},
    input:{type:Object},
    err:{type:[String,Boolean]}
  }
}
</script>

<style scoped lang="sass">
@import "../../style/vars"

.date
  width: 250px

  h4
    margin-bottom: 5px
    margin-left: 5px
    font-weight: lighter

  input
    width: 100%

  .errMessage
    @extend %errMessage

  &>.date_input
    display: flex
    justify-content: space-between
    &>div
      width: 60px
      &:last-child
        width: 90px

</style>