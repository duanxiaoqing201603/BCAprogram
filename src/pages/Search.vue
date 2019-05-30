<template>
  <div class="Search">
    <div class="list-head">
      <dl class="logo">
        <dt></dt><dd>数据列表</dd>
      </dl>
      <div class="searchBox">
        <el-input class="number" id="number" v-model="query" placeholder="输入编号"/>
        <el-button type="primary" @click="check($event)">编号查询</el-button>
        <el-date-picker class="date start" id="startTime"
          v-model="value1"
          align="right"
          type="date"
          placeholder="开始日期"
        >
        </el-date-picker>
        <h4>至</h4>
        <el-date-picker class="date end" id="endTime"
          v-model="value2"
          align="right"
          type="date"
          placeholder="结束日期"
        >
        </el-date-picker>
        <el-button class="date_btn" type="primary" @click="check($event)">日期查询</el-button>
      </div>
    </div>
    <div class="list-mid">
      <div class="checkboxList">
        <el-checkbox-group v-model="checkList" v-for="(item,index) in infoList" :key="index" >
          <el-checkbox :label=item.ID></el-checkbox>
        </el-checkbox-group>
      </div>
      <h2><span>编号</span><span>测试时间</span><span>体重</span><span>脂肪</span><span>水分</span><span>蛋白质</span><span>骨骼</span></h2>
      <ul class="infoList" v-for="(item,index) in infoList">
        <li><span>{{item.UID}}</span><span>{{item.TestDate}}</span><span>{{item.Weight}}</span><span>{{item.Fat}}</span><span>{{item.Water}}</span><span>{{item.Protein}}</span><span>{{item.Bone}}</span></li>
      </ul>
    </div>
    <div class="list-bottom">
      <el-button type="primary" @click="goHome"><i class="fa fa-home"></i> 主页</el-button>
      <el-button type="primary" @click="goRecord"><i class="el-icon-time"></i> 浏览记录</el-button>
      <el-button type="primary" @click="selectAll">{{selAll}}</el-button>
      <el-button type="primary" @click="deleteOne">删除</el-button>
      <el-button type="primary"><i class="el-icon-caret-top"></i> 上一页</el-button>
      <el-button type="primary"><i class="el-icon-caret-bottom"></i> 下一页</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        value1:'',
        value2:'',
        query:'',
        checkList:[],
        infoList:'',
        selAll:'全选'
      }
    },
    created:function(){
      //var _this=this;
      this.$axios.get("/dataQuery").then(res=>{
        this.infoList=res.data;
      },res=>{
        console.log('failed',res.data);
      })
    },
    methods:{
      goHome(){
        this.$router.push("/");
      },
      goRecord(){
        var id=this.checkList[0];
        if(this.checkList.length!==1){
          this.$alert('请选择一条记录','提示',{
            confirmButtonText: '确定'
          });
          return;
        }
        this.$router.push("/Search/Record/"+id);
      },
      check(event){
        var number=document.getElementById("number").value;
        var startTime=document.getElementById("startTime").value;
        var endTime=document.getElementById("endTime").value;
        //var _this=this;
        var el = event.currentTarget.innerText;
        if(el==="编号查询" ){
          if(!number){
            this.$alert('请输入编号','提示',{
              confirmButtonText: '确定'
            });
            return;
          }
        }
        if(el==="日期查询") {
          if(!startTime){
            this.$alert('请输入开始日期','提示',{
              confirmButtonText: '确定'
            });
            return;
          }
          if(!endTime){
            this.$alert('请输入结束日期','提示',{
              confirmButtonText: '确定'
            });
            return;
          }
        }
        this.$axios.get('/dataQuery',{params:{
            searchInfo:number,
            startDate:startTime,
            endDate:endTime
          }
        }).then(res=>{
          this.infoList=res.data;
        },res=>{
          console.log("Search failed");
        })
      },
      selectAll(){
        if(this.checkList.length===this.infoList.length){
          this.checkList=[];
          this.selAll='全选';
          return
        }
        for(var i=0;i<this.infoList.length;i++){
          this.checkList.push(this.infoList[i].ID);
        }
        this.selAll='取消全选';
      },
      deleteOne(){
        var idList=[];
        if(this.checkList.length<=0){
          this.$alert('请选择一条记录','提示',{
            confirmButtonText: '确定'
          });
          return;
        }
        for(var i=0;i<this.checkList.length;i++){
          idList.push(this.checkList[i]);
        }

        this.$axios.post('/delData',{delList:idList}).then(res=>{
         //_this.checkList=[];
        },res=>{
          console.log("failed");
        })
      }
    }
  }

</script>
<style>
  .Search{
    background:#2b313f;
    color:#fff;
    text-align: left;
  }
  .Search .el-button{
    border-radius:100px;
  }
  .Search .list-head{
    height:16vh;
    background:#383F53;
    font-size:32px;
    overflow: hidden;
  }
  .Search .list-mid{
    position: relative;
    height:64.5vh;
    padding:3vh 6vw;
  }
  .Search .list-bottom{
    height:13vh;
    position:relative;
    bottom:0;
    padding:5vh 0 0 7vw;
  }
  .Search .logo{
    padding-left: 3vw;
    width:16%;
    height:16vh;
    line-height: 16vh;
    float:left;
  }
  .Search .logo dt{
    width:6.7vmin;
    height:6.5vh;
    margin-right: 2vw;
    background:url("../assets/img/listicon.png");
  }
  .Search .logo dt,.Search .logo dd{
    display: inline-block;
    vertical-align: middle;
  }
  .Search .searchBox{
    width:76%;
    text-align: right;
    height:16vh;
    /*line-height: 16vh;*/
    float:left;
    position:relative;
  }
  .Search .searchBox .number{
    width:32.5vw;
    height:7vh;
    position:absolute;
    top:50%;
    margin-top: -3.5vh;
    left:0;
  }
  .Search .searchBox .number .el-input__inner{
    background:#fff;
    border-radius:100px;
    width:100%;
    height:100%;
    font-size: 1.5vw;
    color:#B3C5D3;
  }
  .Search .date{
    height:7vh;
    position:absolute;
    top:50%;
    margin-top: -3.5vh;
  }
  .Search .start{
    left:33.5vw;
  }
  .Search .end{
    left:50vw;
  }
  .Search h4{
    font-weight: normal;
    height:0.3vh;
    line-height: 0.3vh;
    font-size: 1.3vw;
    position:absolute;
    top:50%;
    margin-top: -0.15vh;
    left:48vw;

  }
  .Search .date .el-input__inner{
    background:#fff;
    border-radius:8px;
    height:100%;
  }
 /* .Search .date .el-input__icon{
    display: none;
  }*/
  .Search .date .el-input__inner{
    color:#B3C5D3;
  }
  .Search .searchBox .el-button{
    position:absolute;
    width:11vw;
    height:6vh;
    top:50%;
    left:21vw;
    margin-top: -3vh;
    line-height: 0;
  }
  .Search .searchBox .date_btn{
    margin-top: -3.5vh;
    height:7vh;
    border-radius: 8px;
    left:65vw;
  }
  .Search .infoList .el-checkbox__label{
    display:none;
  }
  .Search .list-mid h2{
    padding-left: 8vw;
    width:76vw;
    height:10vh;
    line-height: 10vh;
    font-size: 1.6vw;
    font-weight: normal;
  }
  .Search .list-mid h2 span{
    display: inline-block;
    width:10.5vw;
    /*padding:0 2.8vw;*/
    height:10vh;
    text-align: center;
  }
  .Search .list-mid h2 span:nth-of-type(1){
    /*padding:0 4vw;*/
  }
  .Search .list-mid h2 span:nth-of-type(2){
    /*padding:0 4.8vw;*/
  }
  .Search .el-checkbox__label{
    display: none;
  }
  .Search .el-checkbox__inner{
    border-radius: 100%;
  }
  .Search .checkboxList{
    width:3vmin;
    position: absolute;
    top:12vh;
    left:8vw;
  }
  .Search .checkboxList .el-checkbox{
    width:4vmin;
    height:4vmin;
    margin: 1.5vmin 0 1.5vmin 0;
  }
  .Search .checkboxList .el-checkbox__inner{
    width:4vmin;
    height:4vmin;
  }
  .Search .checkboxList .el-checkbox__inner::after{
    display:none;
  }
  .Search .infoList {
    padding-left: 5vw;
  }
  .Search .infoList li{
    padding-left: 3vw;
    width:76vw;
    background: #383F53;
    border-radius: 100px;
    line-height: 5vh;
    height:5vh;
    margin-bottom:2vh;
  }
  .Search .infoList li span{
    display: inline-block;
    width:10.5vw;
    /*padding:0 3.8vw;*/
    text-align: center;
  }
  .Search .infoList li span:nth-of-type(1){
    /*padding:0 3vw;*/
    /*width:11vw;*/
  }
  .Search .infoList li span:nth-of-type(2){
    /*padding:0 3vw;*/
  }
  .Search .list-bottom .el-button{
    font-size: 3vmin;
    width:17.2vmin;
  }
  .Search .list-bottom .el-button:nth-of-type(2){
    width:22vmin;

  }
  .Search .list-bottom .el-button:nth-of-type(5){
    margin-left: 20vw;
  }

  .Search .list-bottom .el-button:nth-of-type(5),.Search .list-bottom .el-button:nth-of-type(6){
    width:22vmin;
  }
</style>
