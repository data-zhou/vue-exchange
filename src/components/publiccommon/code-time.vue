<template>
    <div class="code-time">
        <span v-show="sendAuthCode" 
        @click="getAuthCode"
        class="auth_text auth_text_blue">获取验证码</span>
        <span v-show="!sendAuthCode" class="auth_text"> 
            <span class="auth_text_blue">{{auth_time}} </span> 秒后重新发送验证码</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
            auth_time: 0, /*倒计时 计数器*/
        }
    },
    methods: {
        getAuthCode:function () {
            this.sendAuthCode = false;
            this.auth_time = 60;
            var auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                    this.sendAuthCode = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        }
    }
}
</script>
<style>

</style>


