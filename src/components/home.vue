<template>
	<div id="home">
		<div class="top">
			<div class="line">
				<div class="circle"></div>
			</div>
			<div class="hot">
				<p>热门城市</p>
			</div>	
			<div class="line">
				<div id="circle"></div>
			</div>	
		</div>		
		<div class="city">
			<ul class="list1">
				<router-link to='/list/56'>
					<li class="img1" style="position: relative;">
						<img src="src/assets/bieshu.jpg" style="position: absolute;left:0;top:0;z-index: -1;"/>
						<h3>成都<br/>热门目的地</h3>
					</li>
				</router-link>
				<router-link to='/list/53'>
				<li class="img1" style="position: relative;">
						<img src="src/assets/bj.jpg" style="position: absolute;left:0;top:0;z-index: -1;"/>
					<h3>北京<br/>热门目的地</h3>
				</li>
				</router-link>
				<router-link to='/list/55'>
				<li class="img1" style="position: relative;">
						<img src="src/assets/sy.jpg" style="position: absolute;left:0;top:0;z-index: -1;"/>
					<h3>三亚<br/>热门目的地</h3>
				</li>
				</router-link>
			</ul>
		</div>
		<div class="top">
			<div class="line">
				<div class="circle"></div>
			</div>
			<div class="hot">
				<p>特色主题</p>
			</div>	
			<div class="line">
				<div id="circle"></div>
			</div>	
		</div>		
		<div class="city">
			<ul class="list2">
				<router-link to='/list/580'>
					<li class="img1" style="position: relative;">
						<img src="src/assets/haozai.jpg" style="position: absolute;left:0;top:0;z-index: -1;"/>
						<h3>私享·宅</h3>
					</li>
				</router-link>
				<router-link to='/list/590'>
				<li class="img1" style="position: relative;">
						<img src="src/assets/bieshu.jpg" style="position: absolute;left:0;top:0;z-index: -1;"/>
					<h3>奢华·墅</h3>
				</li>
				</router-link>
				<router-link to='/list/600'>
				<li class="img1" style="position: relative;">
						<img src="src/assets/gongyu.jpg" style="position: absolute;left:0;top:0;z-index: -1;"/>
					<h3>主题·寓</h3>
				</li>
				</router-link>
			</ul>
		</div>
		
		<div class="top">
			<div class="line">
				<div class="circle"></div>
			</div>
			<div class="hot">
				<p>推荐房源</p>
			</div>	
			<div class="line">
				<div id="circle"></div>
			</div>	
		</div>		
		<figure>
			<router-link to='/detail/29'>
		  <img src="src/assets/tuijian1.jpg"/>
		  <p >￥2588/晚</p>
		  <div class="like">
		  	<i class="iconfont icon-jushoucang" style="color: white;margin-left:4px;line-height: 25px;"></i>
		  </div>
		  <figcaption>
		  	<p>优住三亚国光滨海花园海景度假别墅</p>
		  	<span>5卧室2厅5卫 ｜ 宜住8人</span>
		  </figcaption>
		  </router-link>
		</figure>
		<figure>
			<router-link to='/detail/48'>
		  <img src="src/assets/tuijian2.jpg"/>
		  <p >￥2588/晚</p>
		  <div class="like">
		  	<i class="iconfont icon-jushoucang" style="color: white;margin-left:4px;line-height: 25px;"></i>
		  </div>
		  <figcaption>
		  	<p>优住肯尼亚内罗毕Luxehill Villas豪华超大别墅之高级双人房</p>

		  	<span>5卧室2厅5卫 ｜ 宜住8人</span>
		  </figcaption>
		  </router-link>
		</figure>
		<figure>
			<router-link to='/detail/52'>
		  <img src="src/assets/tuijian3.jpg"/>
		  <p >￥2588/晚</p>
		  <div class="like">
		  	<i class="iconfont icon-jushoucang" style="color: white;margin-left:4px;line-height: 25px;"></i>
		  </div>
		  <figcaption>
		  	<p>优住肯尼亚内罗毕Luxehill Villas豪华别墅</p>
		  	<span>5卧室2厅5卫 ｜ 宜住8人</span>
		  </figcaption>
		  </router-link>
		</figure>
	</div>
</template>

<script>
export default{
	name:'home',
	data () {
	    return {
	      title:'优住推荐',
	      img:''
	    }
	 },
	 mounted(){
	 	this.$emit('to-parent',this.title)
	 }
}
</script>

<style>
	*{
		margin:0;
		padding: 0;
	}
	a{
		text-decoration: none;
		color:gray!important;
	}
	.top{
		height: 20px;
		text-align: center;
		color:goldenrod;
		padding: 10px 0;
		padding-left: 20%;
		
	}
	.line{
		width:40px;
		height: 1px;
		background: goldenrod;
		float:left;
		position: relative;
		margin: 0 15px;
		margin-top: 10px;
	}
	.circle{
		width: 5px;
		height: 5px;
		border: 1px solid goldenrod;
		border-radius: 50%;
		position: absolute;
		top:-3px;
		left: 40px;	
	}

	#circle{
		width: 5px;
		height: 5px;
		border: 1px solid goldenrod;
		border-radius: 50%;
		position: absolute;
		top:-3px;
		right: 40px;
	}
	
	.hot{
		float:left;
	}
	h3{
		padding-top:16vh;
		color:white;
	}
	li{
		height: 200px;
		text-align: center;
	}
	/*.list1>a>.img1{
		background: url(./assets/bieshu.jpg) no-repeat;
	}
	.list1>a>.img2{
		background: url(./assets/bj.jpg) no-repeat;
	}
	.list1>a>.img3{
		background: url(./assets/sy.jpg) no-repeat ;
	}
	.list2>a>.img1{
		background: url(./assets/haozai.jpg) no-repeat;
	}
	.list2>a>.img2{
		background: url(./assets/bieshu.jpg) no-repeat ;
	}
	.list2>a>.img3{
		background: url(./assets/gongyu.jpg) no-repeat ;
	}*/
	
	figure {
		position: relative;
	}
	img{
		width: 100vw;
		height: 200px;
	}
	figure>a>p{
		position: absolute;
		left:0;
		bottom:25vw;
		color: white;
		background: rgba(0,0,0,0.8);
		padding: 5px 8px;
	}
	figure>a>.like{
		position: absolute;
		right:3vw;
		top:4vw;
		width:25px;
		height: 25px;
		border-radius: 50%;
		border: 1px solid #fff;
		background: rgba(0,0,0,0.6);
		
	}
	figcaption>a>p{
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
		
	}
	figcaption>a>span{
		font-size: 14px;
		line-height: 14px;
		color: #666;
	}
</style>