<template>
<div class="market-bg">
    <div class="e-header">
        <div class="head">
            <div class="logo">
                <router-link to="/home">
                    <img src="../../assets/images/logo.png" alt="">
                </router-link>
            </div>
            <div class="select-icon-type">
                <el-select v-model="value" >
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="trans-top echart-top">
                <ul>
                    <li>
                        <p class="echart-tit">{{ $t("market.currPrice") }}</p>
                        <span class="echart-blue">6646.55</span>
                    </li>
                    <li>
                        <p class="echart-tit">{{ $t("market.maxPrice") }}</p>
                        <span class="echart-red">0.825</span>
                    </li>
                    <li>
                        <p class="echart-tit">{{ $t("market.minPrice") }}</p>
                        <span class="echart-green">0.536</span>
                    </li>
                    <li>
                        <p class="echart-tit">{{ $t("market.buyPrice") }}</p>
                        <span class="echart-white">0.5231</span>
                    </li>
                    <li>
                        <p class="echart-tit">{{ $t("market.sellPrice") }}</p>
                        <span class="echart-white">0.1562</span>
                    </li>
                    <li>
                        <p class="echart-tit">{{ $t("market.volume") }}</p>
                        <span class="echart-white">1109.25</span>
                    </li>
                    <li>
                        <p class="echart-tit">{{ $t("market.highsLows") }}</p>
                        <span class="echart-white">0.1125</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="iframwarpper">
        <iframe id="bdIframe" ref="iframe" src="./kline/kline.html" 
         frameborder="0" scrolling="no"></iframe>
    </div>
    <div class="trans-wapper market-warpper">
        <div class="market-warpperli market-lastPrice">
            <lastPrice></lastPrice> 
        </div>
        <div class="market-warpperli market-realTrans">
            <realTrans></realTrans>
        </div>
    </div>
    <v-footer></v-footer>
</div>
</template>
<script>
import footer from '../footer/footer.vue'
import lastPrice from '../market/last-price.vue'
import realTrans from '../market/real-trans.vue'
export default {
    name:'market',
    components: {
        "v-footer":footer,
        lastPrice,
        realTrans
    },
    data() {
      return {
        bdTokenUrl: '',
        options: [{
          value: '比特币（BTC）',
          label: '比特币（BTC）'
        },
        {
          value: 'KC币（kc）',
          label: 'KC币（kc）'
        }, {
          value: '猫币（kittyCoin）',
          label: '猫币（kittyCoin）'
        }],
        value: '比特币（BTC）'
      }
    },
    mounted(){
        /**
         * iframe-宽高自适应显示   
         */
        const oIframe = document.getElementById('bdIframe');
        // const deviceWidth = document.documentElement.clientWidth;
        // const deviceHeight = document.documentElement.clientHeight;
        oIframe.style.width = 1200 + 'px'; //数字是页面布局宽度差值
        oIframe.style.height = 600 + 'px'; //数字是页面布局高度差
    }
}
</script>
<style>
.iframwarpper{
    width: 1200px;
    height: 600px;
    margin:20px auto;
    color: #AAAFD0;
    clear: both;
}
.market-bg{
    background-color: #030123;
}
.e-header{
    width: 100%;
    height:60px;
    background-color:#171e43;
    color:#fff;
}
.select-icon-type{
    width: 200px;
    float: left;
    margin-left: 40px;
}
.select-icon-type .el-select .el-input__inner{
    height: 40px;
    background-color: rgba(100, 36, 36, 0);
    border-color: #409EFF;
    color: #fff;
}
.select-icon-type .el-select .el-input .el-select__caret{
    color:#fff;
}
.echart-top{
    width:760px;
    display: inline-block;
    padding: 10px;
    box-sizing: border-box;
}
.echart-top ul{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.echart-top li{
    flex: 1;
    text-align: center;
    line-height: 1.5;
}
.market-warpper{
    display: flex;
}
.market-warpperli{
    flex: 1;
    background-color: #0a0f2d;
}
.market-lastPrice{
    margin-right: 20px;
}
</style>