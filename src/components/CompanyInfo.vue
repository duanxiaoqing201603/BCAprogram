<template>
  <div class="CompanyInfo">
    <ul>
      <li>
        <label for="company_name">单位名称：</label>
        <el-input id="company_name" v-model="company_name" placeholder="请输入单位名称" clearable></el-input>
        <span>单位名称可打印在报告上</span>
      </li>
      <li>
        <label for="company_tel">单位电话：</label>
        <el-input id="company_tel" v-model="company_tel" placeholder="请输入单位电话" clearable>22222</el-input>
        <span>单位电话可打印在报告上</span>
      </li>
      <li>
        <label for="company_code">单位编码：</label>
        <el-input id="company_code" v-model="company_code" placeholder="请输入单位编码"></el-input>
        <span>单位名称可打印在报告上</span>
      </li>
      <li>
        <label for="company_num">仪器序列号：</label>
        <el-input id="company_num" v-model="company_num" placeholder="请输入仪器序列号"></el-input>
        <span>单位名称可打印在报告上</span>
      </li>
    </ul>
    <el-button type="primary" @click="submit">确定</el-button>
  </div>
</template>
<script>
  export default {
    name:"CompanyInfo",
    data(){
      return {
        company_name:'222',
        company_tel:'',
        company_code:'',
        company_num:''
      }
    },
    mounted(){
      var _this=this;
      this.$axios.get('/systemDefault').then(res=>{
        _this.company_name=res.data.UnitName;
        _this.company_tel=res.data.UnitPhone;
        _this.company_code=res.data.UUID;
        _this.company_num=res.data.DeviceID;
      })
    },
    methods:{
      submit(){
        var _this=this;
        this.$axios.post('/setUnitInfo',{
          unitName:_this.company_name,
          unitPhone:_this.company_tel,
          uuid:_this.company_code,
          deviceID:_this.company_num
        }).then(res=>{
          this.$alert('修改成功','提示',{
            confirmButtonText:'确定'
          })
        })
      }
    }
  }
</script>
<style>
  .CompanyInfo{
    text-align: center;
    font-family: PingFangSC-Regular;
  }
  .CompanyInfo ul, .CompanyInfo li{
    list-style: none;
    font-size: 1rem;
    color:#fff;
  }
  .CompanyInfo ul{
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0;
    padding-top: 3vh;

  }
  .CompanyInfo ul li{
    margin:1.5vh;
    height:11.5vh;
    font-size: 24px;
  }
  label{
    display:inline-block;
    width:12%;
    text-align: right;
    margin-right:12px;
  }
  .CompanyInfo .el-input{
    width:45%;

  }
  .CompanyInfo ul li span{
    display:block;
    margin:5px 0 0  35vw;
    text-align: left;
  }
  .CompanyInfo .el-button{
    width:9vw;
    height:7vh;
    font-size: 24px;
    border-radius:8px;
    margin-left: 46vw;
  }
</style>
