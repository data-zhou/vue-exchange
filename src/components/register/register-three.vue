<template>
    <div>
        <v-header ref="setState"></v-header>
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
                    <li>
                        <i>4</i><span>{{ $t("register.regOver") }}</span>
                    </li>
                </ul>
            </div>
            <div class="register-warning">
                <i class="warning-icon"></i>
                <span>{{ $t("register.twoTips") }}</span>
            </div>
            <form class="register-form register-form-auth" action="">
                <div class="block-item">
                    <input class="name" type="text" :placeholder="$t('register.regName')"
                    v-validate="'required'" name="truename" v-model="realName">
                    <span class="veetips" v-show="errorBags.has('truename')">
                        {{ errorBags.first('truename')}}
                    </span>
                </div>
                <div class="block-item">
                    <input class="country" type="text" :placeholder="$t('register.regCountry')"
                    v-validate="'required'" name="Country" v-model="countryName">
                    <span class="veetips" v-show="errorBags.has('Country')">
                        {{ errorBags.first('Country')}}
                    </span>
                </div>
                <div class="block-item paper-select">
                    <select name="" id="" v-model="paperType">
                        <option v-for="(option,index) in idtype" :value="option.value">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <div class="block-item">
                    <input class="id-code" type="text" :placeholder="$t('register.regIDnum')"
                    v-validate="'required|pincode'" name="pincode" v-model="IDnum">
                    <span class="veetips" v-show="errorBags.has('pincode')">
                        {{ errorBags.first('pincode')}}
                    </span>
                </div>
                <div class="login-button">
                    <input type="button" @click="AuthSubmit" :value="$t('register.twoSubmit')">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import header from '../header/header.vue'
import Cookies from 'js-cookie'
export default {
    name:'register',
    data(){
        return {
        //   paperType:0,
          threePhone:this.$route.query.phoneThreeNum,//传来的手机好
          realName:'',//真实姓名
          countryName:'',//国家名称
          paperType:1,//身份证还是护照
          IDnum:'',//身份证号
          idtype:[
              {
                  name:this.$t('hook.idCard'),
                  value:1
              },
              {
                  name:this.$t('hook.passport'),
                  value:2
              }
          ]
      }
    },
    components: {
        "v-header":header
    },
    mounted(){

    },
    methods:{
        AuthSubmit () {
            this.$validator.validate().then(result => {
                if (!result) {
                    return;
                }
                this.axios.post('apis/personal/v1/user/verified?account=' + this.threePhone  
                + '&card_id=' + this.IDnum
                + '&real_name=' + this.realName
                + '&info=' + this.countryName
                + '&type=' + this.paperType)
                .then((response) => {
                    const obj = response.data;
                    if(obj.code == 0){
                        // Cookies.set('loginToken', token, {expires: 1});//设置登录token,此处逻辑需待定，
                        //操作子组件中的方法
                        this.$refs.setState.setLoginState();//显示用户
                        this.$router.push({
                            path: '/registerOver',
                            query:{
                                overPhone:this.threePhone,
                                overPaperType:this.paperType,
                                overRealName:this.realName,
                                overIDnum:this.IDnum
                            }
                        });
                    }else if(obj.code == 4002){
                        const mess = this.$t("hook.regAuthMess");
                        const messTit = this.$t("hook.regMessageTit");
                        const meaaBtn = this.$t("hook.regMessageBtn");
                        this.$alert(mess, messTit, {confirmButtonText: meaaBtn});
                    }else{
                        // console.log(obj)
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
.register-form-auth .block-item input{
    padding-left:10px;
}
.paper-select select{
    outline: none;
    width: 100%;
    height: 100%;
    line-height: 38px;
    color:#666;
    border-radius: 5px;
    border:none;
    appearance: none;
    -moz-appearance:none;  
    -webkit-appearance:none;
    padding-left: 10px;
    cursor: pointer;
}
.paper-select:after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 20px;
    top: 10px;
    border-top: 10px solid #666;
    border-left: 10px solid transparent;
    transform: rotate(135deg);
    pointer-events: none;
}
</style>