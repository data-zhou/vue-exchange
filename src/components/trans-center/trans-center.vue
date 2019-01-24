<template>
    <div id="trans-center">
    <v-header></v-header>
        <div class="trans-wapper transcenter-mt10">
            <asset></asset>
            <div class="coin-means-warpper">
                <iframe id="bdIframe" ref="iframe" src="./kline/kline.html" 
                frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
        <div class="trans-wapper">
            <newPrice></newPrice>
            <div class="coin-means-warpper">
                <el-tabs v-model="tabName">
                    <el-tab-pane :label="$t('trans.preaent')" name="coinMeans">
                        <coinMeans></coinMeans>
                    </el-tab-pane>
                    <el-tab-pane :label="$t('trans.market')" name="coinMeansNow">
                        <coinMeansNow></coinMeansNow>
                    </el-tab-pane>
                </el-tabs>
                <!-- <ul class="coin-means-warpper-nav trans-top">
                    <li @click.prevent="comName = 'coinMeans' "><span>{{ $t("trans.preaent") }}11</span></li>
                    <li @click.prevent="comName = 'coinMeansNow' "><span>{{ $t("trans.market") }}22</span></li>
                </ul>
                <div class="coin-wrapper">
                    <component :is="comName"></component>
                </div> -->
            </div>
        </div>
        <div class="trans-wapper">
            <newRecord></newRecord>
        </div>
        <div class="trans-wapper">
            <currentDele></currentDele>
        </div>
        <div class="trans-wapper">
            <historyDele></historyDele>
        </div>
        <div class="trans-wapper">
            <transExchange></transExchange>
        </div>
    <v-footer></v-footer>
    </div>
</template>
<script>
import header from '../header/header.vue'
import footer from '../footer/footer.vue'
import asset from '../trans-center/trans-asset.vue'
import newPrice from '../trans-center/new-price.vue'
import coinMeans from '../trans-center/coin-means.vue'
import coinMeansNow from '../trans-center/coin-means-now.vue'
import newRecord from '../trans-center/new-record.vue'
import currentDele from '../trans-center/current-dele.vue'
import historyDele from '../trans-center/history-dele.vue'
import transExchange from '../trans-center/trans-exchange.vue'
export default {
    components: {
        "v-header":header,
        "v-footer":footer,
        asset,
        newPrice,
        coinMeansNow,
        coinMeans,
        newRecord,
        currentDele,
        historyDele,
        transExchange
    },
    data:function() {
        return {
            tabName:'coinMeans'
        }
    },
    mounted(){
        /*iframe-宽高自适应显示*/
        const oIframe = document.getElementById('bdIframe');
        oIframe.style.width = 900 + 'px'; //数字是页面布局宽度差值,890的时候，语言选择消失，不知为何
        oIframe.style.height = 600 + 'px'; //数字是页面布局高度差
    }
}
</script>
<style>
#trans-center{
    background-color: #030123;
}
.trans-wapper{
    width: 1200px;
    margin:0 auto 20px auto;
    color:#AAAFD0;
    clear: both;
}
.transcenter-mt10{
    margin-top: 10px;
}
.coin-means-warpper{
    width: 890px;
    margin-left: 10px;
    display: inline-block;
    overflow: hidden;
    background-color: #0A0F2D;
}
.coin-means-warpper .el-tabs__nav-wrap{
    height:60px;
    padding-left: 30px;
    background-color: #333752;
}
.coin-means-warpper .el-tabs__nav{
    margin-top: 8px;
}
.coin-means-warpper .el-tabs__nav-wrap::after{
    height: 0;
}
.coin-means-warpper .el-tabs__item{
    height: 34px;
    color: #AAAFD0;
}


.coin-means-warpper-nav li{
    display: inline-block;
    height:100%;
    padding: 15px;
    box-sizing: border-box;
    cursor: pointer;
}
.coin-means-warpper-nav li:hover span{
    color:#5877FF;
    border-bottom:3px solid #5877FF;
}
.coin-means-warpper-nav li span{
    padding: 0 10px 8px 10px;
    line-height: 30px;

}
</style>