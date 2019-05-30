<template>
  <div class="Tester">
    <div class="guide-head">
      <dl>
        <dt>请赤脚站在测试仪上，双手握住手柄，保持电极良好接触，双臂伸直，张开30°，不要乱动和说话。</dt>
        <dd></dd>
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
    methods:{
      goBack() {
        return this.$router.go(-1);
      },
      goNext(){
        return this.$router.push('/Testing');
      }
    }
  }
</script>
<style>
  .Tester .guide-head{
    height:86.5vh;
  }
  .Tester .guide-head dl{
    width:100%;
    height:100%;
  }
  .Tester .guide-head dt,.Tester .guide-head dd{
    display:inline-block;
    vertical-align: top;
  }
  .Tester .guide-head dt{
    padding-top: 25vh;
    height:80.2vh;
    width:25vw;
    margin:0 10vw 0 16.7vw;
  }
  .Tester .guide-head dd{
    margin-top: 2vh;
    background:url("../assets/img/woman.png") no-repeat;
    background-size: 100% 100%;
    width:22vw;
    height:80.2vh;
  }
  .Tester .tester-bottom{
    height:13vh;
    position:relative;
    bottom:0;
    padding:5vh 0 0 7vw;
  }
  .Tester .el-button{
    border-radius:100px;
    width:17.2vmin;
  }
  .Tester .el-button:nth-of-type(2){
    margin-left: 60vw;
  }
</style>
