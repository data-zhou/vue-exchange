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
                    <li>
                        <i>3</i><span>{{ $t("register.naneAuth") }}</span>
                    </li>
                    <li>
                        <i>4</i><span>{{ $t("register.regOver") }}</span>
                    </li>
                </ul>
            </div>
            <div class="register-warning">
                <i class="warning-icon"></i>
                <span>{{ $t("register.twoTips") }}</span>
            </div>
            <form class="register-form" action="">
                <div class="block-item">
                    <input class="password" type="password" :placeholder="$t('register.transPassword')"
                    v-validate="'required|transpassword'" name="transpassword" v-model="transpassword">
                    <span class="veetips" v-show="errorBags.has('transpassword')">
                        {{ errorBags.first('transpassword')}}
                    </span>
                    <inputicon class="password-icon"></inputicon> 
                </div>
                <div class="block-item">
                    <input class="password" type="password" :placeholder="$t('register.retransPassword')"
                    v-model="retranspassword">
                    <span class="veetips tipsHock" v-model="transSetTips">{{transSetTips}}</span>
                    <inputicon class="sure-password-icon"></inputicon> 
                </div>
                <div class="login-button">
                    <input type="button" @click="setTransSubmit" :value="$t('register.twoSubmit')">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import header from '../header/header.vue'
import inputIcon from '../publiccommon/input-icon.vue'
export default {
    name:'register',
    components: {
        "v-header":header,
        "inputicon":inputIcon
    },
    data(){
        return{
            transpassword: '',
            retranspassword: '',
            transSetTips:'',
            TwoPhone:this.$route.query.phoneNum
        }
    },
    methods:{
        //设置交易密码
        setTransSubmit () {
            this.$validator.validate().then(result => {
                if (!result) {
                    return;
                }
                if(this.retranspassword != this.transpassword){
                    this.transSetTips = this.$t("hook.transSetTips");
                    return;
                }
                this.transSetTips = '';
                this.axios.post('apis/personal/v1/user/settingtradepwd?account='+this.TwoPhone 
                + '&onetradepwd=' + this.transpassword
                + '&towtradepwd=' + this.retranspassword)
                .then((response) => {
                    const obj = response.data;
                    if(obj.code == 0){
                        this.$router.push({
                            path: '/registerThree',
                            query:{
                                phoneThreeNum:this.TwoPhone
                            }
                        });
                    }else if(obj.code == 1005){
                        const mess = this.$t("hook.regMessage");
                        const messTit = this.$t("hook.regMessageTit");
                        const meaaBtn = this.$t("hook.regMessageBtn");
                        this.$alert(mess, messTit, {confirmButtonText: meaaBtn});
                    }else{
                        this.$message.error(obj.msg)
                    }
                    
                }).catch((err) => {
                    this.$message.error(err);
                })
            });
        }
    }
}
</script>
<style>
.register-warning{
    width: 380px;
    margin:0 auto 30px auto;
}
.sure-password-icon{
    background:url('../../assets/images/sure-password-icon.png') no-repeat;
}
.warning-icon{
    display: inline-block;
    width: 20px;
    height: 20px;
    background:url('../../assets/images/warning.png') no-repeat;
    background-size: 20px 20px;
    vertical-align: top;
}
.register-warning span{
    padding-left:5px;
    font-size: 16px;
    color:#f00;
}
</style>