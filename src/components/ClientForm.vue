<template>
  <form @submit.prevent="submit" class="form">

    <h2 class="head">Создание клиента</h2>

    <client-input-name
        class="block"

        :inputNameVals = "[lastName,name,patronymic]"
        :errNameVals   = "[getError(`lastName`),getError(`name`), getError(`patronymic`)]"
        :iFuncVals     = "[iLastName,iName,iPatronymic]"

    />
    <client-input-bio
        class="block"

        :dateVals       = "{day:dayBirth, month:monthBirth, year:yearBirth}"
        :inputDateVals  = "{day:iDayBirth, month:iMonthBirth, year:iYearBirth}"
        :errDate        = "getError(`yearBirth`, `Год: `)
                          || getError(`monthBirth`,`Месяц: `)
                          || getError(`dayBirth`, `День: `)
                          || dateError(+this.$v.dayBirth.$model, +this.$v.monthBirth.$model,+this.$v.yearBirth.$model)
                          "

        :sex="sex"
        :iSex="iSex"
    />
    <client-input-phone
        class="block"

        :tel="tel"
        :i-tel="iTel"
        :errTel="getError(`tel`)"
    />
    <client-input-people
        class="block"

        :groups="groupClients"
        :doctor="doctor"

        :i-doc="iDoc"
        :i-group="iGroup"
        :errGroups="getError(`groupClients`)"
    />

    <my-radio class="block check" type="checkbox" :choices="sms" name="sms" :change="iSMS" :value="checkSMS"/>

    <client-input-address
        class="block"

        :address-vals="[index,country,region,city,street,house]"
        :i-func-vals="[iIndex,iCountry,iRegion,iCity,iStreet,iHouse]"
        :err-address-vals="[getError(`index`),getError(`country`),getError(`region`),
                            getError(`city`),getError(`street`),getError(`house`)]"

    />

    <client-input-doc
        class="block"


        :doc-type="docType"
        :change-doc-type="iDocumentType"

        :doc-vals="[seriesOfDocument,docNumber,issuedBy]"
        :i-address-func-vals="[iDocumentSeries,iDocumentNumber,iDocumentIssuedBy]"

        :doc-date-vals         = "{day:dayIssued, month:monthIssued, year:yearIssued}"
        :i-doc-date-func-vals  = "{day:iDayIssued, month:iMonthIssued, year:iYearIssued}"

        :err-doc-vals          ="[getError(`seriesOfDocument`),getError(`docNumber`),
                                  getError(`issuedBy`),getError(`docType`)]"

        :err-date-vals        = "getError(`yearIssued`, `Год: `)
                                || getError(`monthIssued`,`Месяц: `)
                                || getError(`dayIssued`, `День: `)
                                || dateError(+this.$v.dayIssued.$model, +this.$v.monthIssued.$model,+this.$v.yearIssued.$model)
                                "
    />

    <div class="block">* - обязательное поле</div>

    <my-button :disabled="this.$v.$error" name="Создать" class="block"/>
  </form>
</template>

<script>

import ClientInputName from "@/components/compounds/ClientInputName";
import { validationMixin } from 'vuelidate'
import {required, minLength,maxLength,between,numeric,alphaNum} from 'vuelidate/lib/validators'
import {isOnlyAlphaAndSpace, isRealDate, withoutSpecSign} from "@/tools/validators";
import MyButton from "@/components/UI/MyButton";
import ClientInputBio from "@/components/compounds/ClientInputBio";
import ClientInputPhone from "@/components/compounds/ClientInputPhone";
import ClientInputPeople from "@/components/compounds/ClientInputPeople";
import MyRadio from "@/components/UI/MyRadio";
import ClientInputAddress from "@/components/compounds/ClientInputAddress";
import ClientInputDoc from "@/components/compounds/ClientInputDoc";
import {correctEndForNumber} from "@/tools/utils";


export default {

  components:{
    ClientInputDoc,
    ClientInputAddress,
    MyRadio,
    ClientInputPeople,
    ClientInputPhone,
    ClientInputBio,
    MyButton,
    ClientInputName,

  },

  props:{
    cb:{type:Function,required:true}
  },
  mounted() {
    console.log(this.$v)
  },

  data(){
    return {
      sms: [
        {id:"sms", name:"Не отправлять СМС", value:true},
      ],


      //form data
      //main
      name: "",
      lastName: "",
      patronymic: "",

      dayBirth: "",
      monthBirth: "",
      yearBirth: "",

      sex:"",

      tel: "",

      groupClients: [],
      doctor: "Иванов",

      checkSMS: false,

      //address
      index:"",
      country:"",
      region: "",

      city:"",
      street:"",
      house:"",


      //docs
      docType:"",

      seriesOfDocument:"",
      docNumber:"",
      issuedBy:"",

      dayIssued:"",
      monthIssued:"",
      yearIssued:"",
    }
  },

  methods: {
    clearData(){
      //form data
      //main
      this.name= "";
      this.lastName= "";
      this.patronymic= "";

      this.dayBirth= "";
      this.monthBirth= "";
      this.yearBirth= "";

      this.sex="";

      this.tel= "";

      this.groupClients= [];
      this.doctor= "Иванов";

      this.checkSMS= false;

      //address
      this.index="";
      this.country="";
      this.region= "";

      this.city="";
      this.street="";
      this.house="";


      //docs
      this.docType="";

      this.seriesOfDocument="";
      this.docNumber="";
      this.issuedBy="";

      this.dayIssued="";
      this.monthIssued="";
      this.yearIssued="";
    },

    submit(){
      this.$v.$touch()
      if(!this.$v.$error){
        this.cb()
        this.clearData()
        this.$v.$reset()
      }
    },

    getError(propStr, prefix){
      if(!this.$v.$error || !this.$v[propStr]) return false

      if(prefix === undefined) prefix = ""

      const errObj = this.$v[propStr]
      const params = errObj.$params

      if(errObj.required === false)   return prefix + `Обязательное поле`

      if(errObj.alphaNum === false)   return prefix + `Используйте только анг. буквы и цыфры`
      if(errObj.numeric === false)    return prefix + `Введите число`
      if(errObj.alphaSpace === false) return prefix + `Используйте только буквы и пробелы`
      if(errObj.unspec === false)     return prefix + `Используйте только буквы, цифры, пробелы или (-,_,/,\\)`


      if(Object.keys(params).includes("minLength")
          && Object.keys(params).includes("maxLength")
          && (errObj.maxLength === false
              || errObj.minLength === false))         return prefix + "Неправильная длина"
      if(errObj.minLength === false)                  return prefix + `Минимум ${params.minLength.min} символ${correctEndForNumber(params.minLength.min)}`

      if(errObj.between === false)                    return prefix + `Между ${params.between.min} и ${params.between.max}`

      return false
    },
    dateError(day, month, year){
      if(!this.$v.$error)               return false
      if(isRealDate(day, month, year))  return false
      return `Неправильная дата`
    },


    //i - input event functions
    iName(e){
      this.name = e.target.value
      this.$v.name.$touch()
    },
    iLastName(e){
      this.lastName = e.target.value
      this.$v.lastName.$touch()
    },
    iPatronymic(e){
      this.patronymic = e.target.value
      this.$v.patronymic.$touch()
    },

    iDayBirth(e){
      this.dayBirth = e.target.value
      this.$v.dayBirth.$touch()
    },
    iMonthBirth(e){
      this.monthBirth = e.target.value
      this.$v.monthBirth.$touch()
    },
    iYearBirth(e){
      this.yearBirth = e.target.value
      this.$v.yearBirth.$touch()
    },

    iSex(e){
      if(e.target.checked)
        this.sex = e.target.value
    },

    iTel(e){
      this.tel = e.target.value
      this.$v.tel.$touch()
    },

    iGroup(e){

      const newGroups = []
      const ops = e.target.options

      for (let i = 0; i <ops.length ; i++) {
        if(ops[i].selected) newGroups.push(ops[i].value)
      }

      this.groupClients = newGroups
      this.$v.groupClients.$touch()
    },
    iDoc(e){
      this.doctor = e.target.value
    },

    iSMS(e){
      this.checkSMS = e.target.checked
    },

    iIndex(e){
      this.index = e.target.value
      this.$v.index.$touch()
    },
    iCountry(e){
      this.country = e.target.value
      this.$v.country.$touch()
    },
    iRegion(e){
      this.region = e.target.value
      this.$v.region.$touch()
    },
    iCity(e){
      this.city = e.target.value
      this.$v.city.$touch()
    },
    iStreet(e){
      this.street = e.target.value
      this.$v.street.$touch()
    },
    iHouse(e){
      this.house = e.target.value
      this.$v.house.$touch()
    },

    iDocumentType(e){
      this.docType = e.target.value
      this.$v.docType.$touch()
    },
    iDocumentSeries(e){
      this.seriesOfDocument = e.target.value
      this.$v.seriesOfDocument.$touch()
    },
    iDocumentNumber(e){
      this.docNumber = e.target.value
      this.$v.docNumber.$touch()
    },
    iDocumentIssuedBy(e){
      this.issuedBy = e.target.value
    },

    iDayIssued(e){
      this.dayIssued = e.target.value
      this.$v.dayIssued.$touch()
    },
    iMonthIssued(e){
      this.monthIssued = e.target.value
      this.$v.monthIssued.$touch()
    },
    iYearIssued(e){
      this.yearIssued = e.target.value
      this.$v.yearIssued.$touch()
    },

  },

  mixins: [validationMixin],
  validations: {
    name:{
      required,
      minLength:minLength(2),
      alphaSpace:isOnlyAlphaAndSpace
    },
    lastName:{
      required,
      minLength:minLength(2),
      alphaSpace:isOnlyAlphaAndSpace
    },
    patronymic:{
      minLength:minLength(4),
      alphaSpace:isOnlyAlphaAndSpace
    },
    dayBirth: {
      required,
      numeric,
      between: between(1,31),
    },
    monthBirth: {
      required,
      numeric,
      between: between(1,12)
    },
    yearBirth: {
      required,
      numeric,
      between: between(1890,new Date().getFullYear())
    },


    tel:{
      required,
      numeric,
      minLength:minLength(10),
      maxLength:maxLength(10),
    },

    groupClients: {
      required
    },


    index: {
      numeric,
      minLength:minLength(6),
      maxLength:maxLength(6),
    },
    country: {
      alphaSpace:isOnlyAlphaAndSpace
    },
    region: {
      alphaSpace:isOnlyAlphaAndSpace
    },
    city: {
      required,
      alphaSpace:isOnlyAlphaAndSpace
    },
    street: {
      unspec:withoutSpecSign
    },
    house: {
      unspec:withoutSpecSign
    },

    docType: {
      required
    },
    seriesOfDocument: {
      alphaNum
    },
    docNumber: {
      alphaNum
    },

    dayIssued: {
      required,
      numeric,
      between: between(1,31),
    },
    monthIssued: {
      required,
      numeric,
      between: between(1,12)
    },
    yearIssued: {
      required,
      numeric,
      between: between(1890,new Date().getFullYear())
    },

  }

}
</script>


<style scoped lang="sass">
@import "../style/vars"


.form
  min-height: 200px
  width: 700px

  @extend %column
  padding: $space

  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.5)
  background-color: white
  &>.head
    text-align: center
    margin-bottom: $space/2


  &>.block
    margin: $space 0



</style>