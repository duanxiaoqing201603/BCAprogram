<template>
  <div class="vue-info">
    <div class="head">
      <i class="fa fa-cog">  {{systemtitle}}</i>
    </div>
    <div class="bg-line"></div>
    <div class="middle">
      <ul>
        <li v-for="(item,index) in systemmessage" @click="info(index)">{{systemmessage[index]}}</li>
      </ul>
    </div>
    <div class="bottom">
      <router-link to="/"><i class="fa fa-home"></i> 主页</router-link>
    </div>
  </div>
</template>
<script>
  export default {
   /* props:{
      info:Object
    },*/
    /*data(){
    },*/

    computed:{
      systemtitle(){
        this.$store.state.systemset=this.$route.path==="/Systemset"?"系统设置":"系统维护";
        return this.$store.state.systemset;
      },
      systemmessage(){
        this.$store.state.systemmsgSet=this.$route.path==="/Systemset"? ['网络与传输', '单位信息', '语言/度量衡', '打印机', '打印机位置调整', '系统时间']:['体重标定','触摸校准','通讯检测','数据导出','查看阻抗','数据库备份'];
        return this.$store.state.systemmsgSet;
      }
    },
    methods:{
      info(index){
        var funcName='';
        if(this.$route.path==="/Systemset") {
          switch (index) {
            case 0:
              funcName = "NetTransport";
              break;
            case 1:
              funcName = "CompanyInfo";
              break;
            case 2:
              funcName = "Language";
              break;
            case 3:
              funcName = "Printer";
              break;
            case 4:
              funcName = "PrinterPosition";
              break;
            case 5:
              funcName = "SystemTime";
              break;
          }
        }
          if(this.$route.path==="/Systemrepair"){
            switch (index) {
              case 0:
                funcName="Weight";
                break;
              case 1:
                funcName="Touch";
                break;
              case 2:
                funcName="Newsletter";
                break;
              case 3:
                funcName="DataExport";
                break;
              case 4:
                funcName="Impedance";
                break;
              case 5:
                funcName="DataBackup";
                break;
            }
        }
        this.$store.state.funcName=funcName;
        //this.$router.push({path:'/SystemFunc/:id',query:{id:index}});
        this.$store.state.id=index;
        this.$route.path==="/Systemset"?this.$router.push("/Systemset/"+funcName):this.$router.push("/Systemrepair/"+funcName)
      }
    }
  }
</script>
<style scoped>
  .vue-info{
    background:#09182B;
  }
  .head{
    padding-left: 3vw;
    height:13.8vh;
    line-height: 13.8vh;
    background: rgba(74, 144, 224, 0.47);
    text-align: left;

    font-size: 32px;
  }
  .head i{
    color:#ffffff;
  }
  .bg-line{
    height:1.8vh;
    width:100%;
    opacity: 0.15;
    background: #4A90E2;
  }
  .middle ul{
    width:100%;
    list-style: none;
    margin: 12vh 0 10vh 12vw;

  }
  .middle ul li{
    background:url("../assets/img/func_button.png");
    background-size:100% 100%;
    float:left;
    width:23vw;
    height:21vh;
    margin:0 3vw 5vh 0;
    text-align: center;
    line-height: 21vh;
    font-size: 28px;
    color:#fff;
    cursor:pointer;
  }
  .bottom{
    margin:65vh 0 0 10vw;

  }
  .bottom a{
    display: block;
    width:10.7vw;
    height:7vh;
    line-height: 7vh;
    color:#fff;
    font-size: 24px;
    background: #4A90E2;
    border-radius: 100px;
  }
  .bottom a i{
    text-align: center;
  }
</style>
