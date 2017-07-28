<template>
  <div id="app">
 		<mt-header fixed :title="title"></mt-header>
 		<mt-tab-container>
 			<router-view @to-parent='getdata'></router-view>
 		</mt-tab-container>
	 	<mt-tabbar style='background: black;
	color: white;position: fixed;bottom: 0;'>
			  <mt-tab-item id="外卖">
			    <img slot="icon" src="src/assets/zan.png">
			    <router-link to='/home'>优住推荐</router-link>
			  </mt-tab-item>
			  <mt-tab-item id="订单">
			    <img slot="icon" src="src/assets/search.png">
			    <router-link to='/search'>搜索筛选</router-link>
			  </mt-tab-item>
			  <mt-tab-item id="发现">
			    <img slot="icon" src="src/assets/heart.png">
			    <router-link to='/about'>爱上优住</router-link>
			  </mt-tab-item>
			  <mt-tab-item id="我的">
			    <img slot="icon" src="src/assets/personal.png">
			    <router-link to='/user' >个人中心</router-link>
			 </mt-tab-item>
		</mt-tabbar>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

export default {
  name: 'app',
  data () {
    return {
      title:'优住推荐'
    }
  },
  methods:{
  	getdata:function(res){
  		this.title=res
  	}
  },
  mounted(){
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
}
.mint-header{
	background: white;
	border-bottom: 1px solid #c8a063;
	color: #c8a063;
	font-size: 1rem;
}
.router-link-active{
	color: #c8a063;
}
.mint-tab-container{
	width: 100vw;
	height: 100%;
	margin-top: 40px;
	margin-bottom: 55px;
}
</style>
