<template>
    <div class="notice-details">
        <v-header></v-header>
        <div class="notice-cont box-bgshadow">
            <div class="safety-nav">
                <ul>
                    <li>公告</li>
                </ul>
            </div>
            <div class="notice-list notice-warpper">
                <div class="safety-pro-title">
                    <span>公告</span>
                </div>
                <ul>
                    <li class="noticelist-warpper"
                    v-for='(noticeCont,index) in noticeList' :key='index'>
                        <router-link class="toDoc toDocTit" 
                        :to="{path:'/noticeDoc',query:{noticeID:noticeCont.id}}" >
                            {{noticeCont.title}}
                        </router-link>
                        <span class="toDoc toDocTime" >{{noticeCont.time}}</span>
                        <router-link class="toDoc toDocLook" 
                        :to="{path:'/noticeDoc',query:{noticeID:noticeCont.id}}" >查看明细</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
import header from '../header/header.vue'
import footer from '../footer/footer.vue'
import Cookies from 'js-cookie'
import {formatDate} from '../../assets/js/time.js';
export default {
    name:'index',
    components: {
        "v-header":header,
        "v-footer":footer
    },
    data(){
        return {
            lang:Cookies.get("lang") || 'cn',
            noticeList:[]
        }
    },
    mounted () {
        this.NoticeList();
    },
    methods:{
        //公告列表
        NoticeList(){
            // console.log(this.indexLang)
            this.axios.get('apis/admin/v1/notice?&lan='+this.lang)
            .then((response) => {
                const obj = response.data;
                if(obj.code == 0){
                    for(const i in obj.data){
                        const time = obj.data[i].time;
                        const noticeTime = formatDate(new Date(time * 1000), 'yyyy-MM-dd hh:mm');
                        obj.data[i].time = noticeTime;
                    }
                    this.noticeList = obj.data;
                    // console.log(this.noticeList);
                }
            }).catch((err) => {
                this.$message.error(err);
            })
        }
    }
}
</script>
<style>
.notice-cont{
    margin-top: 40px;
    padding-bottom: 80px;
}
.notice-warpper{
    padding: 30px 80px;
    box-sizing: border-box;
}
.notice-warpper .safety-pro-title{
    margin-bottom: 20px;
}
.noticelist-warpper{
    display: flex;
    justify-content: right;
    align-items: center;
    text-align: right;
    padding: 10px 0;
    border-bottom: 1px dashed #ccc;
}
.noticelist-warpper .toDoc{
    color:#666;
}
.noticelist-warpper .toDocTit{
    flex:9;
    text-align: left;
}
.noticelist-warpper .toDocTit:hover{
    color:#5877ff;
    text-decoration: underline;
}
.noticelist-warpper .toDocTime{
    flex:2;
}
.noticelist-warpper .toDocLook{
    flex:1;
    color: #5877ff;
}
.noticelist-warpper .toDocLook:hover{
    text-decoration: underline;
}
</style>