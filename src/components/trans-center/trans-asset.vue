<template>
    <div class="trans-asset">
        <div class="trans-top trans-details-top">
            <h3>{{ $t("trans.assetsConversion") }}</h3>
            <div class="trans-top-change">
                <span class="coin-btc">15.50475189<i class="pl5 btc-unit">BTC</i></span>
                <span class="coin-cny">≈20.3655586<i class="pl5 cny-unit">CNY</i></span>
            </div>
        </div>
        <div class="trans-asset-search">
            <h4>{{ $t("trans.marketInfo") }}</h4>
            <div class="trans-asset-search-cont">
                <div class="trans-asset-search-input">
                    <input type="text" :placeholder="$t('trans.searchCoin')">
                    <span class="trans-asset-search-btn"></span>
                </div>
                <div class="trans-asset-change">
                    <i class="trans-asset-change-btn"></i>
                    <span>CNY</span>
                </div>
            </div>
            <div class="trans-asset-store">
                
                <el-tooltip effect="dark" content="点击可以收藏哦" placement="bottom-end">
                    <span></span>
                </el-tooltip>
            </div>
        </div>
        <div class="trans-asset-sess">
            <table>
                <thead>
                    <th>{{ $t("trans.coinType") }}</th>
                    <th>{{ $t("trans.newPrice") }}</th>
                    <th>{{ $t("trans.gain") }}</th>
                </thead>
                <tbody>
                    <tr v-for="(assetList,index) in transAssetList" :key="index">
                        <td><i>●</i>{{ assetList.assetnum1 }}</td>
                        <td>{{ assetList.assetnum2 }}</td>
                        <td class="echart-green">{{ assetList.assetnum3 }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            transAssetList:[
                {assetnum1:"BTC",assetnum2:"9380.00",assetnum3:"+0.5%"},
                {assetnum1:"BTC",assetnum2:"9380.00",assetnum3:"+0.5%"},
                {assetnum1:"BTC",assetnum2:"9380.00",assetnum3:"+0.5%"},
                {assetnum1:"BTC",assetnum2:"9380.00",assetnum3:"+0.5%"},
                {assetnum1:"BTC",assetnum2:"9380.00",assetnum3:"+0.5%"},
                {assetnum1:"BTC",assetnum2:"9380.00",assetnum3:"+0.5%"},
                {assetnum1:"BTC",assetnum2:"9380.00",assetnum3:"+0.5%"}
            ]
        }
    }
}
</script>

<style>
.trans-asset{
    display: inline-block;
    width: 300px;
    vertical-align: top;
    background-color: #0A0F2D;
}
.trans-details-top{
    padding: 6px 10px;
    box-sizing: border-box;
}
.trans-details-top h3{
    line-height: 24px;
    font-size: 14px;
}
.trans-top-change{
    line-height: 24px;
}
.coin-btc{
    margin-right: 10px;
    color:#5877FF;
}
.coin-btc i,.coin-cny i{
    font-size: 10px
}
.trans-asset-search{
    padding:10px;
    box-sizing: border-box;
}
.trans-asset-search h4{
    padding:10px 0;
    line-height: 1.8;
}
.trans-asset-search-input{
    display: inline-block;
    width: 200px;
    height: 30px;
    position: relative;
    vertical-align: top;
}
.trans-asset-search-input input{
    width: 200px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    border:1px solid #5877FF;
    border-radius: 20px;
    background-color:#0A0F2D;
    padding: 0 36px 0 12px;
    box-sizing: border-box;
    color:#AAAFD0;
}
.trans-asset-search-input input::placeholder{
    color:#AAAFD0;
}
.trans-asset-search-btn{
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    right:10px;
    top:0;
    background:url('../../assets/images/trenssearch.png') no-repeat center center;
    background-size: 20px 20px;
    cursor: pointer;
}
.trans-asset-change{
    display: inline-block;
    padding-left: 10px;
    vertical-align: top;
}
.trans-asset-change-btn{
    display: inline-block;
    width: 30px;
    height: 30px;
    background:url('../../assets/images/zhuanhuan.png') no-repeat center center;
    background-size: 20px 20px;
    cursor: pointer;
}
.trans-asset-change span{
    line-height: 30px;
    vertical-align: top;
}
.trans-asset-store{
    padding: 10px 15px 10px 0;
    text-align: right;
    cursor: pointer;
}
.trans-asset-store span{
    display: inline-block;
    width: 20px;
    height: 20px;
    background:url('../../assets/images/soucang.png') no-repeat center center;
    background-size: 20px 20px;
}
.trans-asset-store span:hover{
    background:url('../../assets/images/soucangafter.png') no-repeat center center;
    background-size: 20px 20px;
}
.trans-asset-sess table{
    width: 100%;
}
.trans-asset-sess thead th{
    height:40px;
    color:#5877FF;
    background-color: #333752;
}
.trans-asset-sess tbody tr{
    border-bottom: 1px solid #030123;
    cursor: pointer;
}
.trans-asset-sess tbody tr:last-child{
    border-bottom: none;
}
.trans-asset-sess tbody tr:hover{
    background-color: #171E43;
}
.trans-asset-sess tbody tr td{
    text-align: center;
    padding:8px 5px;
    line-height: 1.5;
}
</style>