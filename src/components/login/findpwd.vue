<template>
    <div>
        <v-header></v-header>
        <!-- 找回密码 -->
        <div class="register findpwd">
            <div class="safety-pro-title">
                <span>找回密码</span>
            </div>
            <form class="register-form" action="">
                <div class="block-item">
                    <input class="phone intlPhone" type="text" :placeholder="$t('login.phoneNum')"
                    onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"
                    v-validate="'required|phone'" name="phone" v-model="regphone">
                    <span class="veetips" v-show="errorBags.has('phone')">
                        {{ errorBags.first('phone')}}
                    </span>
                    <inputicon class="phone-icon"></inputicon> 
                    <div class="intlTel-warpper">
                        <intlTel v-on:intlTelID = "getIntlTel"></intlTel>
                    </div>
                </div>
                <div class="block-item">
                    <input class="code" type="text" :placeholder="$t('register.regVerCode')"
                    onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"
                    v-validate="'required'" name="code">
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
                </div>
                <div class="block-item">
                    <input class="password" type="password" 
                    v-model="newpwd"
                    :placeholder="$t('safety.CloginNew')">
                    <inputicon class="password-icon"></inputicon> 
                </div>{{newpwd}}
                <div class="block-item">
                    <input class="password" type="password" 
                    v-model="reNewpwd"
                    :placeholder="$t('safety.CloginRes')">
                    <inputicon class="repassword-icon"></inputicon> 
                </div>
                <div class="login-button">
                    <input type="button" @click="onSubmit" value="确 认">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import header from '../header/header.vue'
import inputIcon from '../publiccommon/input-icon.vue'
import intlTel from '@/components/publiccommon/intlTel.vue'
export default {
    data(){
        return{
            getIntlTelID:1,//国际代码ID
            agreereg: true,
            regphone:'',
            sendAuthCode:true,
            auth_time: 0,
            newpwd:'',
            reNewpwd:''
        }
    },
    components: {
        "v-header":header,
        "inputicon":inputIcon,
        intlTel
    },
    methods:{
        onSubmit () {
            this.$validator.validate().then(result => {
                if (!result) {
                    // console.log('please填写完整');
                }else{
                    const _this = this;
                    _this.$router.push({path: '/registerTwo'});
                }
            });
        },
        getIntlTel (idnum) { //获取国际代码id
            // console.log(idnum);
            this.getIntlTelID = idnum;
        },
        getAuthCode:function () {//获取验证码
            if(this.regphone == "" || !/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.regphone)){
                // console.log("请输入正确的手机号");
                this.$message({
                    center: true,
                    message: '请输入正确的手机号码',
                    type: 'error'
                });
            }else{
            // console.log(12);
            // console.log(this.getIntlTelID);
                this.axios.post('apis/personal/v1/user/sendsmsdoc',
                {account:'18002986082',int_code_id:this.getIntlTelID}).then(() => {
                    this.sendAuthCode = false;
                    this.auth_time = 60;
                    var auth_timetimer =  setInterval(()=>{
                        this.auth_time--;
                        if(this.auth_time<=0){
                            this.sendAuthCode = true;
                            clearInterval(auth_timetimer);
                        }
                    }, 1000);
                }).catch((err) => {
                    this.$message.error(err);
                })
            }
            // this.sendAuthCode = false;
            // this.auth_time = 60;
            // var auth_timetimer =  setInterval(()=>{
            //     this.auth_time--;
            //     if(this.auth_time<=0){
            //         this.sendAuthCode = true;
            //         clearInterval(auth_timetimer);
            //     }
            // }, 1000);
        }
    }
}
</script>
<style>
.findpwd{
    padding: 80px;
    box-sizing: border-box;
}
.findpwd .safety-pro-title{
    margin-bottom: 40px;
}
</style>