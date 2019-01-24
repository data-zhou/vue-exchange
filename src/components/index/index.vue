<template>
    <div>
        <v-header></v-header>
        <div class="index-cont">
            <div class="index-slide">
                <div class="block">
                    <el-carousel trigger="click" :interval="5000" class="index-banner">
                        <el-carousel-item class="banner-container" v-for="(item,index) in bannerlist" :key="index">
                            <img :src="item.Img" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="index-search box-bgshadow">
                <div class="index-search-title">
                    <h3>{{$t('index.searchTitle')}}</h3>
                </div>
                <div class="index-search-cont">
                    <input type="text" :placeholder="$t('index.searchPlace')">
                    <span class="search-btn"></span>
                </div>
            </div>
            <div class="box-bgshadow">
                <detailstable></detailstable>
            </div>
            <div class="box-bgshadow">
                <div class="safe-details-list">
                    <img src="../../assets/images/index-details1.png" alt="">
                    <div class="safe-details-text">
                        <h3>RELIABLE</h3>
                        <p>{{$t('index.safede1')}}</p>
                        <p>{{$t('index.safede2')}}</p>
                    </div>
                </div>
                <div class="safe-details-list">
                    <img src="../../assets/images/index-details2.png" alt="">
                    <div class="safe-details-text">
                        <h3>SECURITY FUNDS</h3>
                        <p>{{$t('index.safede3')}}</p>
                        <p>{{$t('index.safede4')}}</p>
                    </div>
                </div>
            </div>
            <div class="box-bgshadow">
                <h3 class="index-notice-tit">
                    官方公告<span>/Notice</span>
                    <router-link class="more" to="/noticeList" >更多</router-link>
                </h3>
                <div class="index-notice-list">
                    <div class="notice-list-link" v-for='noticeCont,index in notice' :key='index'>
                        <div class="notice-list-link-cont">
                            <router-link :to="{path:'/noticeDoc',query:{noticeID:noticeCont.id}}" >
                                {{noticeCont.title}}
                            </router-link>
                            <p>公告|{{noticeCont.time}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
import header from '../header/header.vue'
import footer from '../footer/footer.vue'
import detailstable from '../index/table.vue'
import Cookies from 'js-cookie'
import {formatDate} from '../../assets/js/time.js';
export default {
    name:'index',
    components: {
        "v-header":header,
        "v-footer":footer,
        detailstable
    },
    data(){
        return {
          bannerlist:[],
          notice:[],
          indexLang:Cookies.get("lang") || 'cn',
          noticeID:''
      }
    },
    mounted () {
        //this.getLang();//获取语言设置接口type
        this.indexBanner();
        this.indexNotice();//调用方法 formatDate(new Date(time * 1000), 'yyyy-MM-dd hh:mm');
        
    },
    methods:{
        //根据cookie获取语言，以切换接口语言
        getLang(){
            const getLang = Cookies.get("lang");
            if(getLang === 'zhCHT'){
                this.indexLang = 'zh_tw';
            }else if(getLang === 'en'){
                this.indexLang = 'en';
            }else{
                this.indexLang = 'cn';
            }
        },
        //轮播图
        indexBanner(){
            this.axios.get('apis/admin/v1/banner')
            .then((response) => {
                const obj = response.data;
                // console.log(obj);
                if(obj.code == 0){
                    this.bannerlist = obj.data;
                }else{
                    this.$message.error(obj.msg);
                }
            }).catch((err) => {
                this.$message.error(err);
            })
        },
        //公告内容
        indexNotice(){
            // console.log(this.indexLang)
            this.axios.get('apis/admin/v1/notice?limit=3&lan='+this.indexLang)
            .then((response) => {
                const obj = response.data;
                if(obj.code == 0){
                    for(const i in obj.data){
                        const time = obj.data[i].time;
                        const noticeTime = formatDate(new Date(time * 1000), 'yyyy-MM-dd hh:mm');
                        obj.data[i].time = noticeTime;
                    }
                    this.notice = obj.data;
                    // console.log(this.notice);
                }
            }).catch((err) => {
                this.$message.error(err);
            })
        }
    }
}
</script>
<style>
.index-cont{
    font-style: normal;
}
.index-slide{
    width: 100%;
    height:600px;
    position: relative;
    margin-bottom: 42px;
}
.index-banner{
    width: 100%;
    height:600px;
}
.index-banner .el-carousel__container{
    width: 100%;
    height: 600px;
}
.index-banner .banner-container{
    width: 100%;
    height:600px;
}
.index-banner .banner-container img{
    position: absolute;
    left: 50%;
    top: 300px;
    margin-left: -960px;
    margin-top: -300px;
}
.index-search{
    padding: 10px 40px;
    box-sizing: border-box;
}
.index-search-title{
    display: inline-block;
    line-height: 40px;
}
.index-search-cont{
    float: right;
    width: 300px;
    height: 38px;
    position: relative;
    border-radius: 20px;
    border:1px solid #666;
    overflow: hidden;
}
.index-search-cont input{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    color:#666;
    padding-left: 20px;
    padding-right: 50px;
    box-sizing: border-box;
}
.search-btn{
    display: inline-block;
    width: 38px;
    height: 38px;
    position: absolute;
    right: 10px;
    top: 0;
    background:url('../../assets/images/search.png') no-repeat;
    background-size: 20px 20px;
    background-position: center center;
    cursor: pointer;
}
.safe-details-list{
    display: inline-block;
    width: 50%;
    text-align: center;
    padding:40px 0;
    vertical-align: top;
}
.safe-details-list img{
    width: 225px;
    height:190px;
    margin-bottom: 40px;
}
.safe-details-text{
    width:300px;
    margin:0 auto;
    line-height: 1.5;
}
.safe-details-text h3{
    font-size: 20px;
    font-weight: bold;
    color:#333;
    margin-bottom: 20px;
}
.safe-details-text p{
    padding:3px 0;
}
.index-notice-tit{
    padding: 15px 30px;
    line-height: 2;
    font-size: 24px;
}
.index-notice-tit span{
    color:#5877ff;
    font-size: 18px;
    padding-left: 8px;
}
.index-notice-list{
    display:flex;
    justify-content: center;
    align-content: center;
}
.notice-list-link{
    flex:1;
    padding:20px 0 40px 0;
}
.notice-list-link-cont{
    padding-left: 80px;
    border-right:1px solid #ccc;
}
.notice-list-link:last-child .notice-list-link-cont{
    border-right: none;
}
.notice-list-link-cont a{
    padding: 10px 0;
    font-size: 16px;
    line-height: 1.5;
    color:#666;
}
.notice-list-link-cont a:hover{
    color: #5877ff;
    text-decoration: underline;
}
.notice-list-link-cont p{
    color:#999;
    margin-top: 15px;
}
.more{
    float: right;
    padding-right: 30px;
    font-size: 14px;
    color:#5877FF;
}
.more:hover{
    text-decoration: underline;
}
</style>