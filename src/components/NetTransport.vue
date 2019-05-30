<template>
  <div class="internet">
    <div class="left">
      <div class="left-top">
        <span>传输模式：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="left-bottom">
        <span>服务网址：</span><el-input v-model="url" placeholder="请输入内容"/>
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <el-radio v-model="DNS" label="1">自动获取DNS服务器地址(B)</el-radio><br/>
        <el-radio v-model="DNS" label="2">使用下面的DNS服务器地址(E)</el-radio><br/>
        <span class="span_sel">首选DNS服务器(P)：</span><el-input v-model="firServer" placeholder="请输入内容"/><br/>
        <span class="span_sel">备选DNS服务器(A)：</span><el-input v-model="secServer" placeholder="请输入内容"/>
      </div>
      <div class="right-bottom">
        <el-radio v-model="IP" label="1">自动获取IP地址(O)</el-radio><br/>
        <el-radio v-model="IP" label="2">使用下面的IP地址(S)</el-radio><br/>
        <span class="span_sel spanIP">IP地址(I) ： </span><el-input v-model="IPadd" placeholder="请输入内容"/><br/>
        <span class="span_sel">子网掩码(U)：</span><el-input v-model="yanma" placeholder="请输入内容"/><br/>
        <span class="span_sel">默认网关(D)：</span><el-input v-model="port" placeholder="请输入内容"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "NetTransport",
    data () {
      return{
        options: [{
          value: '选项1',
          label: '自动上传'
        }, {
          value: '选项2',
          label: '手动上传'
        }],
        value: '',
        url:'https://192.168.1.13:3000',
        DNS:"2",
        IP:"1",
        IPadd:'193.168.12.1',
        yanma:'44.36.22.0',
        port:'255.0.0.0',
        firServer:'255.255.255.0',
        secServer:'111.12.203.31'
      }
    }
  }
</script>
<style>
  .internet{
    padding-top: 7vh;
  }
  .internet .left, .internet .right{
    width:50%;
    float:left;
    text-align: left;
    /*line-height: 6.5vh;*/
  }

  .internet .left-top,.internet .left-bottom {
    margin-left: 7vw;
  }
  .internet .left-bottom{
    margin-top: 3vh;
  }
  .internet .el-input{
    width:24vw;
    height:6vh;
  }

  .internet .left .el-input__inner{
    font-size: 1rem;
  }
  .internet .left-bottom .el-input{
    margin-left: 5px;
  }
  .internet .right .el-input{
    width:12vw;
    margin-top: 1vh;
  }
  .internet .right .span_sel{
    height:6vh;
    margin-right: 5vw;
  }
  .internet .right-bottom .span_sel{
    margin-right: 8vw;
  }
  .internet .right-bottom .spanIP{
    margin-right: 9vw;
  }
  .internet .el-radio{
    height:6vh;
    line-height: 6vh;
  }
  .internet .el-radio__label{
    font-size: 1rem;
  }
</style>
