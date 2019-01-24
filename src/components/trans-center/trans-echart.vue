<template>
    <div class="trans-echart">
        <div class="trans-top trans-echart-top">
            <ul>
                <li>
                    <p>当前购买价格</p>
                    <span class="echart-blue">6646.55</span>
                </li>
                <li>
                    <p>最高价</p>
                    <span class="echart-red">0.825</span>
                </li>
                <li>
                    <p>最低价</p>
                    <span class="echart-green">0.536</span>
                </li>
                <li>
                    <p>买一价</p>
                    <span class="echart-white">0.5231</span>
                </li>
                <li>
                    <p>卖一价</p>
                    <span class="echart-white">0.1562</span>
                </li>
                <li>
                    <p>成交量</p>
                    <span class="echart-white">1109.25</span>
                </li>
                <li>
                    <p>日涨跌</p>
                    <span class="echart-white">0.1125</span>
                </li>
            </ul>
        </div>
        <div class="trans-echart-wapper">
            <!-- <img src="../../assets/images/echart.png" alt=""> -->
            <echarts></echarts>
        </div>
    </div>
</template>

<script>
import echarts from '../trans-center/echarts.vue'

export default {
    components:{
        echarts
    }
}
</script>

<style scoped>
.trans-echart{
    display: inline-block;
    width: 890px;
    height:500px;
    margin-left: 10px;
    background-color: #0A0F2D;
}
.trans-echart-top{
    padding: 10px;
    box-sizing: border-box;
}
.trans-echart-top ul{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.trans-echart-top li{
    flex: 1;
    text-align: center;
    line-height: 1.5;
}
.trans-echart-wapper img{
    width: 890px;
    height: 440px;
}
</style>