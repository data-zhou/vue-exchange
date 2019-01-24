<template>
    <div class="safety-pro-wrapper">
        <div class="safety-pro-title">
            <span>{{ $t("safety.trans") }}</span>
        </div>
        <div class="safety-changelogin">
            <div class="safety-tips">
                <i></i><span class="red">{{ $t("safety.transTips") }}</span>
            </div>
            <form class="safety-form" action="">
                <div class="block-item">
                    <input class="password" type="password" 
                    v-validate="'required|transOld'" name="transOld" 
                    v-model="transOld"
                    :placeholder="$t('safety.CloginOld')">
                    <inputicon class="password-icon"></inputicon> 
                    <span class="veetips" v-show="errorBags.has('transOld')">
                        {{ errorBags.first('transOld')}}
                    </span>
                    <span class="veetips" v-model="transOldTip">{{transOldTip}}</span>
                </div>
                <div class="block-item">
                    <input class="password" type="password"
                    v-validate="'required|transNew'" name="transNew" 
                    v-model="transNew"
                    :placeholder="$t('safety.CloginNew')">
                    <inputicon class="password-icon"></inputicon> 
                    <span class="veetips" v-show="errorBags.has('transNew')">
                        {{ errorBags.first('transNew')}}
                    </span>
                </div>
                <div class="block-item">
                    <input class="password" type="password"
                     name="transReNew" 
                    v-model="transReNew"
                    :placeholder="$t('safety.CloginRes')">
                    <inputicon class="repassword-icon"></inputicon>
                    <span class="veetips" v-model="transReNewTip">{{transReNewTip}}</span>
                </div>
                <div class="login-button">
                    <input type="button" @click="transSubmit" :value="$t('safety.transBtn')">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import safeinputIcon from '../publiccommon/input-icon.vue'
import Cookies from 'js-cookie'
export default {
    components: {
        "inputicon":safeinputIcon
    },
    data(){
        return {
            transOld:'',
            transOldTip:'',
            transNew:'',
            transReNew:'',
            transReNewTip:'',
            token:Cookies.get("loginToken")
        }
    },
    methods:{
        transSubmit () {
            this.$validator.validate().then(result => {
                if (!result) {
                    return;
                }
                if(this.transReNew != this.transNew){
                    this.transReNewTip = this.$t('hook.transSetTips');
                    return;
                }
                //修改交易密码
                this.transReNewTip = '';
                this.axios.put('apis/personal/v1/user/updatetradepwd?token=' + this.token
                + '&oldtradepwd=' + this.transOld
                + '&newtradepwd=' + this.transNew
                ).then((response) => {
                    const obj = response.data;
                    if(obj.code == 0){
                        this.transOldTip = '';
                        const mess = this.$t('hook.setSuccess');
                        this.$message({
                            message: mess,
                            type: 'success'
                        });
                        location.reload();
                    }else if(obj.code == 1011){
                        this.transOldTip = this.$t('hook.transoldpwdError');
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

</style>