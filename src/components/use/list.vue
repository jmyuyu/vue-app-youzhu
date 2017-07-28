<template>
	<div id="list">
		<div>
			{{str}}
		</div>
	</div>
</template>

<script>
	export default{
		name:'list',
		data(){
			return{
				str:''
			}
		}
	}
</script>

<style>
	#list{
		width: 100vw;
		height: 100vh;
		background: #008000;
	}
</style>