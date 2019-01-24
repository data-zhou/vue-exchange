<template>
    <div class="trans-new-price">
        <div class="trans-top trans-details-top">
            <h3>{{ $t("trans.newPrice") }}</h3>
            <div class="trans-top-change">
                <span class="coin-btc">15.50475189<i class="pl5 btc-unit">BTC</i></span>
                <span class="coin-cny">≈20.3655586<i class="pl5 cny-unit">CNY</i></span>
            </div>
        </div>
        <div class="trans-asset-sess trans-new-price-mt40">
            <table>
                <thead>
                    <th>{{ $t("trans.price") }}</th>
                    <th>{{ $t("trans.number") }}</th>
                    <th>{{ $t("trans.total") }}</th>
                </thead>
                <tbody>
                    <tr v-for="(assetList,index) in transAssetList" :key="index">
                        <td><i>●</i>{{ assetList.assetnum1 }}</td>
                        <td>{{ assetList.assetnum2 }}</td>
                        <td>{{ assetList.assetnum3 }}</td>
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
                {assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"}
            ]
        }
    }
}
</script>

<style>
.trans-new-price{
    display: inline-block;
    width: 300px;
    vertical-align: top;
    background-color: #0A0F2D;
}
.trans-new-price-mt40{
    margin-top: 40px;
}
</style>