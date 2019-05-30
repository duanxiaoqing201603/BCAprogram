<template>
  <div class="Weight">
    <dl>
      <dt>标定重量一，请放置50KG的砝码：</dt>
      <dd><el-input v-model="Num1" size="medium" type="number" :max="99999999"/></dd>
      <dt>标定重量一，请放置100KG的砝码：</dt>
      <dd><el-input v-model="Num1" size="medium" type="number" :max="99999999"/></dd>
      <dt>标定重量一，请放置150KG的砝码：</dt>
      <dd><el-input v-model="Num1" size="medium" type="number" :max="99999999"/></dd>
    </dl>
    <el-button type="primary">确定</el-button>
  </div>
</template>
<script>
  export default {
    name:"Weight",
    data(){
      return {
        Num1:''
      }
    }
  }
</script>
<style>
  .Weight{
    width:70%;
    margin:0 auto;
    text-align: left;
    padding-top: 5vh;
    font-size: 1.5vw;
  }
  .Weight .el-input::-webkit-outer-spin-button,
  .Weight .el-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .Weight .el-input[type="number"]{
    -moz-appearance: textfield;
  }
  .Weight dt{
    display: inline-block;
    width:27vw;
    text-align: right;
    margin:0 0 3vh 5vw;
  }
  .Weight dd{
    display: inline-block;
    width:12vw;
    margin-bottom: 3vh;
  }
  .Weight .el-button{
    margin: 28vh 0 0 50vw;
  }
</style>
