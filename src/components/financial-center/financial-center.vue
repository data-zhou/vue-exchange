<template>
    <div class="financial">
    <v-header></v-header>
        <div class="safety-wrapper box-bgshadow">
            <div class="safety-nav">
                <ul>
                    <li :class="{safetycur:flag}" @click="flag=true">{{ $t("financial.myProperty") }}</li>
                    <li :class="{safetycur:!flag}" @click="flag=false">{{ $t("financial.tradeAdmin") }}</li>
                </ul>
            </div>
            <div class="financial-warpper" v-if="flag">
                <el-tabs v-model="activeName" >
                    <el-tab-pane :label="$t('financial.myProperty')" name="first">
                        <myProperty></myProperty>
        <router-link to="/safety?tabView=first">账户预览</router-link><hr />
        <router-link to="/safety?tabView=second">实名认证</router-link><hr />
        <router-link to="/safety?tabView=third">登陆密码</router-link><hr />
        <router-link to="/safety?tabView=fourth">交易密码</router-link><hr />
        <router-link to="/safety?tabView=fivth">绑定手机</router-link><hr />
        <router-link to="/safety?tabView=six">登录日志</router-link><hr />
        <router-link to="/">首页</router-link><hr />
        <button>账户预览</button><hr />
        <button>实名认证</button><hr />
        <button>登录密码</button><hr />
        <button>交易密码</button><hr />
        <button>绑定手机</button><hr />
        <button>登录日志</button>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('financial.toDigitalAsset')" name="second">
                        <toDigital></toDigital>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('financial.outDigitalAsset')" name="third">
                        <outDigital></outDigital>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('financial.outRecord')" name="fourth">
                        <outRecord></outRecord>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('financial.outAddress')" name="fifth">
                        <outAddress></outAddress>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="financial-warpper" v-else="">
                <el-tabs v-model="activeName1">
                    <el-tab-pane :label="$t('financial.tradeTransQqery')" name="first">
                        <transQuery></transQuery>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('financial.tradeEntrust')" name="second">
                        <entrustAdmin></entrustAdmin>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import header from '../header/header.vue'
import myProperty from '../financial-center/my-property.vue'
import toDigital from '../financial-center/to-digital.vue'
import outDigital from '../financial-center/out-digital.vue'
import outRecord from '../financial-center/out-record.vue'
import outAddress from '../financial-center/out-address.vue'
import transQuery from '../financial-center/trans-query.vue'
import entrustAdmin from '../financial-center/entrust-admin.vue'
export default {
    components: {
        "v-header":header,
        myProperty,
        toDigital,
        outDigital,
        outRecord,
        outAddress,
        transQuery,
        entrustAdmin
    },
    data(){
        return {
            flag:true,
            activeName: 'first',
            activeName1: 'first'
        }
    },
    methods: {
      
    }
}
</script>
<style>
.financial-warpper{
    padding:50px 100px 0 100px;
    box-sizing: border-box;
}
.financial-warpper .el-tabs__nav-wrap::after{
    height:0px;
}
.financial-warpper .el-tabs__active-bar{
    background-color: #409EFF;
    height:4px;
}
.financial-warpper .el-tabs__item{
    font-size: 16px;
    color:#409EFF;
}
</style>