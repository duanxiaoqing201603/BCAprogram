import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    systemid:0,
    systemtitle:'',
    systemmsgSet:[],
    funcName:'',
    systemset:'',
    inputItem:[],
    searchID:''
  },
  getters:{

  },
  mutations:{
    search(data){

    }
  },
  actions:{

  }
});
export default store;
