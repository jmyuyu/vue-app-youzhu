<template>
	<div id="beijing">
		<ul>
			<li class="li" v-for="(item,i) in arr">
				<router-link :to="'/search/beijing/'+item.id">
					<img :src=item.img3 alt="＃％？＆＊" />
					<div class="text">
						<p class="title">
							<strong>{{item.title}}</strong>
						</p>
						<p class="address">
							地址 : {{item.address}}
						</p>
					</div>
					<span class="price">
						￥{{item.price}}/晚
					</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	function ajax(opt) {
		opt = opt || {};
		opt.method = opt.method.toUpperCase() || 'POST';
		opt.url = opt.url || '';
		opt.async = opt.async || true;
		opt.data = opt.data || null;
		opt.success = opt.success || function() {};
		var xmlHttp = null;
		if(XMLHttpRequest) {
			xmlHttp = new XMLHttpRequest();
		} else {
			xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
		}
		var params = [];
		for(var key in opt.data) {
			params.push(key + '=' + opt.data[key]);
		}
		var postData = params.join('&');
		if(opt.method.toUpperCase() === 'POST') {
			xmlHttp.open(opt.method, opt.url, opt.async);
			xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
			xmlHttp.send(postData);
		} else if(opt.method.toUpperCase() === 'GET') {
			xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
			xmlHttp.send(null);
		}
		xmlHttp.onreadystatechange = function() {
			if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				opt.success(xmlHttp.responseText);
			}
		};
	}
	export default {
		name: 'beijing',
		data() {
			return {
				arr:[]
			}
		},
		mounted() {
			var _this = this
			ajax({
				method: 'post',
				url: 'http://www.reborncd.top/php/appdata.php',
				data: {
					location: 53
				},
				success: function(data) {
					var data = data.replace(/\n/g, '').split('[')[1].split(']')[0].split('},')
					for(var i=0;i<data.length-1;i++) {
						data[i] = data[i] + '}';
					}
					var arr1 = []
					for(var i=0;i<data.length;i++) {
						var item=JSON.parse(data[i]);
						arr1.push(item)
					}
					_this.arr = arr1
				}
			})	

		}
	}
</script>
