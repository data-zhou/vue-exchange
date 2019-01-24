<template>
    <div class="notice-details">
        <v-header></v-header>
        <div class="notice-cont box-bgshadow">
            <div class="safety-nav">
                <ul>
                    <li>公告详情</li>
                </ul>
            </div>
            <div class="notice-details notice-warpper">
                <div class="safety-pro-title">
                    <span>
                        <router-link class="backNotice" to="/noticeList" >公告</router-link>
                        |<i class="backTitle" >文章中心</i>
                    </span>
                </div>
                <div class="noticeDetails-warpper">
                    <span class="noticeDetails-title" >公告标题关于啥啥啥</span>
                        <span class="noticeDetails-time" >时间2019-01-25 16:30:45</span>
                </div>
                <div class="notice-doc">
                    1 用户点击币币交易平台中心注册页面的同意注册按钮并完成注册程序、获得币币交易平台中心账号和密码时，视为用户与币币交易平台中心
                    已达成《币币交易平台中心用户协议》(下称"本协议"），就用户进入币币交易平台中心使用币币交易平台中心相应的交易服务达成本协议的全部约定。
                    <br />
                    2 币币交易平台中心及用户均已认真阅读本《币币交易平台中心用户协议》中全部条款及币币交易平台中心发布的法律声明和操作规则的内容，
                    对本协议及前述服务条款、法律声明和操作规则均已知晓、理解并接受，同意将其作为确定双方权利义务的依据。币币交易平台中心
                    《法律声明》为本协议的必要组成部分，用户接受本协议的同时即视为接受币币交易平台中心《法律声明》的全部内容。本协议内容包括
                    本协议正文以及币币交易平台中心已经发布的或将来可能发布的各类规则、声明、说明等。所有规则、声明、说明等均为协议不可分割的一部分，
                    与协议正文具有同等法律效力。
                    <br />
                    一、定义条款易平台中心达成数字资产交易而向币币交易平台中心支付的交易服务费用。
                    <br />
                    二、用户注册<br />
                    2.1 注册资格<br />
                    用户保管其币币交易平台中心账号及密码、资金密码以及手机接收的手机验证码的安全。用户对使用其币币交易平台中心账号和密码、资金密码、
                    手机验证码进行的任何操作和后果承担全部责任。当用户发现币币交易平台中心账号、密码、或资金密码、验证码被未经其授权的第三方使用，
                    或存在其他账号安全问题时，应立即有效通知币币交易平台中心，要求币币交易平台中心暂停该币币交易平台中心账号的服务。币币交易平台中心
                    有权在合理时间内对用户的该等请求采取行动，但对币币交易平台中心采取行动前用户已经遭受的损失不承担任何责任。用户在未经币币交易
                    平台中心同意的情况下不得将币币交易平台中心账号以赠与、借用、租用、转让或其他方式处分给他人。<br />
                    3.2.3 用户应当遵守币币交易平台中心不时发布和更新的用户协议以及其他服务条款和操作规则。<br />
                    四、交易规则<br />
                    用户承诺在其进入币币交易平台中心交易，通过币币交易平台中心与其他用户进行数字资产交易的过程中良好遵守如下币币交易平台中心
                    数字资产交易规则。<br />
                    4.1 浏览交易信息<br />
                    用户在币币交易平台中心浏览数字资产交易信息时，应当仔细阅读交易信息中包含的全部内容，包括但不限于数字资产价格、委托量、手续费、
                    买入或卖出方向， 用户完全接受交易信息中包含的全部内容后方可点击按钮进行交易。<br />
                    4.2 充值<br />
                    用户了解并同意币币交易平台中心会时时更新可使用的充值的法币币种，目前支持人民币、美元和数字资产的充值。<br />
                    4.3 提现<br />
                    用户了解并同意，用户有权随时提取在币币交易平台中心账户中的余额，包括法币以及数字资产，但需向币币交易平台中心支付相应的提现手续费用。<br />
                    4.4 提交委托<br />
                </div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
import header from '../header/header.vue'
import footer from '../footer/footer.vue'
export default {
    name:'index',
    components: {
        "v-header":header,
        "v-footer":footer
    },
    data(){
        return {      
            noticeID:this.$route.query.noticeID
        }
    },
    mounted () {
        
    },
    methods:{

    }
}
</script>
<style>
.backNotice{
    color:#666;
    padding-right:5px;
}
.backNotice:hover{
    color:#5877ff;
}
.backTitle{
    padding-left: 5px;
}
.noticeDetails-warpper{
    padding:10px 0;
    border-bottom:1px dashed #333;
    color:#333;
    font-size: 18px;
    line-height: 50px;
    margin-bottom: 50px;
}
.noticeDetails-warpper .noticeDetails-time{
    float: right;
    font-size: 14px;
}
.notice-doc{
    padding: 0 50px;
}
</style>