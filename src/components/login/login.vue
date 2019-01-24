<template>
    <div class="login">
        <v-header ref="setState"></v-header>
        <div class="login-wrapper box-shadow">
            <h2>{{ $t("login.welcome") }}</h2>
            <form class="login-form" action="">
                <div class="block-item">
                    <input class="phone intlPhone" type="text" :placeholder="$t('login.phoneNum')" 
                    onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');"
                    v-validate="'required|phone'" name="phone" v-model="loginPhone">
                    <span class="veetips" v-show="errorBags.has('phone')">
                        {{ errorBags.first('phone')}}
                    </span>
                    <inputicon class="phone-icon"></inputicon> 
                    <div class="intlTel-warpper">
                        <intlTel v-on:intlTelID = "getIntlTel"></intlTel>
                    </div>
                    <span class="veetips" v-model="phoneTip">{{phoneTip}}</span>
                </div>
                <div class="block-item">
                    <input class="password" type="password" :placeholder="$t('login.password')"
                    v-validate="'required|regpassword'" name="regpassword" v-model="loginPassword">
                    <span class="veetips" v-show="errorBags.has('regpassword')">
                        {{ errorBags.first('regpassword')}}
                    </span>
                    <inputicon class="password-icon"></inputicon> 
                    <span class="veetips" v-model="passwordTip">{{passwordTip}}</span>
                </div>
                <div class="login-button">
                    <input type="button" @click="loginSubmit" :value="$t('login.loginSubmit')">
                </div>
            </form>
            <div class="login-form-foot">
                <ul>
                    <li>
                        <router-link to="/findpwd">{{ $t("login.forget") }}</router-link>
                    </li>
                    <li>
                        <router-link to="/register">{{ $t("login.registerLink") }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import header from '@/components/header/header.vue'
import inputIcon from '@/components/publiccommon/input-icon.vue'
import intlTel from '@/components/publiccommon/intlTelGet.vue'
import Cookies from 'js-cookie'
export default {
    components: {
        "v-header":header,
        "inputicon":inputIcon,
        intlTel
    },
    data(){
        return{
            loginPhone:'',
            loginPassword:'',
            passwordTip:'',
            phoneTip:'',
            getIntlTelID:'86',//国际代码ID
        }
    },
    methods:{
        loginSubmit () {
            this.$validator.validate().then(result => {
                if (!result) {
                    return;
                }
                //登录事件请求
                this.axios.post('apis/personal/v1/user/login?type=web&int_code=' + this.getIntlTelID
                + '&account=' + this.loginPhone
                + '&password=' + this.loginPassword)
                .then((response) => {
                    const obj = response.data;
                    if(obj.code == 0){
                        this.phoneTip = '';
                        this.passwordTip = '';
                        if(!obj.data.tradepwd){//如果没设置交易密码，则跳去设置交易密码
                            this.$router.push({
                                path: '/registerTwo',
                                query:{
                                    phoneNum:this.loginPhone
                                }
                            });
                        }else if(!obj.data.idcard){
                            this.$router.push({//如果没设置实名认证，则跳去设置实名认证
                                path: '/registerThree',
                                query:{
                                    phoneThreeNum:this.loginPhone
                                }
                            });
                        }else{
                            const token = encodeURIComponent(obj.data.token);
                            Cookies.set('loginToken', token, {expires: 1});//设置登录token
                            Cookies.set('user', this.loginPhone, {expires: 1});//设置用户
                            //操作子组件中的方法
                            this.$refs.setState.setLoginState();//显示用户
                            this.$router.push({path: '/'});
                        }
                        
                    }else if(obj.code == 1007){
                        this.phoneTip = '';
                        this.passwordTip = this.$t("hook.passwordTip1007");
                    }else if(obj.code == 2006){
                        this.passwordTip = '';
                        this.phoneTip = this.$t("hook.phoneTip2006");
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
        }
    }
}
</script>

<style>
.login-wrapper{
    width: 1000px;
    margin:100px auto;
    border-radius: 5px;
    padding: 100px 0;
    background-color: #fff;
}
.login-wrapper h2{
    text-align: center;
    line-height: 2;
    font-size: 20px;
    color:#333752;
    margin-bottom: 50px;
}
.login-form{
    width: 380px;
    text-align: center;
    margin:0 auto;
}
.block-item{
    width: 380px;
    height:38px;
    position: relative;
    margin-bottom: 30px;
    border:1px solid #ccc;
    border-radius: 5px;
    /* overflow: hidden; */
}
.block-item input{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-left: 38px;
    padding-right:10px;
    box-sizing: border-box;
    border-radius: 5px;
    color:#666;
}
.veetips{
    display: inline-block;
    width:300px;
    position: absolute;
    left: 100%;
    top: 0;
    line-height: 38px;
    padding-left: 10px;
    text-align: left;
    color:#FC5558;
}
.block-item .intlPhone{
    padding-left:150px ;
}
.block-item .code{
    padding-right: 130px;
}
.phone-icon{
    background:url('../../assets/images/phone-icon.png') no-repeat;
}
.password-icon{
    background:url('../../assets/images/password-icon.png') no-repeat;
}
.regcode-icon{
    background:url('../../assets/images/code-icon.png') no-repeat;
}
.codenum{
    width: 150px;
    height:38px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #f1f1f1;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.login-button{
    width: 100%;
    height:100%;
    border-radius: 4px;
    overflow: hidden;
}
.login-button input{
    width: 100%;
    line-height: 38px;
    color:#fff;
    background-color: #333752;
    cursor: pointer;
    border-radius: 4px;
}
.login-button input:hover{
    background-color: #626b89;
}
.login-form-foot{
    width: 380px;
    margin:0 auto;
    padding:20px 0;
}
.login-form-foot ul{
    display: flex;
}
.login-form-foot ul li{
    flex:1;
}
.login-form-foot ul li:last-of-type{
    text-align: right;
}
.login-form-foot ul li a{
    padding:15px 0;
    color:#333752;
}
.login-form-foot ul li a:hover{
    text-decoration: underline;
}
</style>