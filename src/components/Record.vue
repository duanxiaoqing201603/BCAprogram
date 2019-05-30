<template>
  <div class="Record">
    <div class="Record-head">
      <h2><span>编号</span><span>姓名</span><span>性别</span><span>年龄</span><span>身高</span><span>体重</span></h2>
      <h2><span>{{dataList.UID}}</span><span>{{dataList.Name}}</span><span>{{dataList.Sex}}</span><span>{{new Date().getFullYear()-dataList.BirthYear}}</span><span>{{dataList.Height}}</span><span>{{dataList.Weight}}</span></h2>
    </div>
    <div class="Record-middle">
      <div class="Record-middle-top">
        <div class="top-left" id="bodyPart">
        </div>
        <div class="top-right">
          <ul>
            <li><span>节段成份(kg)</span><span>水分</span><span>脂肪</span><span>肌肉</span></li>
            <li><span>左上肢</span><span>{{dataList.LA_water}}</span><span>{{dataList.LA_fat}}</span><span>{{dataList.LA_muscle}}</span></li>
            <li><span>右上肢</span><span>{{dataList.RA_water}}</span><span>{{dataList.RA_fat}}</span><span>{{dataList.RA_muscle}}</span></li>
            <li><span>躯干</span><span>{{dataList.TR_water}}</span><span>{{dataList.TR_fat}}</span><span>{{dataList.TR_muscle}}</span></li>
            <li><span>左下肢</span><span>{{dataList.LL_water}}</span><span>{{dataList.LL_fat}}</span><span>{{dataList.LL_muscle}}</span></li>
            <li><span>左下肢</span><span>{{dataList.RL_water}}</span><span>{{dataList.RL_fat}}</span><span>{{dataList.RL_muscle}}</span></li>
          </ul>
        </div>
      </div>
      <div class="Record-middle-bottom">
        <div class="bottom-left">
          <div id="circle1">
          </div>
          <div id="circle2"></div>
        </div>
        <div class="bottom-mid">
          <dl>
            <dt>细胞内液(ECW)</dt><dt>26.7</dt>
            <dd><el-progress :text-inside="true" :stroke-width="18" :percentage="26.7"></el-progress></dd>
          </dl>
          <dl>
            <dt>细胞外液(ICW)</dt><dt>14.8</dt>
            <dd><el-progress :text-inside="true" :stroke-width="18" :percentage="14.8"></el-progress></dd>
          </dl>
          <dl>
            <dt>水肿系数(ICW)</dt><dt>0.66</dt>
            <dd><el-progress :text-inside="true" :stroke-width="18" :percentage="0.66"></el-progress></dd>
          </dl>
        </div>
        <div class="bottom-right">
          <h3>健康评分</h3>
          <p>{{dataList.Score}}</p>
          <p>{{new Date()}}</p>
        </div>
      </div>
    </div>
    <div class="Record-bottom">
      <el-button type="primary" @click="goHome"><i class="fa fa-home"></i> 主页</el-button>
      <el-button type="primary" @click="goBack"><i class="el-icon-time"></i> 全部记录</el-button>
      <el-button type="primary" @click="goCurve"><i class="el-icon-time"></i> 历史曲线</el-button>
      <el-button type="primary"><i class="el-icon-caret-bottom"></i> 打印</el-button>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data(){
      return {
        dataList:{},
        Water:0,
        Fat:0,
        Protein:0,
        Bone:0,
        Muscle:0,
        /*UID:this.$store.state.searchRecord.UID*/

      }
    },
    computed:{
      record(){
        return {
        }
      }
    },
    mounted() {
      var _this=this;
      this.$axios.get('/dataDetailInfo/'+this.$route.params.id).then(res=>{
        this.dataList=res.data[0];
        _this.Water=this.dataList.Water;
        _this.Fat=this.dataList.Fat;
        _this.Protein=this.dataList.Protein;
        _this.Bone=this.dataList.Bone;
        _this.Muscle=this.dataList.Muscle;
        this.drawChart();
      })
    },
    methods:{
      goHome(){
        this.$router.push("/");
      },
      goBack(){
        this.$router.go(-1);
      },
      goCurve(){
        this.$router.push("/Curve/"+this.dataList.UID);
      },
      drawChart(){
        let myChart=echarts.init(document.getElementById("bodyPart"));
        let option = {
          title: {
            text: '人体成分(KG)',
            textStyle:{
              color: '#fff',
              fontSize:24,
              fontWeight:'normal'
            },
            left:15,
            top:10
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            bottom:10,
            right:'4%',
            textStyle:{
              color:'#fff',
              fontSize:15
            },
            data: ['低标准', '正常','超标准']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            min: 0,
            max: 90,
            axisLabel:{
              color:'#fff',
              fontSize:15
            },
            axisLine:{
              lineStyle:{
                color:'#979797',
                width:3
              }
            },
          },
          yAxis: {
            type: 'category',
            axisLabel:{
              color:'#fff',
              fontSize:15,
            },
            axisLine:{
              lineStyle:{
                color:'#979797',
                width:3
              }
            },
            data: ['肌肉','骨质','蛋白质','脂肪','总水分']
          },
          series: [
            {
              name: '人体成分',
              type: 'bar',
              color:'#7FCEFF',
              data:[this.Muscle,this.Bone,this.Protein,this.Fat,this.Water]
            }
          ]
        };
        myChart.setOption(option);
        /*var nums=[],names=[],SearchResult=[];
        var id=_this.$store.state.searchID;
        this.$axios.get('/dataDetailInfo/'+id).then(res=>{
          SearchResult=res.data[0];
        })
        let data=[SearchResult.Water];
        myChart.setOption({
          xAxis:{
            data:['肌肉','骨质','蛋白质','脂肪','总水分']
          },
          series:[{
            data:data
          }]
        });*/


        let circle1=echarts.init(document.getElementById("circle1"));
        let circle1Option = {
          /*tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },*/
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['体脂百分比']
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              color:' #5885C7',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:24.0, name:'体脂百分比'},
                {value:24.0, name:'体脂比'}
              ]
            }
          ]
        };
        circle1.setOption(circle1Option);

        let circle2=echarts.init(document.getElementById("circle2"));
        let circle2Option = {
          /*tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },*/
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['体脂百分比']
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              color:'#74BA2D',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:24.0, name:'体脂百分比'}
              ]
            }
          ]
        };
        circle2.setOption(circle2Option);

        window.addEventListener('resize',function(){
          myChart.resize();
          circle1.resize();
          circle2.resize();
        });
      }
    },

  }
</script>
<style>
  .Record{
    background:#2b313f;
    color:#fff;
    text-align: left;
  }
  .Record .Record-head{
    height:11vh;
    background:#383F53;
    font-size:32px;
    padding-top: 5vh;
  }
  .Record .Record-head h2{
    width:90%;
    margin:0 0 2vh 10%;
    font-size: 3vmin;
    font-weight: normal;
    height:4.5vh;
  }
  .Record .Record-head h2 span{
    display: inline-block;
    width:14vw;
    text-align: center;
  }
  .Record .Record-middle{
    width:82%;
    margin:2vh 0 0 11vw;
  }
  .Record .Record-middle .Record-middle-top{
    height:40vh;
    width:100%;
    margin-bottom: 1vh;
  }
  .Record .Record-middle .Record-middle-bottom{
    margin-bottom: 1vh;
    width:100%;
  }
  .Record .top-left,.Record .top-right{
    width:48.5%;
    height:38vh;
    display: inline-block;
    vertical-align: top;
  }
  .Record .top-left{
    margin-right: 1.8%;
  }
  .Record .top-left,.Record .top-right,.Record .bottom-left,.Record .bottom-mid,.Record .bottom-right{
    background: #383F53;
    border-radius: 4px;
  }
  .Record .top-right ul{
    padding:1.5vh 3vw;
  }
  .Record .top-right ul li{
    height:6vh;
    line-height: 6vh;
  }
  .Record .top-right ul li span{
    display: block;
    float:left;
    width:8vw;
    text-align: center;
    font-size: 1.2vw;
  }
  .Record .top-right ul li:nth-of-type(1) span{
    font-size: 1.3vw;
  }
  .Record .bottom-left,.Record .bottom-mid,.Record .bottom-right{
    width:31.5%;
    height:26.5vh;
    display:inline-block;
    vertical-align: top;
    margin-right:2%;
  }
  .Record .bottom-left > div{
    width:50%;
    height:100%;
    float:left;
  }
  .Record .bottom-right{
    margin-right:0;
  }
  .Record .bottom-right h3{
    font-size: 1.55vw;
    font-weight: normal;
    text-align: left;
    margin:1vh 2vw 0 1vw;
  }
  .Record .bottom-right p{
    text-align: center;
    width:100%;
    height:6vh;
    line-height: 6vh;
  }
  .Record .bottom-right p:nth-of-type(1){
    font-size: 13vmin;
    height:16vh;
    line-height: 16vh;
  }
  .Record .Record-bottom{
    height:13vh;
    position:relative;
    bottom:0;
    padding:5vh 0 0 7vw;
  }
  .Record .Record-bottom .el-button{
    font-size: 3vmin;
    border-radius:100px;
    width:17.2vmin;
  }
  .Record .Record-bottom .el-button:nth-of-type(2),
  .Record .Record-bottom .el-button:nth-of-type(3){
    width:22vmin;
  }
</style>
