<template>

    <div class="bio">
      <div class="birth">
        <head-info name="Дата рождения"/>
        <my-date :data="{day:dateVals.day,month:dateVals.month,year:dateVals.year}"
                 :input="{day:inputDateVals.day, month:inputDateVals.month, year:inputDateVals.year}"
                 :err="errDate"
        />
        <need-label :need="true"/>
      </div>

      <div class="sex">
        <head-info name="Пол"/>
        <my-radio class="sex_input" :type="`radio`"
                      :choices="sexVars" :value="sex" :change="iSex" :name="nameRadio"/>
      </div>
    </div>

</template>

<script>
import MyRadio from "@/components/UI/MyRadio"
import HeadInfo from "@/components/HeadInfo";
import MyDate from "@/components/UI/MyDate";
import NeedLabel from "@/components/NeedLabel";
export default {
  components:{
    NeedLabel,
    MyDate,
    MyRadio, HeadInfo
  },
  props:{
    dateVals:{type:Object},
    inputDateVals:{type:Object},
    errDate:{type:[String,Boolean]},

    sex:{type:String},
    iSex:{type:Function, required:true}
  },
  data(){
    return {
      sexVars: [
        {id:"choice1", name:"Мужской", value:"Мужской"},
        {id:"choice2", name:"Женский", value:"Женский"},
      ],
      nameRadio: "sex"
    }
  },

  methods: {

  }
}
</script>

<style scoped lang="sass">
@import "../../style/vars"

.bio
  @extend %left_right

  .birth
    position: relative //for label
    width: $blockWidth
    h4
      margin-bottom: 5px
      margin-left: 5px
      font-weight: lighter

  .sex_input
    height: 50px
    display: flex
    flex-direction: column
    justify-content: space-between

@media (max-width: $fp)
  .birth
    margin-bottom: $lowSpace

</style>