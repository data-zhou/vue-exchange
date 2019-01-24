<template>
    <div class="last-price">
        <div class="last-price-top">
            <span class="last-price-top-col">{{ $t("market.newPrice") }}</span>
            <span class="last-price-top-col">15.50475 HUSD</span>
            <span class="">≈20.3655586 CNY</span>
        </div>
        <div class="last-price-cont">
            <table class="table-outCont">
                <thead>
                    <th></th>
                    <th>{{ $t("market.lastPrice") }}</th>
                    <th>{{ $t("market.lastNum") }}</th>
                    <th>{{ $t("market.lastTotal") }}</th>
                </thead>
                <tbody>
                    <tr v-for="(assetList,index) in transAssetList" :key="index">
                        <td class="echart-red">{{ assetList.assetnum0 }}</td>
                        <td>{{ assetList.assetnum1 }}</td>
                        <td>{{ assetList.assetnum2 }}</td>
                        <td>{{ assetList.assetnum3 }}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <th></th>
                    <th>{{ $t("market.lastPrice") }}</th>
                    <th>{{ $t("market.lastNum") }}</th>
                    <th>{{ $t("market.lastTotal") }}</th>
                </thead>
                <tbody>
                    <tr v-for="(assetList,index) in transAssetList2" :key="index">
                        <td class="echart-green">{{ assetList.assetnum0 }}</td>
                        <td>{{ assetList.assetnum1 }}</td>
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
                {assetnum0:"卖1",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"卖2",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"卖3",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"卖4",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"卖5",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"卖6",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"卖7",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"}
            ],
            transAssetList2:[
                {assetnum0:"买1",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"买2",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"买3",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"买4",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"买5",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"买6",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"},
                {assetnum0:"买7",assetnum1:"256.33",assetnum2:"5621.6",assetnum3:"5216455.31"}
            ]
        }
    }
}
</script>

<style>
.last-price-top{
    padding-left: 30px;
}
.last-price-top-col{
    font-size: 18px;
    color:#fff;
    margin-right: 5px;
}

.last-price-top{
    line-height: 60px;
}
.last-price-cont table{
    width: 100%;
}
.last-price-cont thead th{
    line-height: 40px;
    font-size: 16px;
    color:#5877FF;
}
.last-price-cont tbody tr td{
    text-align: center;
    padding: 8px 5px;
    line-height: 1.5;
}
.last-price-cont table{
    margin-bottom: 20px;
}
.table-outCont tr:last-child td{
    padding-bottom: 30px;
}
.table-outCont{
    border-bottom: 1px solid #5877FF;
}
</style>