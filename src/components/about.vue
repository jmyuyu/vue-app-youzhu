<template>
  <div id="about">
   <div id="banner" >
		<mt-swipe :auto="2000">
		  <mt-swipe-item><img src="src/assets/guanyu-1.jpg" /><p>独享入住       &nbsp;&nbsp;私人豪宅</p></mt-swipe-item>
		  <mt-swipe-item><img src="src/assets/guanyu-2.jpg" /><p>线下团队       &nbsp;&nbsp;精心打理</p></mt-swipe-item>
		  <mt-swipe-item><img src="src/assets/guanyu-3.jpg" /><p>专人迎接       &nbsp;&nbsp;管家服务</p></mt-swipe-item>
		</mt-swipe>
  </div>
  
  <div id="con">
  	<p >我们知道，出行中的您有时会厌倦酒店的千篇一律；我们知道，在酒店连住多天后，有时会怀念居家的宽敞和温馨，自如和自在；我们知道，旅途中的您会想到自己或与家人一起体验一下“这个城市的好房子”。</p>
  	<p>“优住”（北京优住空间网络科技有限公司）是专注于高端私宅（高档住宅、高端公寓、别墅和特色房屋）短租的线上线下全自营企业，为高端住客提供区别于高端酒店的住宿体验——更宽敞、温馨、豪华，像家一般的感觉。</p>
  	<p>“优住”以自营模式在线下对住客提供全程“轻管家”服务和本地食、游、娱、购、行指南，为入境外国游客、境内中高端人士和意图体验“别人的”好房子的人士提供不同于酒店的五星级体验：</p>
  	<p>---- 我们的线下团队亲自上门审核每套房源，确保房屋和设施品质达到高端酒店标准；</p>
  	<p>---- 我们为房屋配备了五星级酒店级别的布草和盥洗用品，并提供相应的专业级清洁服务；</p>
  	<p>---- 我们安排专人迎接您的入住，入住全程的专人“轻管家”服务。</p>
  	<p>人在旅途，也能体验好房子的居住乐趣！</p>
  	<p>优住，不一样的五星级体验！</p>
  </div>
  
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'about',
  data () {
    return {
      title:'关于优住'
    }
  },
  mounted(){
  	this.$emit('to-parent',this.title)
  }
}
</script>

<style>* {
	margin: 0;
	padding: 0;
}
#banner {
	width: 100vw;
	height: 35vh;
}

#banner p {
	width: 100vw;
	height: 6vh;
	position: absolute;
	left: 0;
	bottom: 0;
	background: rgba( 66, 66, 66, .6);
	text-align: center;
	line-height: 6vh;
	color: white;
	font-size: 1rem;
}

#title {
	width: 100vw;
	height: 10vh;
}
#con p {
	width: 90vw;
	margin: 0 auto;
	color: #666;
	font-size: 0.8rem;
	line-height: 1.6rem;
	text-indent: 1rem;
}</style>
