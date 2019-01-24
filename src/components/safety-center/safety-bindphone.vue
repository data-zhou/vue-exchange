<template>
    <div class="safety-pro-wrapper">
        <div class="safety-pro-title">
            <span>{{ $t("safety.bindPhone") }}</span>
        </div>
        <div class="safety-changelogin">
            <form class="safety-form" action="">
                <div class="block-item">
                    <input class="password intlPhone" type="text" 
                    onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"
                    v-validate="'required|phone'" name="phone" v-model="bindphone"
                    :placeholder="$t('safety.bindNewPhone')">
                    <span class="veetips abcdef" v-show="errorBags.has('phone')">
                        {{ errorBags.first('phone')}}
                    </span>
                    <inputicon class="phone-icon"></inputicon> 
                    <div class="intlTel-warpper">
                        <intlTel v-on:intlTelID = "getIntlTel"></intlTel>
                    </div>
                </div>
                <div class="safety-bindphone-test">
                    <p>{{ $t("safety.bindCurr") }}：<span>{{userPhone}}</span>{{ $t("safety.bindTake") }}</p>
                </div>
                <div class="block-item">
                    <input class="code" type="text" 
                    v-validate="'required'" name="code" v-bind="codeNum"
                    onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"
                    :placeholder="$t('safety.bindCode')">
                    <span class="veetips" v-show="errorBags.has('code')">
                        {{ errorBags.first('code')}}
                    </span>
                    <inputicon class="regcode-icon"></inputicon>
                    <div class="codenum">
                        <span v-show="sendAuthCode" 
                        @click="getCode"
                        class="auth_text auth_text_blue">{{ $t("register.getSms") }}</span>
                        <span v-show="!sendAuthCode" class="auth_text"> 
                        <span class="auth_text_blue">{{auth_time}} </span> {{ $t("register.getSmsTime") }}</span>
                    </div>
                </div>
                <div class="login-button">
                    <input type="button" @click="changeBind" :value="$t('safety.bindBtn')">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import safeinputIcon from '@/components/publiccommon/input-icon.vue'
import intlTel from '@/components/publiccommon/intlTelGet.vue'
import Cookies from 'js-cookie'
export default {
    components: {
        "inputicon":safeinputIcon,
        intlTel
    },
    data() {
        return {
            getIntlTelID:86,//国际代码ID
            bindphone:'',
            sendAuthCode:true,
            auth_time: 0,
            codeNum:'',
            userPhone:Cookies.get("user"),
            token:Cookies.get("loginToken")
        };
    },
    mounted() {
        
    },
    methods: {
        changeBind () {
            this.$validator.validate().then(result => {
                if (!result) {
                    return;
                }
                // console.log(this.getIntlTelID);
                // console.log(this.bindphone);
                // console.log(this.token);
                //v1/user/updateaccount?token=RF0I*E--MGTW1_2_1A288*GSEYE7R4&code=0356&int_code=86&newaccount=13538195195
                this.axios.put('apis/personal/v1/user/updateaccount?token=' + this.token 
                + '&code=' + this.codeNum 
                + '&int_code=' + this.getIntlTelID 
                + '&newaccount=' + this.bindphone
                ).then((response) => {
                    const obj = response.data;
                    // console.log(obj);
                    if(obj.code == 0){
                        // console.log('success')
                    }else{
                        // this.$message.error(obj.msg)
                    }
                    
                }).catch((err) => {
                    this.$message.error(err);
                })
                
                
            });
        },
        getIntlTel (idnum) { //获取国际代码id
            this.getIntlTelID = idnum;
        },
        getCode() {//获取验证码
            this.axios.post('apis/personal/v1/user/sendsmsdoc?type=2&account=' + this.userPhone)
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
                }else{
                    this.$message.error(obj.msg)
                }
                
            }).catch((err) => {
                this.$message.error(err);
            })
        }
    }
}
</script>

<style>
.safety-bindphone-test{
    line-height: 2;
    margin-bottom: 30px;
    color:#333;
}
.safety-bindphone-test span{
    padding-left: 10px;
}
</style>