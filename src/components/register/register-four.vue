<template>
    <div>
        <v-header></v-header>
        <div class="register">
            <div class="reg-title">
                <ul>
                    <li class="reg-title-tips">
                        <i>1</i><span>{{ $t("register.userAuth") }}</span>
                    </li>
                    <li class="reg-title-tips">
                        <i>2</i><span>{{ $t("register.transPassword") }}</span>
                    </li>
                    <li class="reg-title-tips">
                        <i>3</i><span>{{ $t("register.naneAuth") }}</span>
                    </li>
                    <li class="reg-title-tips">
                        <i>4</i><span>{{ $t("register.regOver") }}</span>
                    </li>
                </ul>
            </div>
            <div class="register-warning">
                <i class="register-over-icon"></i>
                <span class="register-over-span">{{ $t("register.twoTips") }}</span>
            </div>
            <div class="register-over-cont">
                <ul>
                    <li>
                        <em>{{ $t("register.overPhone") }}：</em>
                        <span>{{ overPhone }}</span>
                    </li>
                    <li>
                        <em>{{ $t("register.overIDtype") }}：</em>
                        <span>{{ overPaperName }}</span>
                    </li>
                    <li>
                        <em>{{ $t("register.overName") }}：</em>
                        <span>{{ overRealName }}</span>
                    </li>
                    <li>
                        <em>{{ $t("register.overIDnum") }}：</em>
                        <span>{{ overIDnum }}</span>
                    </li>
                </ul>
            </div>
            <div class="login-button register-over-btn">
                <input type="button" :value="$t('hook.goToLogin')" @click="ToLogin">
                <!-- <div class="register-rmb">
                    <span>{{ $t("register.overCan") }}：</span>
                    <a href="javascript:;">{{ $t("register.overRMB") }}</a>
                </div> -->
            </div>

        </div>
    </div>
</template>
<script>
import header from '../header/header.vue'
export default {
    name:'register',
    data(){
        return {
          overPhone:this.$route.query.overPhone,
          overPaperType:this.$route.query.overPaperType,
          overPaperName:'',
          overRealName:this.$route.query.overRealName,
          overIDnum:this.$route.query.overIDnum
      }
    },
    components: {
        "v-header":header
    },
    mounted(){
        if(this.overPaperType == 1){
            this.overPaperName = this.$t("hook.idCard");
        }else 
        if(this.overPaperType == 2){
            this.overPaperName = this.$t("hook.passport");
        }
    },
    methods:{
        ToLogin(){
            this.$router.push({path: '/login'});
        }
    }
}
</script>
<style>
.register-over-icon{
    display: inline-block;
    width: 30px;
    height: 30px;
    background:url('../../assets/images/register-success.png') no-repeat;
    background-size: 30px 30px;
    vertical-align: top;
}
.register-warning .register-over-span{
    line-height: 30px;
    padding-left:10px;
    font-size: 16px;
    color:#5877ff;
}
.register-over-btn{
    width: 380px;
    text-align: center;
    margin: 0 auto;
}
.register-over-cont{
    width: 380px;
    margin:0 auto;
    padding-bottom:30px;
}
.register-over-cont ul li{
    padding:10px 0 10px 50px;
    line-height: 1.5;
    color:#333;
}
.register-rmb{
    padding-top:20px;
    color:#5877ff;
}
.register-rmb a{
    color:#5877ff;
}
.register-rmb a:hover{
    text-decoration: underline;
}
</style>