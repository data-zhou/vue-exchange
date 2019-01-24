<template>
    <div class="last-price">
        <div class="last-price-top">
            <span class="last-price-top-col">{{ $t("market.realTrans") }}</span>
        </div>
        <div class="last-price-cont">
            <table>
                <thead>
                    <th>{{ $t("market.realTime") }}</th>
                    <th>{{ $t("market.realBuySell") }}</th>
                    <th>{{ $t("market.realPrice") }}</th>
                    <th>{{ $t("market.realVolime") }}</th>
                    <th>{{ $t("market.realTotal") }}</th>
                </thead>
                <tbody>
                    <tr v-for="(assetList,index) in transAssetList" :key="index">
                        <td>{{ assetList.assetnum0 }}</td>
                        <td class="echart-green">{{ assetList.assetnum1 }}</td>
                        <td>{{ assetList.assetnum2 }}</td>
                        <td>{{ assetList.assetnum3 }}</td>
                        <td>{{ assetList.assetnum4 }}</td>
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
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"},
                {assetnum0:"17:35:08",assetnum1:"买入",assetnum2:"5621.6",assetnum3:"52455.31",assetnum4:"69855.31"}
            ]
        }
    }
}
</script>

<style>

</style>