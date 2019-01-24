<template>
    <div>
        <v-header></v-header>
        <div class="register">
            <div class="reg-title">
                <ul>
                    <li class="reg-title-tips">
                        <i>1</i><span>{{ $t("register.userAuth") }}</span>
                    </li>
                    <li>
                        <i>2</i><span>{{ $t("register.transPassword") }}</span>
                    </li>
                    <li>
                        <i>3</i><span>{{ $t("register.naneAuth") }}</span>
                    </li>
                    <li>
                        <i>4</i><span>{{ $t("register.regOver") }}</span>
                    </li>
                </ul>
            </div>
            <form class="register-form" action="">
                <div class="block-item">
                    <input class="phone intlPhone" type="text" :placeholder="$t('login.phoneNum')"
                    onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"
                    v-validate="'required|phone'" name="phone" v-model="regphone">
                    <span class="veetips" v-show="errorBags.has('phone')" v-if="phoneshow">
                        {{ errorBags.first('phone')}}
                    </span>
                    <inputicon class="phone-icon"></inputicon> 
                    <div class="intlTel-warpper">
                        <intlTel v-on:intlTelID = "getIntlTel"></intlTel>
                    </div>
                    <span class="veetips" v-model="regphoneTip">{{regphoneTip}}</span>
                </div>
                <div class="block-item">
                    <input class="password" type="password" :placeholder="$t('login.password')"
                    v-validate="'required|regpassword'" name="regpassword" v-model="regpassword">
                    <span class="veetips regphone11" v-show="errorBags.has('regpassword')">
                        {{ errorBags.first('regpassword')}}
                    </span>
                    <inputicon class="password-icon"></inputicon> 
                </div>
                <div class="block-item">
                    <input class="password" type="text" :placeholder="$t('register.regInvCode')">
                    <inputicon class="request-icon"></inputicon> 
                </div>
                <div class="block-item">
                    <input class="code" type="text" :placeholder="$t('register.regVerCode')"
                    onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"
                    v-validate="'required'" name="code" v-model="code">
                    <span class="veetips" v-show="errorBags.has('code')">
                        {{ errorBags.first('code')}}
                    </span>
                    <inputicon class="regcode-icon"></inputicon>
                    <div class="codenum">
                        <span v-show="sendAuthCode" 
                        @click="getAuthCode"
                        class="auth_text auth_text_blue">{{ $t("register.getSms") }}</span>
                        <span v-show="!sendAuthCode" class="auth_text"> 
                        <span class="auth_text_blue">{{auth_time}} </span> {{ $t("register.getSmsTime") }}</span>
                    </div>
                    <span class="veetips" v-model="codeTip">{{codeTip}}</span>
                </div>
                <div class="register-agree">
                    <el-checkbox v-model="agreereg">
                        <span>{{ $t("register.checkText") }}</span>
                    <a href="javascript:;">{{ $t("register.checkLink") }}</a>
                    </el-checkbox>
                    <span class="red" v-model="agreeTip">{{agreeTip}}</span>
                </div>
                <div class="login-button">
                    <input type="button" @click="regSubmit" :value="$t('register.regSubmit')">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import header from '../header/header.vue'
import inputIcon from '../publiccommon/input-icon.vue'
import intlTel from '@/components/publiccommon/intlTelGet.vue'
export default {
    data(){
        return{
            getIntlTelID:'86',//国际代码ID
            agreereg: true,
            agreeTip:'',
            regphone:'',
            regphoneTip:'',
            phoneshow:'',
            regpassword:'',
            code:'',
            codeTip:'',
            sendAuthCode:true,
            auth_time: 0
        }
    },
    components: {
        "v-header":header,
        "inputicon":inputIcon,
        intlTel
    },
    mounted(){
        
    },
    methods:{
        regSubmit () {
            this.$validator.validate().then(result => {//注册
                if (!result) {
                    this.phoneshow = true;
                    this.regphoneTip = '';
                    this.codeTip = '';
                    return;
                }
                if(!this.agreereg){//同意协议
                    this.agreeTip = this.$t("hook.regAgreeTips");
                    return;
                }
                this.agreeTip = '';
                this.axios.post('apis/personal/v1/user/adduser?account=' + this.regphone 
                +'&password=' + this.regpassword 
                +'&code=' + this.code 
                +'&int_code=' + this.getIntlTelID).then((response) => {
                    const obj = response.data;
                    if(obj.code == 0){
                        this.$router.push({
                            path: '/registerTwo',
                            query:{
                                phoneNum:this.regphone
                            }
                        });
                        this.codeTip = '';
                        this.regphoneTip = '';
                    }else if(obj.code == 1012){
                        this.codeTip = this.$t("hook.codeTip1012");
                        this.regphoneTip = '';
                    }else if(obj.code == 1013){
                        this.codeTip = this.$t("hook.codeTip1013");
                        this.regphoneTip = '';
                    }else if(obj.code == 4003){
                        this.codeTip = '';
                        this.regphoneTip = this.$t("hook.regphoneTip4003");
                    }else{
                        this.$message.error(obj.msg);
                    }
                }).catch((err) => {
                    this.$message.error(err);
                })
                
            });
        },
        getIntlTel (idnum) { //获取国际代码id
            this.getIntlTelID = idnum;
        },
        getAuthCode:function () {//获取验证码
            this.phoneshow = false;
            if(this.regphone == "" || !/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.regphone)){
                this.regphoneTip = this.$t("hook.regPhoneTips");
            }else{
                this.regphoneTip = '';
                this.axios.post('apis/personal/v1/user/sendsmsdoc?type=1&account=' + this.regphone 
                + '&int_code=' + this.getIntlTelID)
                .then((response) => {
                    const obj = response.data;
                    if(obj.code == 0){
                        this.sendAuthCode = false;
                        this.auth_time = 60;
                        var auth_timetimer =  setInterval(()=>{
                            this.auth_time--;
                            if(this.auth_time<=0){
                                this.sendAuthCode = true;
                                clearInterval(auth_timetimer);
                            }
                        }, 1000);
                    }else if(obj.code == 2008){
                        this.codeTip = '';
                        this.regphoneTip = this.$t("hook.regphoneTip4003");
                    }else{
                        this.$message.error(obj.msg)
                    }
                    
                }).catch((err) => {
                    this.$message.error(err);
                })
            }
        }
    }
}
</script>
<style>
.register{
    width: 1000px;
    margin:100px auto;
    border-radius: 5px;
    padding: 0 0 100px 0;
    background-color: #fff;
}
.reg-title{
    margin-bottom: 100px;
    height:80px;
}
.reg-title ul{
    display: flex;
}
.reg-title li{
    flex: 1;
    text-align: center;
    line-height: 80px;
    font-size: 18px;
    color: #333752;
    border-bottom: 4px solid #ccc;
}
.reg-title li i{
    display: inline-block;
    width: 28px;
    height:28px;
    margin-right: 8px;;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    background-color: #ccc;
    border-radius: 14px;
    color:#fff;
}
.reg-title li.reg-title-tips{
    border-color:#333752;
}
.reg-title li.reg-title-tips i{
    background-color: #333752;
}
.register-form{
    width: 380px;
    text-align: center;
    margin:0 auto;
}
.request-icon{
    background:url('../../assets/images/request-code-icon.png') no-repeat;
}
.register-agree{
    margin-bottom: 30px;
}
.register-agree a{
    padding: 0 5px;
    color:#5877ff;
}
.register-agree a:hover{
    text-decoration: underline;
}
.auth_text{
    display: block;
    width: 100%;
    height:100%;
    background-color: #333752;
    color:#fff;
    height: 40px;
    margin-top: -1px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}
</style>