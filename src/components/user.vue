<template>
	<div id="user">
		<div>			
		<div>		
		<div><img id="deng" src="src/assets/deng.jpg" />
		<div id="opc"></div>
		</div>
	<button  @click="tap1" id="btn1" >
		<div><img id="deng1"  src="src/assets/ci.png" /></div>
	</button>
	<button @click="tap3"> 	
		<div  id="login2"  ><img id="login" src="src/assets/login1.png"/>
		<p >{{account.length!=0?account:accountfake}}</p>
		</div>
	</button>
		
		</div>
	<mt-popup
	 	id="shi"
      v-model="popupVisible"
      position="right"
      modal=false>
      <div style="width: 100vw;height: 100vh;z-index: 2010;background: white;">
      	
      	<div style="height: 6vh;width: 100%;">
      			<button @click="tap" style="float: left;text-align: center;line-height: 6vh;border: 0;background: white;margin-left:1rem ;"><</button>
      		<p style="color: #C8A063;font-size: 1rem;text-align: center;line-height: 6vh;">更多</p>
      	</div>
   	<mt-cell title="关于优住"  is-link></mt-cell>
   	
   	<mt-cell title="意见反馈"  is-link></mt-cell>
   	
   	<mt-cell title="清除缓存"  is-link></mt-cell>
   	
   	<mt-cell title="推荐给好友"  is-link></mt-cell>
   	
   	<mt-cell title="欢迎页"  is-link></mt-cell>  
     </div>
   </mt-popup>	
	<mt-popup
	 id="shi"
      v-model="popupVisible1"
      position="bottom"
      modal=false>
     <div id="yi">
     	
     	<div id="login-one">
     		<div id="l-2">
     			<img src="src/assets/log1.png" />
     			<img src="src/assets/loz1.png" />
     		</div>
     		
     		<form action="" method="post" id="inpu">
     			<!--<input type="text"  placeholder="用户名"/>-->
     		<input type="text" value=""  v-model="name1" placeholder="用户名" />
     		<input type="text" value=""  v-model="pass2" placeholder=" 密码（6-20位字母，数字）" />
     		<p style="float:right;color:#c8a063 ;margin-top: 1rem;">忘记密码?</p>
			</form>
     		<p style="color: #c8a063">{{op1}}</p>
     		<button id="btn3"  @click='tap8'>登录</button>
     		 <br />
<button id="btn3"   @click='tap5'>注册</button>
     	<button id="btn4" @click="tap4">继续逛逛&nbsp;&nbsp;&nbsp;^_^</button>	
     	</div>
     	<mt-popup
	 	id="shi"
      v-model="popupVisible2"
      position="right"
      modal=false>
     <div id="yi">    	
     	<div id="login-one">
     		<div id="l-2">
     			<img src="src/assets/log1.png" />
     			<img src="src/assets/loz1.png" />
     		</div>
     		  <form action="" method="post" id="inpu">     			
     		<input type="text" value="" v-model="name" placeholder="用户名" required="required"/>
     		<input type="text" value="" placeholder="验证码"/> 		
     		<input  style="margin-top: 1.9rem;border-top:0 ;" type="password" value="" v-model="pass" placeholder=" 密码（6-20位字母，数字）" required="required"/>
     		</form> 		
     		<p style="color: #c8a063 ">{{op}}</p>
     	  <button id="btn3" @click="tap6">注册</button>	
     	  <div id="zhuce">
     		<p style="margin-top: 10px;font-size: 10px;">《优住服务条款》</p>
     		<p>注册成功即表示您已同意</p>
     		</div>
     	</div>
     </div>
    </mt-popup>	   	
     </div>
  </mt-popup>
	</div>	
	<ul class="ulist" style="margin-top: 27vh;">
			<router-link to="/indent">
				<li class="ulis">
					<i class="iconfont ic">&#xe600;</i>我的订单
					<span class="frt">&gt;</span>
				</li>
			</router-link>
			<router-link to="/my">
				<li class="ulis">
					<i class="iconfont ic">&#xe63b;</i>我的房产
					<span class="frt">&gt;</span>
				</li>
			</router-link>
			
			<router-link to="/hous">
				<li class="ulis">
					<i class="iconfont ic">&#xe63b;</i>提交房源
					<span class="frt">&gt;</span>
				</li>
			</router-link>
			
			<router-link to="/coupons">
				<li class="ulis">
					<i class="iconfont ic">&#xe63b;</i>我的优惠劵
					<span class="frt">&gt;</span>
				</li>
			</router-link>
			<router-link to="/collection">
				<li class="ulis">
					<i class="iconfont ic">&#xe70a;</i>我的收藏
					<span class="frt">&gt;</span>
				</li>
			</router-link>
			
			<router-link to="/help">
				<li class="ulis">
					<i class="iconfont ic">&#xe651;</i>常见问题
					<span class="frt">&gt;</span>
				</li>
			</router-link>
			
			
				<li class="ulis">
					<a href="tel:12345678910">
						<i class="iconfont ic">&#xe604;</i>客服热线
						<span class="frt" style="color: #666;">400-168-9926</span>
					</a>
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
	import { Popup } from 'mint-ui';
	import { Button } from 'mint-ui';
	import { Cell } from 'mint-ui';
	export default{
		
		name:'index',
		
		data(){
			return{
				op1:'',
				op:'',
				title:'个人中心',
				name:'',
				pass:'',
				name1:'',
				pass2:'',
				str:'index',
				popupVisible:false,
				popupVisible1:false,
				popupVisible2:false,
				account:'',
				accountfake:'登录/注册'
			}
		},
		methods:{
			
			tap1:function(){
				this.popupVisible=true
			},
			tap:function(){
				this.popupVisible=false
			},
			tap3:function(){
				this.popupVisible1=true		
			},
			tap4:function(){
				this.popupVisible1=false	
			},
			tap8:function(){
			
				
		if(this.name1!=""&&this.pass2!=""){
				
				var	_this=this
				ajax({
        url: "http://www.reborncd.top/php/login-t.php",              //请求地址
        method: "post",                       //请求方式
        data: {username:_this.name1,password:this.pass2},        //请求参数
        dataType: "jsonp",
        
        success: function (response) {
            // 此处放成功后执行的代码
            console.log(response)
            if(response==1){
          _this.op1='登录失败，账户不存在'
            }if(response==2){

           _this.op1='登录失败，密码错误'
           }else{
           	_this.account='欢迎'+_this.name1
           _this.popupVisible1=false	
			
           	
           	
           }
       },  
        fail: function (status) {
            // 此处放失败后执行的代码
        }    
    })
			}else{				
			this.op1='账号或者密码为空'				
			}							
			},
			tap5:function(){
				this.popupVisible2=true				
			},
			tap6:function(){
			if(this.name!=""&&this.pass!=""){
				var	_this=this
				ajax({
        url: "http://www.reborncd.top/php/register-p.php",              //请求地址
        method: "post",                       //请求方式
        data: {username:_this.name,password:_this.pass},        //请求参数
  
        
        success: function (response) {
            // 此处放成功后执行的代码
           console.log(response)
            if(response==0){
          _this.op='注册失败，账户名重名'
            }if(response==1){
            	_this.popupVisible2=false
				_this.popupVisible1=false

            }
       },  
        fail: function (status) {
            // 此处放失败后执行的代码
        } 
        
    })
			}else{			
			this.op='账号或者密码为空'				
			}
				
			}		
		},
		mounted(){
			this.$emit('to-parent',this.title)
		}
	}

</script>

<style>
	ul li{
		list-style: none;
	}
	.frt{
		float: right;	
		margin-right: 0.5rem;
		color: orange;
		font-weight: 100;
	}
	.ic{
		display: inline-block;
		width: 2.5rem;
		text-align: center;
		line-height: 1.2rem;
		color: orange;	
		font-weight: 100;
	}
	.tel{
		float: right;
		
	}
	.ulis{
		margin: 0 1vw;
		padding: 0.5rem 0;
		width: 98vw;
		height: 2rem;
		line-height: 2rem;
		color: #000;
		font-weight: 600;
		border-bottom: 1px solid #eee;
	}
	.ulis a{
		color: #000;
	}
	.src{
		width: 100vw;
		height: 15rem;
	}
	*{margin: 0;padding: 0;}
	#btn1{position: absolute;right:1rem;top:1rem;z-index: 2004;background-color: rgba(0,0,0,0);border:0}
	#deng1{width: 20px;height: 20px;z-index: 2004;}
	#deng{width: 100vw;height: 30vh;position: absolute;z-index: 2002;}
	#opc{opacity: .5;background: #dedede;position: absolute;z-index: 2003;width: 100vw;height: 30vh;}
	#login{width: 6rem;height: 6rem;border-radius: 6rem 6rem;z-index: 2004;}
    #login2{z-index: 2004;position: absolute;left: 40%;top:8% ;color: #fff;font-size: 1rem;}


#yi{width: 100vw;height: 100vh;z-index: 2020 ;position: relative;background: black;}
#shi{z-index: 2020 ! important;}
#login-one{width: 60vw;height: 70vh;position: absolute;left: 20%;top: 20%;background: black;}

#l-2 img:nth-child(1){margin-left: 40%;width:20%;height: 50%;}
#l-2 img:nth-child(2){margin-left: 15%;width: 70%;}

#inpu input:nth-child(1){margin-top: 2rem;margin-bottom: 2rem;}
#inpu input{border-bottom:1px solid #c8a063;list-style: none;width: 100%;height: 2rem;background: #333333;border-top:0 ;border-right:0 ;border-left:0 ;color:#c8a063 ;background: #000000;outline:none}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #c8a063; opacity:1; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #c8a063;opacity:1;
}

input:-ms-input-placeholder{
    color: #c8a063;opacity:1;
}

input::-webkit-input-placeholder{
    color: #c8a063;opacity:1;
}
#btn3{width: 80%;height: 3rem;background: black;outline:none;border: 1px solid #c8a063;margin-top: 2rem;margin-left: 10%;color: #c8a063;text-align: center;line-height: 3rem;}
#btn4{width: 80%;height: 3rem;background: black;outline:none;border:0; margin-top: 2rem;margin-left: 10%;color: #c8a063;text-align: center;line-height: 3rem;}
#zhuce{width: 100%;height: 7rem;}
#zhuce p{width: 100%;height: 2rem;text-align: center;line-height: 1rem;color: #c8a063;}
</style>