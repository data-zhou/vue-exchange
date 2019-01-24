<template>
    <div class="safety-pro-wrapper">
        <div class="safety-pro-title">
            <span>{{ $t("safety.Clogin") }}</span>
        </div>
        <div class="safety-changelogin">
            <div class="safety-tips">
                <i></i><span class="red">{{ $t("safety.CloginTips") }}</span>
            </div>
            <form class="safety-form" action="">
                <div class="block-item">
                    <input class="password" type="password" 
                    v-validate="'required|oldpassword'" name="oldpassword"
                    v-model="oldpwd"
                    :placeholder="$t('safety.CloginOld')">
                    <inputicon class="password-icon"></inputicon> 
                    <span class="veetips" v-show="errorBags.has('oldpassword')">
                        {{ errorBags.first('oldpassword')}}
                    </span>
                    <span class="veetips" v-model="oldpwdTip">{{oldpwdTip}}</span>
                </div>
                <div class="block-item">
                    <input class="password" type="password" 
                    v-validate="'required|newpassword'" name="newpassword"
                    v-model="newpwd"
                    :placeholder="$t('safety.CloginNew')">
                    <inputicon class="password-icon"></inputicon> 
                    <span class="veetips" v-show="errorBags.has('newpassword')">
                        {{ errorBags.first('newpassword')}}
                    </span>
                </div>
                <div class="block-item">
                    <input class="password" type="password" 
                    v-validate="'required|reNewpassword'" name="reNewpassword"
                    v-model="reNewpwd" 
                    :placeholder="$t('safety.CloginRes')">
                    <inputicon class="repassword-icon"></inputicon>
                    <span class="veetips" v-show="errorBags.has('reNewpassword')">
                        {{ errorBags.first('reNewpassword')}}
                    </span>
                    <span class="veetips" v-model="reNewpwdTip">{{reNewpwdTip}}</span>
                </div>
                <div class="login-button">
                    <input type="button" @click="changeLogin" :value="$t('safety.CloginBtn')">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import safeinputIcon from '@/components/publiccommon/input-icon.vue'
import Cookies from 'js-cookie'
export default {
    components: {
        "inputicon":safeinputIcon
    },
    data(){
        return {
            oldpwd:'',
            oldpwdTip:'',
            newpwd:'',
            newpwdTip:'',
            reNewpwd:'',
            reNewpwdTip:'',
            token:Cookies.get("loginToken")
        }
    },
    methods:{
        changeLogin () {
            this.$validator.validate().then(result => {
                if (!result) {
                    return;
                }
                if(this.reNewpwd != this.newpwd){
                    this.reNewpwdTip = this.$t('hook.transSetTips');
                    return;
                }
                //修改登录密码
                this.reNewpwdTip = '';
                this.axios.post('apis/personal/v1/user/findpwd?token=' + this.token 
                + '&newpassword=' + this.newpwd
                + '&oldpassword=' + this.oldpwd
                ).then((response) => {
                    const obj = response.data;
                    if(obj.code == 0){
                        this.oldpwdTip = '';
                        const mess = this.$t('hook.setSuccess');
                        this.$message({
                            message: mess,
                            type: 'success'
                        });
                        location.reload();
                    }else if(obj.code == 1011){
                        this.oldpwdTip = this.$t('hook.oldpwdError');
                    }else{
                        this.$message.error(obj.msg);
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

.repassword-icon{
    background:url('../../assets/images/sure-password-icon.png') no-repeat;
}
.safety-changelogin{
    margin-top:30px;
}
.safety-form{
    width: 380px;
    margin:30px auto 0 auto;
}
</style>