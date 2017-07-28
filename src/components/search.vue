<template>
	<div id="search">
	<div id="content">
			<h2 class="h2">请选择城市</h2>
			<div class="con">
				<router-link to="/list/53" type="primary" class="btn">
					<mt-button type="primary" plain>北京</mt-button>
				</router-link>
				<router-link to="/list/54" type="primary" class="btn">
					<mt-button type="primary" plain>南京</mt-button>
				</router-link>
				<router-link to="/list/55" type="primary" class="btn">
					<mt-button type="primary" plain>三亚</mt-button>
				</router-link>
				<router-link to="/list/56" type="primary" class="btn">
					<mt-button type="primary" plain>成都</mt-button>
				</router-link>
				<router-link to="/list/57" type="primary" class="btn">
					<mt-button type="primary" plain>海外</mt-button>
				</router-link>
			</div>
			<router-view></router-view>
	</div>
</div>
</template>

<script>
	import { Header } from 'mint-ui';
	import { Button } from 'mint-ui';
	export default{
		name:'search',
		data(){
			return{
				title:'搜索筛选'
			}
		},
		mounted(){
			this.$emit('to-parent',this.title)
		}
	}
</script>

<style>
a {
		text-decoration: none;
		color: gray;
	}
	
	.head {
		font-size: 1.2rem;
		color: #793C11;
		background: #fff;
		border-bottom: 1px solid #999;
	}
	
	#content {
		margin-top: 3rem;
	}
	
	#content .h2 {
		width: 100vw;
		text-align: center;
		color: #999;
	}
	
	.con {
		display: flex;
		justify-content: space-around;
		margin: 1rem 0;
	}
	.li{
		width: 100%;
		position: relative;
	}
	.li img{
		width: 100%;
	}
	.text{
		width: 94%;
		margin: 0.3em 3%;
	}
	.text>p{
		line-height: 2rem;
	}
	.title{
		font-size: 1.1em;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.address{
		color: orangered;
	}
	.price{
		position: absolute;
		left: 0;
		top: 58%;
		padding: 0.5rem;
		background: rgba(0,0,0,0.8);
		color: #fff;
	}
</style>