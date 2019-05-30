import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Search from '@/pages/Search'
import Check from '@/pages/Check'
import Personal from '@/pages/Personal'
import Systemset from '@/pages/Systemfile'
import SystemFunc from '@/pages/systemFunc'
import TesterInfo from '@/components/Testerinfo'
import Testguide from '@/components/Testguide'
import Testing from '@/components/Testing'
import Record from '@/components/Record'
import Curve from '@/components/Curve'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Check',
      component: Check
    },
    {
      path: '/Personal',
      component: Personal
    },
    {
      path:'/Systemset',
      component:Systemset
    },
    {
      path:'/Systemrepair',
      component:Systemset
    },
    {
      path:'/Systemset/:funcName',
      name:'/SystemFunc',
      component:SystemFunc
    },
    {
      path:'/Systemrepair/:funcName',
      name:'/SystemFunc',
      component:SystemFunc
    },
    {
      path:'/confirm',
      component:TesterInfo
    },
    {
      path:'/Testguide',
      component:Testguide
    },
    {
      path:'/Testing',
      component:Testing
    },
    {
      path:'/Search/Record/:id',
      component:Record
    },
    {
      path:'/Curve/:UID',
      component:Curve
    }
  ]
})
