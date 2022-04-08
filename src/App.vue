<template>
  <div class="App">
    <div class="wrapForm">
      <client-form :cb="noticeOn"/>
    </div>
    <div :class="{notice:true, active:noticeActive}">
      Клиент создан
    </div>
  </div>
</template>

<script>
import ClientForm from "@/components/ClientForm";
export default {
  name: 'App',
  components: {ClientForm},
  data(){
    return{
      noticeActive: false
    }
  },
  methods:{
    noticeOn(){
      this.noticeActive = true;
      setTimeout(()=>this.noticeActive=false, 3500)
    }
  },
}
</script>

<style lang="sass">
@import "./../src/style/vars"

*, *:before, *:after
  box-sizing: border-box
  margin: 0
  padding: 0


.App

  position: relative

  &>.notice
    position: fixed
    right: -250px
    top: 50px

    width: 200px
    aspect-ratio: 3/1
    border-radius: 10px
    border: $shadowCol solid 5px
    background-color: white

    display:  flex
    justify-content: center
    align-items: center
    padding: 10px
    font-size: large

    transition: right 0.5s ease-in-out

  &>.notice.active
    right: 50px

.wrapForm
  display: flex
  justify-content: center
  background-color: #e6e6fa




input
  border: none
  outline: none

</style>
