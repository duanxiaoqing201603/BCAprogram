<template>
  <div class="Impedance">
    <ul class="aisle">
      <li>通道1</li><li>通道2</li><li>通道3</li><li>通道4</li><li>通道5</li><li>通道6</li>
    </ul>
    <ul class="aisle-data">
      <li>5KHz</li><li>50KHz</li><li>100KHz</li><li>250KHz</li><li>500KHz</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:"Impedance"
  }
</script>
<style>
  .Impedance{
    width:60%;
    padding-top: 3vh;
    margin: 0 auto;
    font-size: 1.5vw;
  }
  .Impedance ul li{
    list-style:none;
  }
  .Impedance .aisle{
    width:100%;
    height:8vh;
    text-align: right;
  }
  .Impedance .aisle li{
    display: inline-block;
    width:9vw;
    height:8vh;
    line-height:7vh;
    text-align: center;
  }
  .Impedance .aisle-data{
    width: 100%;
    text-align: left;
  }
  .Impedance .aisle-data li{
    width:100%;
    height:7vh;
    line-height: 7vh;
    margin-bottom: 2vh;
    background:#383F53;
    border-radius:8px;
    padding-left: 2vw;
  }
</style>
