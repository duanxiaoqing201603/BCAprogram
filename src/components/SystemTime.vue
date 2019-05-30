<template>
  <div class="Systime">
    <div>
      <span class="time">日期(D)</span>
      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </div>
    <div>
      <span class="time">时间(T)</span>
      <el-time-select
        v-model="value1"
        :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
        placeholder="选择时间">
      </el-time-select>
    </div>
    <el-button type="primary">确定</el-button>
  </div>
</template>
<script>
  export default {
    name:"SystemTime",
    data(){
      return {
        value1: '',
        value2: '',
      };
    }
  }
</script>
<style>
  .Systime{
    padding-top:10vh;
    text-align: left;
  }
  .Systime > div{
    float: left;
    margin-left: 20vw;
  }

  .Systime .time{
    display:block;
    margin-bottom: 3vh;
  }
  .Systime .el-button{
    margin: 45vh 0 50vw 0;
  }
</style>
