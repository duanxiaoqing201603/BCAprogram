<template>
  <div class="DataExport">
    <div class="Export-bottom">
      <p>请选择备份目录：</p>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button class="add" type="primary">...</el-button>
      <el-button type="primary">备份</el-button>
    </div>
    <div class="Export-bottom">
      <p>请选择库文件目录：</p>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button class="add" type="primary">...</el-button>
      <el-button type="primary">恢复</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name:"DataExport",
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
  .DataExport{
    width:60%;
    margin:0 auto;
    padding-top: 2vh;
  }
  .DataExport p{
    display:inline-block;
    text-align: right;
    width:14vw;
    font-size: 1.5vw;
  }
  .DataExport .Export-bottom{
    width:100%;
    margin:3vh auto;
    text-align: left;
  }
  .DataExport .el-input__inner{
    height:6.5vh;
  }
  .DataExport .el-button:nth-of-type(1){
    width:5vw;
    margin:0 1vw;
  }
  .DataExport .el-button{
    height:6.5vh;
  }
</style>
