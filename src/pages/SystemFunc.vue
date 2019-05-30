<template>
  <div class="vue-info">
    <div class="head">
      {{funtitle}}
    </div>
    <div class="middle">
      <NetTransport v-if="funcName==='NetTransport'"/>
      <CompanyInfo v-if="funcName==='CompanyInfo'"/>
      <Language v-if="funcName==='Language'"/>
      <Printer v-if="funcName==='Printer'"/>
      <PrinterPosition v-if="funcName==='PrinterPosition'"/>
      <SystemTime v-if="funcName==='SystemTime'"/>
      <Weight v-if="funcName==='Weight'"/>
      <Touch v-if="funcName==='Touch'"/>
      <Newsletter v-if="funcName==='Newsletter'"/>
      <DataExport v-if="funcName==='DataExport'"/>
      <Impedance v-if="funcName==='Impedance'"/>
      <DataBackup v-if="funcName==='DataBackup'"/>
    </div>
    <div class="bottom">
      <router-link to="/"><i class="fa fa-home"></i> 主页</router-link>
      <a @click="goBack"><i class="fa fa-cog"></i> {{systemsettitle}}</a>
    </div>
  </div>
</template>
<script>
  import NetTransport from "@/components/NetTransport"
  import CompanyInfo from "@/components/CompanyInfo"
  import Language from "@/components/Language"
  import Printer from "@/components/Printer"
  import PrinterPosition from "@/components/PrinterPosition"
  import SystemTime from "@/components/SystemTime"

  import Weight from "@/components/Weight"
  import Touch from "@/components/Touch"
  import Newsletter from "@/components/Newsletter"
  import DataExport from "@/components/DataExport"
  import Impedance from "@/components/Impedance"
  import DataBackup from "@/components/DataBackup"
  export default {
    components:{
      NetTransport,
      CompanyInfo,
      Language,
      Printer,
      PrinterPosition,
      SystemTime,
      Weight,
      Touch,
      Newsletter,
      DataExport,
      Impedance,
      DataBackup
    },

    computed:{
      systemsettitle(){
        return this.$store.state.systemset;
      },
      funtitle() {
        return this.$store.state.systemmsgSet[this.$store.state.id];
      },
      funcName(){
        return this.$store.state.funcName;
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
  .vue-info{
    background:#2b313f;
    color:#fff;
  }
  .head{
    height:16vh;
    line-height: 16vh;
    background:#383F53;
    font-size:32px;
  }
  .middle{
    height:68vh;
  }
  .bottom{
    position:relative;
    bottom:8vh;
  }
  .bottom a{
    float:left;
    margin:10vh 0 0 10vw;
    display: block;
    width:8.7vw;
    height:7vh;
    line-height: 7vh;
    color:#fff;
    font-size: 1.6vw;
    background: #4A90E2;
    border-radius: 100px;
  }
  .bottom a i{
    text-align: center;
  }
  .bottom a:nth-child(2){
    width:10.7vw;
    margin-left: 50vw;
  }
</style>
