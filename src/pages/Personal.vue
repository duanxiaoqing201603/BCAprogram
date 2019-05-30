<template>
  <div class="PersonList">
    <div class="list-head">
      <dl class="logo">
        <dt></dt><dd>人员列表</dd>
      </dl>
      <div class="search">
        <el-input id="checkVal" v-model="query" placeholder="输入编号或姓名"/>
        <el-button type="primary" @click="check">编号查询</el-button>
        <el-button type="primary" @click="check">姓名查询</el-button>
      </div>
    </div>
    <div class="list-mid">
      <div class="checkboxList">
        <el-checkbox-group v-model="checkList" v-for="(item,index) in infoList" :key="index">
          <el-checkbox :label=index+1></el-checkbox>
        </el-checkbox-group>
      </div>
      <h2><span>编号</span><span>姓名</span><span>性别</span><span>年龄</span><span>身高</span></h2>
      <ul class="infoList" v-for="item in infoList">
        <li><span>{{item.UID}}</span><span>{{item.Name}}</span><span>{{item.Sex}}</span><span>{{new Date().getFullYear()-item.BirthYear}}</span><span>{{item.Height}}.0</span></li>
      </ul>
    </div>
    <div class="list-bottom">
      <el-button type="primary" @click="goHome"><i class="fa fa-home"></i> 主页</el-button>
      <!--<el-button type="primary"><i class="el-icon-time"></i> 查记录</el-button>-->
      <el-button type="warning" @click="goNew"><i class="el-icon-document"></i> 新建</el-button>
      <el-button type="primary"><i class="el-icon-edit"></i> 测试</el-button>
      <el-button type="primary"><i class="el-icon-plus"></i> 批量导入</el-button>
      <el-button type="danger" @click="deleteItem"><i class="el-icon-delete"></i> 删除</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        data:'',
        query:'',
        checkList:[1,3],
        infoList:''
      }
    },
    created:function(){
      var _this=this;
      this.$axios.get('/personQuery').then(res=>{
        // 响应成功回调
        _this.infoList=res.data;
      }, res=>{
        // 响应错误回调
      });
    },
    computed:{

    },
    methods:{
      goHome(){
        this.$router.push("/");
      },
      check(){
        var _this=this;
        var inputVal=document.getElementById("checkVal").value;
        return this.$axios.get('/personQuery',{params:{searchInfo:inputVal}}).then(res=>{
          _this.infoList=res.data;
        },res=>{
          console.log("Personal failed");
        });
      },
      deleteItem(){
        console.log(this.checkList);
      },
      goNew(){
        this.$router.push('/Check');
      }
    }
  }

</script>
<style>
  .PersonList{
    background:#2b313f;
    color:#fff;
    text-align: left;
  }
  .PersonList .el-button{
    border-radius:100px;
  }
  .PersonList .list-head{
    height:16vh;
    background:#383F53;
    font-size:32px;
    overflow: hidden;
  }
  .PersonList .list-mid{
    position: relative;
    height:64.5vh;
    padding:3vh 6vw;
  }
  .PersonList .list-bottom{
    height:13vh;
    position:relative;
    bottom:0;
    padding:5vh 0 0 7vw;
  }
  .PersonList .logo{
    padding-left: 3vw;
    width:30%;
    height:16vh;
    line-height: 16vh;
    float:left;
  }
  .PersonList .logo dt{
    width:6.7vmin;
    height:6.5vh;
    margin-right: 2vw;
    background:url("../assets/img/listicon.png");
  }
  .PersonList .logo dt,.PersonList .logo dd{
    display: inline-block;
    vertical-align: middle;
  }
  .PersonList .search{
    width:65%;
    text-align: right;
    height:16vh;
    /*line-height: 16vh;*/
    float:left;
    position:relative;
  }
  .PersonList .search .el-input{
    width:50vw;
    height:7vh;
    position:absolute;
    top:50%;
    margin-top: -3.5vh;
    right:0;
  }
  .PersonList .search .el-input__inner{
    background:#fff;
    border-radius:100px;
    width:100%;
    height:100%;
    font-size: 1.5vw;
    color:#B3C5D3;
  }
  .PersonList .search .el-button{
    position:absolute;
    width:11vw;
    height:6vh;
    top:50%;
    right:0.5vw;
    margin-top: -3vh;
    line-height: 0;
  }
  .PersonList .search .el-button:nth-of-type(1){
    right:12vw;
  }
  .PersonList .infoList .el-checkbox__label{
    display:none;
  }
  .PersonList .list-mid h2{
    padding-left: 7vw;
    width:80vw;
    height:10vh;
    line-height: 10vh;
    font-size: 1.6vw;
    font-weight: normal;
  }
  .PersonList .list-mid h2 span{
    display: inline-block;
    width:15vw;
    height:10vh;
    text-align: center;
  }
  .PersonList .el-checkbox__label{
    display: none;
  }
  .PersonList .el-checkbox__inner{
    border-radius: 100%;
  }
  .PersonList .checkboxList{
    width:3vmin;
    position: absolute;
    top:12vh;
    left:8vw;
  }
  .PersonList .checkboxList .el-checkbox{
    width:4vmin;
    height:4vmin;
    margin: 1.5vmin 0 1.5vmin 0;
  }
  .PersonList .checkboxList .el-checkbox__inner{
    width:4vmin;
    height:4vmin;
  }
  .PersonList .checkboxList .el-checkbox__inner::after{
    display:none;
  }
  .PersonList .infoList {
    padding-left: 5vw;
  }
  .PersonList .infoList li{
    padding-left: 2vw;
    width:76vw;
    background: #383F53;
    border-radius: 100px;
    line-height: 5vh;
    height:5vh;
    margin-bottom:2vh;
  }
  .PersonList .infoList li span{
    display: inline-block;
    width:15vw;
    text-align: center;
  }
  .PersonList .list-bottom .el-button{
    font-size: 3vmin;
    width:17.2vmin;

  }
  .PersonList .list-bottom .el-button-inner{
    line-height: 6.5vh;
    height:6.5vh;
  }
/*  .PersonList .list-bottom .el-button:nth-of-type(2){
    width:21vmin;

  }*/
  .PersonList .list-bottom .el-button:nth-of-type(2){
    margin-left: 30vw;
  }

  .PersonList .list-bottom .el-button:nth-of-type(4){
    width:23.2vmin;
  }
</style>
