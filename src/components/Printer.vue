<template>
  <div class="Print">
    <dl class="Pri-top">
      <dt class="info">查看连接的打印机：</dt>
      <dd class="print-info">111</dd>
      <dt class="info"> 已安装的打印机：</dt>
      <dd class="print-info">222</dd>
    </dl>
    <div class="Pri-bottom">
        <p>选择打印机型号：</p>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button class="add" type="primary">添加</el-button>
        <el-button type="primary">重启打印机服务</el-button>
    </div>
    <div class="Pri-bottom">
        <p>打印机模式：</p>
        <el-select v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button class="add" type="primary">确定</el-button>
        <el-button type="primary">打印机测试页</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Printer",
    data(){
      return {
        options: [{
          value: '选项1',
          label: '简体中文'
        }, {
          value: '选项2',
          label: 'English'
        }, {
          value: '选项3',
          label: 'German'
        }, {
          value: '选项4',
          label: 'SPanish'
        }, {
          value: '选项5',
          label: 'French'
        }],
        value: '',
        options1: [{
          value1: '选项1',
          label: '简体中文'
        }, {
          value1: '选项2',
          label: 'English'
        }, {
          value1: '选项3',
          label: 'German'
        }, {
          value1: '选项4',
          label: 'SPanish'
        }, {
          value1: '选项5',
          label: 'French'
        }],
        value1: ''
      }
    }
  }
</script>
<style>
  .Print{
    padding-top: 2vh;
    font-size: 1.6vw;
    width: 90%;
    margin:0 auto;
  }
  .Print .Pri-top,.Print .Pri-bottom{
    width:100%;
    margin: 3vh auto;
    text-align: left;
  }
  .Print dl dt,.Print dl dd{
    display: inline-block;
  }
  .Print dl dt{
    width:15vw;
    text-align: right;
  }
  .Print dl dd{
    width:23vw;
    height:34vh;
    background:#383F53;
    text-align: left;
    border-radius:8px;
    padding:0.5vw;
    margin-right: 5px;
  }
  .Print .el-input__inner{
    width:24vw;
    height:6.5vh;
  }
  .Print p{
    display: inline-block;
    text-align: right;
    width:15vw;
    /*margin-left:-20vw;*/
  }
  .Print .el-button:nth-of-type(1){
    margin:0 3vw;
  }
  .Print .el-button:nth-of-type(2){
    width:15vw;
  }
</style>
