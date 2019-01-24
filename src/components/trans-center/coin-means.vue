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

<style scoped>

</style>