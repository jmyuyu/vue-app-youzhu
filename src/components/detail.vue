<template>
	<div id="list">
		<mt-popup v-model="popupVisible">
		<mt-header title="成都">
		  <router-link to="/home" slot="left">
		    
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-swipe :auto="0" :show-indicators="false">
		  <mt-swipe-item ><img :src=arr[0].img1  /></mt-swipe-item>
		  <mt-swipe-item ><img :src=arr[0].img2  /></mt-swipe-item>
		  <mt-swipe-item ><img :src=arr[0].img3  /></mt-swipe-item>
		</mt-swipe>
		<p style='padding-top: 15px;font-size: 16px;'>{{arr[0].title}}</p>
			<div class="info">
				<h4>房屋介绍</h4>
				<hr />
				<p style="font-size: 14px;">{{arr[0].intro}}</p>
				
				<h4 style="margin-top: 12px 0 2px 0;">房屋详情</h4>
				<mt-cell title="房屋类型" value="别墅"></mt-cell>
				<mt-cell title="卧室/床/卫生间" value="2/6/4"></mt-cell>
				<mt-cell title="宜住人数" value="8"></mt-cell>
				<mt-cell title="最多入住人数" value="8"></mt-cell>
				<mt-cell title="入住包含" value="查看"></mt-cell>
				
				<h4 style="margin-top: 12px 0 2px 0;">预订须知</h4>
				<mt-cell title="最少入住天数" value="1天"></mt-cell>
				<mt-cell title="押金" value="￥5000"></mt-cell>
				<mt-cell title="连住30天" value="8折"></mt-cell>
				<mt-cell title="连住7天" value="9折"></mt-cell>
				<mt-cell title="退订政策" value="查看"></mt-cell>
				<mt-cell title="入住时间" value="15:00"></mt-cell>
				<mt-cell title="退房时间" value="12:00"></mt-cell>
				<mt-cell title="可租状态" value="查看"></mt-cell>
				
				<h4 style="margin-top: 12px 0 2px 0;">预订须知</h4>
				<p style="font-size: 14px;">{{arr[0].around}}</p>
			</div>
			
		</mt-popup>
		
	</div>
</template>

<script>
	function ajax(opt) {
         opt = opt || {};
         opt.method = opt.method.toUpperCase() || 'POST';
         opt.url = opt.url || '';
         opt.async = opt.async || true;
         opt.data = opt.data || null;
         opt.success = opt.success || function () {};
         var xmlHttp = null;
         if (XMLHttpRequest) {
             xmlHttp = new XMLHttpRequest();
         }
         else {
             xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
         }var params = [];
        for (var key in opt.data){
             params.push(key + '=' + opt.data[key]);
         }
         var postData = params.join('&');
         if (opt.method.toUpperCase() === 'POST') {
             xmlHttp.open(opt.method, opt.url, opt.async);
             xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
             xmlHttp.send(postData);
         }
         else if (opt.method.toUpperCase() === 'GET') {
             xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
             xmlHttp.send(null);
         } 
         xmlHttp.onreadystatechange = function () {
             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                 opt.success(xmlHttp.responseText);
             }
         };
    }
	
	
	
	export default {
	  name: 'detail',
	  data () {
	    return {
	    	popupVisible:true,
	    	arr:[]
	     
	    }
	  },
	  mounted:function(){
	  	var _this=this
				ajax({
					method: 'post',
					url: 'http://www.reborncd.top/php/appdata2.php',
					data: {
						id:_this.$route.params.id
					},
					
					dataType: "json",
					success: function(data) {
						var data = data.replace(/\n/g, '').split('[')[1].split(']')[0].split('},')
						for(var i=0;i<data.length-1;i++) {
							data[i] = data[i] + '}';
						}
						for(var i=0;i<data.length;i++) {
							var item=JSON.parse(data[i]);
							_this.arr.push(item)
						}
						console.log(_this.arr)
						
					}
				})	
	  }
	}
</script>

<style>
	
	.mint-popup {
		height: 100vh;
		width: 100vw;
		overflow-y: auto;
		
	}
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-items-wrap{
		height: 200px;
		background: skyblue;
	}
	.info{
		margin-top:20px;
	}
	.mint-cell-wrapper{
		height: 10px;
	}
</style>