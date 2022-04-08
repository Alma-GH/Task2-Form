<template>
    <div>
      <div class="choice" v-for="choice in choices" :key="choice.id">
        <input :type="type" :id="choice.id" @change="change"
               :name="name" :value="choice.value" :checked="choice.value===value" :class="type===`radio` ? `custom-radio` : `custom-checkbox`">
        <label :for="choice.id"> {{ choice.name }} </label>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    type:{
      type:String,
      required: true
    },
    name:{
      type:String,
    },
    value:{
      type:[String,Boolean],
    },
    change:{
      type:Function,
      required:true
    },
    choices:{
      type:Array,
      required: true,
    }
  },
}
</script>

<style scoped lang="sass">
@import "../../style/custom"

.choice
  display: flex
  align-items: center

  input
    margin-right: 5px



</style>