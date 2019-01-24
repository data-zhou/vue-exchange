<template>
    <div class="safety">
    <v-header></v-header>
        <div class="safety-wrapper box-bgshadow">
            <el-tabs v-model="activeName">
                <el-tab-pane label="账户预览" name="first"><tabs1></tabs1></el-tab-pane>
                <el-tab-pane label="实名认证" name="second"><tabs2></tabs2></el-tab-pane>
                <el-tab-pane label="登陆密码" name="third"><tabs3></tabs3></el-tab-pane>
                <el-tab-pane label="交易密码" name="fourth"><tabs4></tabs4></el-tab-pane>
                <el-tab-pane label="绑定手机" name="fivth"><tabs5></tabs5></el-tab-pane>
                <el-tab-pane label="登录日志" name="six"><tabs6></tabs6></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import header from '../header/header.vue'
import tabs1 from '../safety-center/safety-pre.vue'
import tabs2 from '../safety-center/safety-auth.vue'
import tabs3 from '../safety-center/safety-changelogin.vue'
import tabs4 from '../safety-center/safety-trans-password.vue'
import tabs5 from '../safety-center/safety-bindphone.vue'
import tabs6 from '../safety-center/safety-log.vue'
 
export default {
    name:'safety',
    components: {
        "v-header":header,
        tabs1,
        tabs2,
        tabs3,
        tabs4,
        tabs5,
        tabs6
    },
    data (){
        return {
            activeName: this.$route.query.tabView,
        }
    },
    mounted:function(){
        if(this.activeName == false){
            this.activeName='first'
        }
    },
    methods: {
        tabChange:function(tab){
            this.tabView = tab;
        }
    }

}
</script>
<style>
.safety-wrapper .el-tabs__nav{
    width:100%;
    display: flex;
}
.safety-wrapper .el-tabs__item{
    padding: 0;
    flex:1;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    text-align: center;
    color:#fff;
    background-color:#333752;
}
.safety-wrapper .el-tabs__item:hover{
    background-color:#38407b; 
}
.safety-wrapper{
    margin-top: 40px;
    padding-bottom: 80px;
}
.safety-nav ul{
    height: 70px;
    display: flex;
    background-color: #ccc;
    justify-content: center;
    align-items: center;
}
.safety-nav li{
    flex: 1;
    line-height: 70px;
    font-size: 16px;
    text-align: center;
    color:#fff;
    background-color:#333752;
    cursor:pointer;
}
.safety-nav li:hover{
    background-color:#38407b;
}
.safety-nav .safetycur{
    /* color:#5877FF; */
    background-color: #38407b;
}
.safety-pro-wrapper{
    padding: 40px 80px;
}
.safety-pro-title{
    padding: 10px 0;
}
.safety-pro-title span{
    display: inline-block;
    font-size: 16px;
    border-bottom: 4px solid #333752;
}
</style>