<template>
	<div id="list">
		<mt-popup v-model="popupVisible">
		<mt-header :title=str style="color:goldenrod">
		  <router-link to="/home" slot="left">
		    
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
			<div  v-for='(item,i) in arr'>
				<router-link :to="'/detail/'+item.id">
					<figure :id=item.id>
					    <img :src=item.img1 />
					    <p >￥{{item.price}}/晚</p>
						<div class="like">
					  		<i class="iconfont icon-jushoucang" style="color: white;margin-left:4px;line-height: 25px;"></i>
					    </div>
						<figcaption>
						  	<p>{{item.title}}</p>
						  	<span>5卧室2厅5卫 ｜ 宜住8人</span>
						</figcaption>
					</figure>
				</router-link>
				
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
	  name: 'list',
	  data () {
	    return {
	    	popupVisible:true,
	    	str:'',
arr: []

}
},
beforeMount: function() {
		var _id = this.$route.params.id

		if(_id == 56) {
			this.str = '成都'
		}
		if(_id == 53) {
			this.str = '北京'
		}
		if(_id == 55) {
			this.str = '三亚'
		}
		if(_id == 580) {
			this.str = '私享｜宅'
		}

		if(_id == 590) {
			this.str = '奢华｜墅'
		}
		if(_id == 600) {
			this.str = '主题｜寓'
		}
	},
	mounted: function() {
		var _id = this.$route.params.id
		var _this = this
		if(_id.length == 2) {
			ajax({
						method:'post',
				url: 'http://www.reborncd.top/php/appdata.php',
				data: {
					location:_id
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
				}
			})
		}else{
			ajax({
			method: 'post',
			url:'http://www.reborncd.top/php/appdata1.php',
			data: {
				type:_id
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
			}
		})	
			
		}
		

	  }
	}
</script>

<style>
	
	.mint-popup {
		height: 100vh;
		width: 100vw;
		overflow-y: auto;
		
	}
	
	figure {
		position: relative;
	}
	figure>p{
		position: absolute;
		left:0;
		bottom:25vw;
		color: white;
		background: rgba(0,0,0,0.8);
		padding: 5px 8px;
	}
	figure>.like{
		position: absolute;
		right:3vw;
		top:4vw;
		width:25px;
		height: 25px;
		border-radius: 50%;
		border: 1px solid #fff;
		background: rgba(0,0,0,0.6);
		
	}
	img{
		width: 100vw;
		height: 200px;
	}
	figcaption>p{
		font-size: 14px;
		font-weight: bold;
		line-height: 28px;
		
	}
	figcaption>span{
		font-size: 14px;
		color: #666;
	}
	img{
		width:100vw
	}
</style>