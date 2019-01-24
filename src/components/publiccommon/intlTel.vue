<template>
	<div id="quhao">
		<span class="couns" @click.stop="isShow=!isShow">{{ctr}}</span>
        <i class="intlTelNum">{{ctrnum}}</i>
        <ul v-show="isShow" id="search" name="phone">
			<template v-if="quhao.length>0">
				<li v-for='n,index in quhao' 
                :key='index' 
                @click.stop="getQuhaos(n.chinese_area,n.code)"> {{n.chinese_area}} {{n.code}}</li>
			</template>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:false,
                ctr:'中国 (China)',
                ctrnum:'+86',
				quhao:[]
			}
		},
		methods:{
			getSrcList(){
			  	this.isShow=false;
			},
//			改变时获取区号和国籍
			getQuhaos:function(a,b){
				this.ctr = a;
				this.ctrnum = b;
				this.isShow =false;
				this.$emit('intlTelID',b)//向父组件传值
			},
			getContent(){
				this.axios.get('apis/personal/v1/user/querintcode')
				.then((response) => {
                    const intlArrs = response.data.info;
					this.quhao = intlArrs;
				})
			}
		},
		created(){
			this.getContent();
		},
		mounted(){
			window.addEventListener('click',this.getSrcList)//添加监听事件
		}
	}
</script>

<style>
#quhao{
    width:60px;
    height:40px;
    position: absolute;
    left: 38px;
    top: 0;
}
.couns{
    display: block;
    width: 60px;
    line-height: 40px;
    color: #999;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    /*text-overflow: ellipsis;*/
}
.intlTelNum{
    display: inline-block;
    position: absolute;
    top: 0;
    left: 60px;
    line-height: 40px;
    padding-left: 5px;
}
#search{
    width: 320px;
    line-height: 28px;
    text-align: left;
    font-size: 14px;
    color:#666;
    background-color: #fff;
    z-index: 10;
    position: absolute;
    left: 0px;
    top: 40px;
    cursor: pointer;
    max-height: 275px;
    overflow: auto;
    box-shadow: 0 1px 4px #999;
}
#search li{
    padding-left: 5px;
}
#search li:hover{
    background-color: #f1f1f1;
    color: #999;
}
	/*自定义滚动条*/
::-webkit-scrollbar {  
  width: 14px;  
  height: 14px;  
}  
  
::-webkit-scrollbar-track,  
::-webkit-scrollbar-thumb {  
  border-radius: 999px;  
  border: 5px solid transparent;  
}  
  
::-webkit-scrollbar-track {  
  box-shadow: 1px 1px 5px rgba(0,0,0,.2) inset;  
}  
  
::-webkit-scrollbar-thumb {  
  min-height: 20px;  
  background-clip: content-box;  
  box-shadow: 0 0 0 5px rgba(0,0,0,.2) inset;  
}  
  
::-webkit-scrollbar-corner {  
  background: transparent;  
} 
</style>