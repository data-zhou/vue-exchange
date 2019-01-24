<template>
    <div class="mar-price price-place">
        <div class="price-left">
            <div class="trans-top-change mar-price-canu-use">
                <span>{{ $t("trans.usable") }}：</span>
                <span class="coin-btc">15.50475189<i class="pl5 btc-unit">BTC</i></span>
                <span class="coin-cny">≈20.3655586<i class="pl5 cny-unit">CNY</i></span>
            </div>
            <div class="price-item">
                <em>{{ $t("trans.buyPrice") }}</em>
                <input type="text" :placeholder="$t('trans.buyPlaceholder')">
            </div>
            <div class="price-item">
                <em>{{ $t("trans.buyNum") }}</em>
                <input type="text" :placeholder="$t('trans.buyNum')">
            </div>
            <div class="price-item">
                <em>{{ $t("trans.transTotal") }}</em>
                <span class="echart-blue">500 EG</span>
            </div>
            <div class="price-item mar-price-btn">
                <em></em>
                <input class="mar-price-btn-green" type="button" :value="$t('trans.buyBtn')">
            </div>
        </div>
        <div class="price-right">
            <div class="trans-top-change mar-price-canu-use">
                <span>{{ $t("trans.usable") }}：</span>
                <span class="coin-btc">15.50475189<i class="pl5 btc-unit">BTC</i></span>
                <span class="coin-cny">≈20.3655586<i class="pl5 cny-unit">CNY</i></span>
            </div>
            <div class="price-item">
                <em>{{ $t("trans.sellPrice") }}</em>
                <input type="text" :placeholder="$t('trans.sellPlaceholder')">
            </div>
            <div class="price-item">
                <em>{{ $t("trans.sellNum") }}</em>
                <input type="text" :placeholder="$t('trans.sellNum')">
            </div>
            <div class="price-item">
                <em>{{ $t("trans.sellNum") }}</em>
                <input type="text" :placeholder="$t('trans.sellNum')">
            </div>
            <div class="price-item">
                <em>{{ $t("trans.transTotal") }}</em>
                <span class="echart-blue">500 EG</span>
            </div>
            <div class="price-item mar-price-btn">
                <em></em>
                <input class="mar-price-btn-red" type="button" :value="$t('trans.sellBtn')">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
.price-place input::placeholder{
    color:#AAAFD0;
}
.price-place input {
  caret-color: #fff;
}
.mar-price{
    padding: 30px 50px;
    box-sizing: border-box;
}
.price-left,.price-right{
    width: 50%;
    display: inline-block;
    vertical-align: top;
}
.mar-price-canu-use{
    margin-bottom: 20px;
}
.price-item{
    padding-bottom: 30px;
}
.price-item em{
    display: inline-block;
    width: 80px;
    line-height: 40px;
}
.price-item input{
    width: 220px;
    height:38px;
    border:1px solid rgba(23,30,67,1);
    background-color:rgba(0,0,0,0);
    border-radius: 5px;
    padding:10px;
    box-sizing: border-box;
    color:#fff;
}
.mar-price-btn input{
    padding: 0;
    font-size: 14px;
    cursor: pointer;
}
input.mar-price-btn-green{
    background-color: #3CBC98;
}
input.mar-price-btn-red{
    background-color: #FC5558;
}
.price-right{
    padding-left: 90px;
    box-sizing: border-box;
}
</style>