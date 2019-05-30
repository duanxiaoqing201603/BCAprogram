<template>
  <div class="Curve">
    <div class="curveImage" id="curveImage"></div>
    <div class="curve-bottom">
      <el-button type="primary" @click="goHome"><i class="fa fa-home"></i> 主页</el-button>
      <el-button type="primary" @click="goBack"><i class="el-icon-time"></i> 取消</el-button>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default{
    data(){
      return {
        Weight:[],
        Fat:[],
        Muscle:[]
      }
    },
    mounted(){
      let _this=this;
      console.log(this.$route.params.UID);
      this.$axios.get('/userAllData/'+this.$route.params.UID).then(res=>{
        this.drawChart();

      },res=>{
        console.log(res.data);
      })
    },
    methods:{
      goHome(){
        this.$router.push("/");
      },
      goBack(){
        this.$router.go(-1);
      },
      drawChart(){

        let _this=this;
        let data=['体重','脂肪','肌肉']
        let myChart=echarts.init(document.getElementById("curveImage"));
        let option={
          title:{
            text:'变化曲线(KG)',
            textStyle:{
              color: '#fff',
              fontSize:24,
              fontWeight:'normal'
            },
            left:25,
            top:20
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                /*backgroundColor: '#6a7985'*/
              }
            }
          },
          legend: {
            bottom:10,
            right:'4%',
            textStyle:{
              color:'#fff',
              fontSize:15
            },
            data:data
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3.8%',
            right: '4%',
            top:80,
            bottom: '13%',
            containLabel: true
          },
          xAxis:[
            {
              type:'category',
              boundaryGap:false,
              data:['2018-02-10','2018-03-10','2018-04-10','2018-05-10','2018-06-10','2018-07-10'],
              axisTick:{
                alignWithLabel:true,
              },
              axisLine:{
                lineStyle:{
                  color:'#979797',
                  width:2
                }
              },
              axisLabel:{
                color:'#fff',
                fontSize:15
              }
            }
          ],
          yAxis:[
            {
              type:'value',
              min: 0,
              max: 80,
              axisTick:{
                alignWithLabel:true,
              },
              axisLine:{
                lineStyle:{
                  color:'#979797',
                  width:3
                }
              },
              axisLabel:{
                color:'#fff',
                fontSize:15
              },
              splitLine:{
                show:false
              }
            }
          ],
          series:[
            {
              name:'体重',
              type:'line',
              itemStyle: {
                normal: {
                  color: '#7FCEFF'
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8ec6ad'
                  }, {
                    offset: 1,
                    color: '#383F53'
                  }])
                }
              },
              data:[10,12,18,20,30,15]
            },
            {
              name:'脂肪',
              type:'line',
              itemStyle: {
                normal: {
                  color: '#1FD3AB'
                }
              },

              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1FD3AB'
                  }, {
                    offset: 1,
                    color: '#383F53'
                  }])
                }
              },
              data:[15,13,24,55,32,45]
            },
            {
              name:'肌肉',
              type:'line',
              itemStyle: {
                normal: {
                  color: '#0791D7'
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0791D7'
                  }, {
                    offset: 1,
                    color: '#383F53'
                  }])
                }
              },
              data:[40,45,45,50,30,20]
            },
          ]
        };
        myChart.setOption(option);
        window.addEventListener('resize',function(){
          myChart.resize();
        });
      }
    }
  }
</script>
<style>
  .Curve{
    background:#2b313f;
    color:#fff;
    text-align: left;
    padding-top: 14.5vh;
  }
  .Curve .curveImage{
    width:82.4vw;
    height:70vh;
    margin:0 auto;
    background:#383F53;
    border-radius: 8px;
  }
  .Curve .curve-bottom{
    height:13vh;
    position:relative;
    bottom:0;
    padding:7vh 0 0 7vw;
  }
  .Curve .curve-bottom .el-button{
    font-size: 3vmin;
    width:17.2vmin;
    border-radius: 100px;
  }
</style>
