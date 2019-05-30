<template>
  <div class="vue-info">
    <div class="main-func">
      <router-link to="/Check">
        <img src="../assets/img/test_u.png"/>
      </router-link>
      <router-link to="/Personal">
        <img src="../assets/img/user_u.png"/>
      </router-link>
      <router-link to="/Search">
        <img src="../assets/img/search_u.png"/>
      </router-link>
    </div>
    <div class="now">
      {{time}}
    </div>
    <div class="bottom">
      <div class="logoInfo">
        <img src="../assets/img/logo.png"/>
        <p>清华同方| 人体成人分析仪</p>
        <p>Body Composition Analyzing System {{vision}} IP:{{IP}}</p>
      </div>
      <div class="set">
        <a @click="setting()"><i class="fa fa-cog"></i> 设置</a>
        <a @click="repair()"><i class="fa fa-wrench"></i> 维护</a>
        <a><i class="fa fa-power-off"></i> 关机</a>
      </div>
    </div>

  </div>
</template>
<script>
  /*import Systemfile from "../components/Systemfile"*/
  export default {
    /*components: {Systemfile},*/
    data () {
      return {
        vision: 'V1.2',
        IP: '192.168.0.64',
        time: '2019/3/12 13:55'/*new Date()*/
      }
    },

    methods: {
      setting () {
        this.$router.push('/Systemset');
        //this.$store.state.systemtitle = '系统设置';
      },
      repair () {
        this.$router.push('/Systemrepair');
        //this.$store.state.systemtitle = '系统维护';
      }
    }
  }
</script>
<style scoped>
  .vue-info {
    background: url("../assets/img/background.png") no-repeat;
  }

  .main-func {
    padding-top: 18vmin;
  }

  .main-func img {
    width: 24vw;
    margin-right: 4vw;
  }

  .now {
    height: 5vh;
    text-align: center;
    font-size: 34px;
    margin-top: 2vmin;
    color: #FFFFFF;
    font-family: PingFangSC-Thin;
  }

  .bottom {
    margin: 15vmin 0 0 6vmin;
  }

  .logoInfo {
    float: left;
    width: 50vw;
    height: 10vh;

  }

  .logoInfo img {
    width: 4vw;
    float: left;
    margin-right: 5vw;
  }

  .logoInfo p {
    line-height: 25px;
    font-size: 18px;
    color: #758784;
    text-align: left;
  }

  .set {
    margin-top: 15px;
    float: right;
  }

  .set a {
    font-size: 18px;
    float: left;
    margin-right: 5vw;
    color: #758784;
    cursor:pointer;
  }
</style>
