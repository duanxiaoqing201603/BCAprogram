<template>
  <div class="Tester">
    <div class="tester-head">
      <dl class="logo">
        <dt></dt><dd>测试人员信息</dd>
      </dl>
    </div>
    <div class="tester-mid">
      <p>编号：</p><el-input v-model="UID" placeholder="格式:DEMO-XXX"></el-input>
      <p>姓名：</p><el-input v-model="name"></el-input>
      <p>性别：</p><el-radio v-model="sex" label="1">男</el-radio><el-radio v-model="sex" label="2">女</el-radio><br/>
      <p>年龄：</p><el-input v-model="age"></el-input>
      <p>身高：</p><el-input v-model="height"></el-input>
      <p>备注：</p><el-input v-model="remark"></el-input>
      <p>服装重量：</p><el-input v-model="clothes"></el-input>
    </div>
    <div class="tester-bottom">
      <el-button type="primary" @click="goBack"><i class="el-icon-arrow-left"></i> 返回</el-button>
      <el-button type="primary" @click="goNext">下一步 <i class="el-icon-arrow-right"></i></el-button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        UID:'',
        name:'',
        sex:'1',
        age:'',
        height:'',
        remark:'',
        clothes:''
      }
    },
    methods:{
      goBack() {
        this.$router.go(-1);
      },
      goNext(){
        if(!this.UID){
          this.$alert("编号不能为空",'提示',{
            confirmButtonText:'确定'
          })
          return;
        }
        if(!this.name){
          this.$alert("姓名不能为空",'提示',{
            confirmButtonText:'确定'
          })
          return;
        }
        if(!this.age){
          this.$alert("年龄不能为空",'提示',{
            confirmButtonText:'确定'
          })
          return;
        }
        if(!this.height){
          this.$alert("身高不能为空",'提示',{
            confirmButtonText:'确定'
          })
          return;
        }
        if(!this.remark){
          this.$alert("备注不能为空",'提示',{
            confirmButtonText:'确定'
          })
          return;
        }
        if(!this.clothes){
          this.$alert("服装重量不能为空",'提示',{
            confirmButtonText:'确定'
          })
          return;
        }
        this.$store.state.inputItem={'UID':this.UID,'name':this.name,'sex':this.sex,'age':this.age,'height':this.height,'remark':this.remark,'clothes':this.clothes};
        this.$router.push('/confirm');
      }
    }
  }
</script>
<style>
  .Tester{
    background:#2b313f;
    color:#fff;
    text-align: left;
    font-size: 1.55vw;
  }
  .Tester .tester-head{
    height:16vh;
    line-height: 16vh;
    background:#383F53;
    font-size:32px;
    overflow: hidden;
    padding-left: 3vw;
  }
  .Tester .tester-mid{
    height:64.5vh;
    padding:3vh 6vw;
  }
  .Tester .tester-bottom{
    height:13vh;
    position:relative;
    bottom:0;
    padding:5vh 0 0 7vw;
  }
  .Tester .tester-head dt{
    width:6.7vmin;
    height:6.5vh;
    margin-right: 2vw;
    background:url("../assets/img/listicon.png");
  }
  .Tester .tester-head dt,.Tester .tester-head dd{
    display: inline-block;
    vertical-align:middle;
  }
  .Tester .tester-mid{
    width:70%;
    margin:0 auto;
  }
  .Tester .tester-bottom{
    height:13vh;
    position:relative;
    bottom:0;
    padding:5vh 0 0 7vw;
  }
  .Tester p{
    display: inline-block;
    width:10vw;
    text-align: right;
    margin-right: 1vw;
    height:5vh;
    line-height: 5vh;
  }
  .Tester .el-radio{
    width:5vw;
    height:6vh;
    line-height: 6vh;
    margin-bottom:2.5vh;
  }
  .Tester .el-radio__inner{
    width:4vmin;
    height:4vmin;
  }
  .Tester .el-radio__label{
    font-size: 1.5vw;
  }
  .Tester .el-radio__inner::after{
    display:none;
  }
  .Tester .el-input{
    width:54vw;
    height:8vh;
  }
  .Tester .el-button{
    border-radius:100px;
    width:17.2vmin;
  }
  .Tester .el-button:nth-of-type(2){
    margin-left: 60vw;
  }
</style>
