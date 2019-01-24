<template>
    <div class="vfooter">
        <div class="footer">
            <div class="footer-left">
                <div class="footer-logo">
                    <router-link to="/home">
                        <img src="../../assets/images/logo.png" alt="">
                    </router-link>
                </div>
                <div class="footer-link">
                    <ul>
                        <li>
                            <router-link to="/about">{{ $t("footer.company") }}</router-link>
                        </li>
                        <li>
                            <a href="javascript:;"><i>{{ $t("footer.contact") }}</i></a>
                        </li>
                        <li>
                            <a href="javascript:;"><i>{{ $t("footer.join") }}</i></a>
                        </li>
                        <li>
                            <a href="javascript:;"><i>{{ $t("footer.legal") }}</i></a>
                        </li>
                        <li>
                            <a href="javascript:;"><i>{{ $t("footer.register") }}</i></a>
                        </li>
                        <li>
                            <a href="javascript:;"><i>{{ $t("footer.trad") }}</i></a>
                        </li>
                        <li>
                            <a href="javascript:;"><i>{{ $t("footer.recharge") }}</i></a>
                        </li>
                        <li>
                            <a href="javascript:;"><i>{{ $t("footer.limit") }}</i></a>
                        </li>
                    </ul>
                </div>
                <div class="copyright">
                    <p>
                        <span>Copyright © 2016 深圳市众联网游文化传媒有限公司</span>
                        <a href="http://www.miitbeian.gov.cn" target="_blank">沪ICP备17016298号-1</a>
                    </p>
                </div>
            </div>
            <div class="footer-right">
                <div class="footer-code-pic">
                    <div class="footer-img-cont">
                        <img src="../../assets/images/footer-code.png" alt="">
                        <p><span>{{ $t("footer.download") }}</span></p>
                    </div>
                </div>
                <div class="footer-code-pic">
                    <div class="footer-img-cont">
                        <img src="../../assets/images/footer-code.png" alt="">
                        <p><span>{{ $t("footer.walletDownload") }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import header from '../header/header'

export default {
    name:'v-footer',
    components: {
        
    },
    data (){
        return{
            linkCont:{},
            content:[]
        }
    },
    mounted (){
        this.friendLink();
        // console.log(this.linkCont.code);
    },
    methods:{
        friendLink (){
            this.axios.get('http://39.108.213.201/admin/v1/friend')
            .then((response) => {
                const obj = response.data;
                this.linkCont = obj;
                this.content = obj.data;
                // console.log(obj);
                if(obj.code == 0){
                    // this.bannerlist = obj.data;
                }
            })
        }
    }
}
</script>
<style>
.vfooter{
    width: 100%;
    background: #333752;
}
.footer{
    width: 1200px;
    margin:0 auto;
    padding:30px 0;
}
.footer-left{
    display: inline-block;
    width:900px;
    vertical-align: top;
}
.footer-logo{
    margin-bottom: 20px;
}
.footer-logo img{
    width: 148px;
    height:48px;
}
.footer-link{
    margin-bottom: 20px;
}
.footer-link ul li{
    display: inline-block;
    color:#fff;
    padding: 10px 0;
}
.footer-link ul li a{
    color:#fff;
    padding:8px 0;
}
.footer-link ul li a i{
    padding:0 20px;
    border-right:1px solid #fff;
}
.footer-link ul li a:hover{
    color:#5877FF;
    text-decoration: underline;
}
.footer-link ul li:first-of-type a i{
    padding-left:0;
}
.footer-link ul li:last-child a i{
    padding-right: 0;
    border-right: none;
}
.copyright{
    margin-bottom: 20px;
}
.copyright p{
    color:#9da2a7;
}
.copyright p a{
    color:#9da2a7;
    margin-left: 8px;
    padding-left: 8px;
    border-left:1px solid #fff;
}
.copyright p a:hover{
    color:#5877FF;
}
.footer-right{
    display: inline-block;
    width:300px;
}
.footer-code-pic{
    display: inline-block;
    width: 150px;
    text-align: center;
    vertical-align: top;
}
.footer-img-cont{
    width: 110px;
    padding: 4px;
    background-color: #fff;
}
.footer-img-cont img{
    width: 110px;
    height:110px;
}
.footer-img-cont p{
    padding: 4px;
    line-height: 1.5;
    color:#333;
}
</style>