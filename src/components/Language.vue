<template>
  <div class="Language">
    <div class="Lan-left">
      <span>单位名称：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="Lan-right">
      <span>请选择度量衡</span>
      <el-radio v-model="unit" label="1">公制</el-radio>
      <el-radio v-model="unit" label="2">英制</el-radio>
    </div>
    <el-button type="primary">确定</el-button>
  </div>
</template>
<script>
  export default {
    name:"Language",
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
        unit:'2'
      }
    }
  }
</script>
<style>
  .Language{
    padding-top: 10vh;
    font-size: 1.6vw;
    height:50%;
  }
  .Lan-left,.Lan-right{
    width:50%;
    float:left;
  }
  .Language .el-select{
    width:15vw;
  }
  .Lan-right .el-radio{
    font-size: 1.6vw;
  }
  .Lan-right  .el-radio__label,.Lan-right  .el-radio__inner{
    font-size: 1.6vw;

  }
  .Language .el-button{
    margin-top: 40vh;
  }
</style>
