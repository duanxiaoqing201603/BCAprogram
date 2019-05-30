<template>
  <div class="Pripos">
    <div class="position">
      <p>位置调整：</p>
      <dl>
        <dt>水平偏移(H)：</dt>
        <dd><el-input v-model="level" size="medium" type="number" :max="99999999"></el-input></dd>
        <dt>垂直偏移(V)：</dt>
        <dd><el-input v-model="vertical" placeholder="请输入内容"/> </dd>
      </dl>
    </div>
    <div class="position">
      <p>方向调整：</p>
      <dl>
        <dt>水平偏移(H)：</dt>
        <dd><el-input v-model="direction" size="medium" type="number" :max="99999999">°</el-input></dd>

      </dl>
    </div>
  </div>
</template>
<script>
  export default {
    name:"PrinterPosition",
    data(){
      return {
        level:'0.1mm',
        vertical:'0.0mm',
        direction:'1°'
      }
    }
  }
</script>
<style>
  .Pripos{
    width:80%;
    margin:0 auto;
    padding-top:2vh;
    text-align: left;
    font-size: 1.6vw;
  }
  .Pripos .el-input::-webkit-outer-spin-button,
  .Pripos .el-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .Pripos .el-input[type="number"]{
    -moz-appearance: textfield;
  }

  .Pripos .position{
    display: inline-block;
    width:45%;
    height:20vh;
    vertical-align: top;
  }
  .Pripos dt,.Pripos dd{
    display: inline-block;
    margin-bottom: 2vh;
  }
  .Pripos p{
    margin-left:5vw;
    width:10vw;
  }
  .Pripos dt{
    margin-left: 5vw;
    width:10.5vw;
  }
  .Pripos dd{
    width:12vw;
  }
  .Pripos dl{
    width:100%;
    margin-top:3vh;
  }
  .Pripos .el-input__inner{
    border:none;
    background: #383F53;
    border-radius:8px;
    color:#fff;
    font-size:1.5vw ;
  }
</style>
