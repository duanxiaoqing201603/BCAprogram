<template>
  <div class="Tester">
    <div class="tester-head">
      <dl class="logo">
        <dt></dt><dd>测试人员信息</dd>
      </dl>
    </div>
    <div class="testerInfo-mid">

        <dl>
          <dt>编号：</dt><dd>{{UID}}</dd>
        </dl>
        <dl>
          <dt>姓名：</dt><dd>{{name}}</dd>
        </dl>
        <dl>
          <dt>性别：</dt><dd>{{sex}}</dd>
        </dl>
        <dl>
          <dt>年龄：</dt><dd>{{age}}</dd>
        </dl>
        <dl>
          <dt>身高：</dt><dd>{{height}}</dd>
        </dl>
        <dl>
          <dt>备注：</dt><dd>{{remark}}</dd>
        </dl>
        <dl>
          <dt>服装重量：</dt><dd>{{clothes}}</dd>
        </dl>

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
        UID:'1390003522',
        name:'刘静',
        sex:'女',
        age:'23',
        height:'160',
        remark:'术后',
        clothes:'0.5KG'
      }
    },
    mounted(){
      var item=this.$store.state.inputItem;
      this.UID=item.UID;
      this.name=item.name;
      this.sex=item.sex;
      this.age=item.age;
      this.height=item.height;
      this.remark=item.remark;
      this.clothes=item.clothes;
    },
    methods:{
      goBack() {
        this.$router.go(-1);
      },
      goNext(){
        this.$router.push("/Testguide");
      }
    }
  }
</script>
<style>
  .Tester .testerInfo-mid {
    padding:6vh 2vw;
    width:60vw;
    height:52.5vh;
    margin:3vh auto;
    background: #383F53;
    border-radius: 8px;
  }

  .Tester dt,.Tester dd{
    display: inline-block;
    height:6vh;
    line-height: 6vh;
  }
  .Tester .testerInfo-mid dt{
    width:48%;
    text-align: right;
    margin-right: 1vw;
  }
  .Tester .testerInfo-mid dd{
    width:42%;
  }
  .Tester .el-button:nth-of-type(2){
    margin-left: 60vw;
  }
</style>
