

<template>
	<!--订单-->
	<div id="indent">
		<ul class="Inlist">
			<li><router-link to="/list">全部</router-link></li>
			<li><router-link to="/list">待注入</router-link></li>
			<li><router-link to="/list">已完成</router-link></li>
			<li><router-link to="/list">已取消</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	import { Navbar, TabItem } from 'mint-ui';
	export default{
		name:'indent',
		
	}
</script>

<style>
	ul,li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.Inlist{
		margin: 0;
		padding: 0;
		overflow: hidden;
		background: #c8a063;
		border-bottom: 1px solid orange;
	}
	.Inlist li{
		float: left;
		width: 25vw;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
	}
	li:hover{
		border-bottom: 2px solid orange;
	}
	
</style>