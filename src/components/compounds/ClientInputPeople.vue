<template>
  <div class="people">

    <div class="group">
      <head-info name="Группа клиентов"/>
      <my-select id="groupID" multiple="multiple" :options="groupsVars" :value="groups" :change="iGroup" :err="errGroups"/>
      <div v-if="!errGroups" class="hint">Ctrl + element</div>
      <need-label :need="true"/>
      <error-message :err="errGroups"/>
    </div>

    <div class="doctor">
      <head-info name="Лечащий врач"/>
      <my-select id="docID" :options="doctorsVars" :value="doctor" :change="iDoc"/>
    </div>

  </div>
</template>

<script>
import HeadInfo from "@/components/HeadInfo";
import MySelect from "@/components/UI/MySelect";
import NeedLabel from "@/components/NeedLabel";
import ErrorMessage from "@/components/ErrorMessage";
export default {
  components:{ErrorMessage, NeedLabel, MySelect, HeadInfo},
  props:{
    groups:{type:Array},
    doctor:{type:String},

    iGroup:{type:Function},
    iDoc:{type:Function},
    errGroups:{type:[String,Boolean]}
  },
  data(){
    return{
      groupsVars:[
        {value:"VIP",name:"VIP"},
        {value:"Проблемные",name:"Проблемные"},
        {value:"ОМС",name:"ОМС"},
      ],
      doctorsVars:[
        {value:"Иванов",name:"Иванов"},
        {value:"Захарова",name:"Захарова"},
        {value:"Чернышева",name:"Чернышева"},
      ],
    }
  },
}
</script>

<style scoped lang="sass">
@import "../../style/vars"

.people
  @extend %left_right

  &>.group
    position: relative
    width: $blockWidth


#groupID+.hint
  padding: 5px
  display: none

#groupID:focus+.hint
  display:  block



@media (max-width: $fp)
  .group
    margin-bottom: $lowSpace

</style>