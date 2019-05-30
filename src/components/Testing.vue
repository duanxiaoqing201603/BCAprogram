<template>
  <div class="Testing">
    <div class="testing-head">
    </div>
    <div class="testing-middle">
      <h3>正在测试中，请稍候...</h3>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="20"></el-progress>
    </div>
    <div class="tester-bottom">
      <el-button type="primary" @click="goBack"><i class="el-icon-arrow-left"></i> 返回</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style>
  .Testing{
    background:#2b313f;
    color:#fff;
    text-align: left;
    font-size: 1.55vw;
    padding-top: 10vh;
  }
  .Testing .testing-head{
    background:url("../assets/img/testing.png") no-repeat;
    background-size:100% 100%;
    margin:0 auto;
    width:19vw;
    height:40vh;
  }
  .Testing .testing-middle{
    height:30.5vh;
    width:65.6vw;
    margin:3vh auto;
  }
  .Testing .testing-middle h3{
    margin-bottom: 2vh;
  }
  .Testing .testing-middle .el-progress-bar{
    width:65.6vw;
    height:6vh;
  }
  .Testing .testing-middle .el-progress-bar__outer {
    background: #242527;
    width:65.6vw;
    height:6vh !important;
    border-radius: 6px;
  }
  .Testing .testing-middle .el-progress-bar__inner{
    border-radius: 6px;
  }
  .Testing .testing-middle .el-progress-bar__innerText{
    font-size:1.6vw ;
  }
  .Testing .tester-bottom{
    height:13vh;
    position:relative;
    bottom:0;
    padding:5vh 0 0 7vw;
  }
  .Testing .el-button {
    border-radius: 100px;
    width: 17.2vmin;
  }
</style>
