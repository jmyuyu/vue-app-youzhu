import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
Vue.use(MintUI)
Vue.use(VueRouter)
import Home from './components/home.vue'
import About from './components/about.vue'
import Search from './components/search.vue'
import User from './components/user.vue'
import List from './components/list.vue'
import Detail from './components/detail.vue'
import beijing from './components/beijing.vue'
import nanjing from './components/nanjing.vue'
import sanya from './components/sanya.vue'
import chengdu from './components/chengdu.vue'
import abroad from './components/abroad.vue'

import Indent from './components/use/indent.vue'//订单
import My from './components/use/my.vue'//我的房产
import Hous from './components/use/hous.vue'
import Coupons from './components/use/coupons.vue'//优惠券
import Collection from './components/use/collection.vue'//收藏
import Help from './components/use/help.vue'//问题
import list from './components/use/list.vue'

var routes=[
	{path:'/',component:Home},
	{path:'/home',component:Home},
	{path:'/search',component:Search},
	{path:'/about',component:About},
	{path:'/user',component:User},
	{path:'/list/:id',component:List},
	{path:'/detail/:id',component:Detail},
	{path:'/search/beijing',component:beijing},
    {path:'/search/nanjing',component:nanjing},
    {path:'/search/sanya',component:sanya},
    {path:'/search/chengdu',component:chengdu},
    {path:'/search/abroad',component:abroad},
    {path:"/indent",component:Indent,
		'children':[
			{path:'/list/:id',component:list}
		]
	},
	{path:"/my",component:My},
	{path:"/hous",component:Hous},
	{path:"/coupons",component:Coupons},
	{path:"/collection",component:Collection},
	{path:'/help',component:Help}
]
var router=new VueRouter({
	routes:routes
})
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
