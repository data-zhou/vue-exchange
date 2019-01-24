<template>
  <div>
      <div class="trans-top coin-exchange-warpper">{{ $t("trans.MSCurrency") }}</div>
      <div class="trans-exchange-warpper">
          <div class="exchange-warpper-top">
              <h3>BTC</h3>
              <p>比特币（Bitcoin）</p>
          </div>
          <div class="exchange-warpper-cont">
              <p class="btc-brief">{{ $t("trans.summary") }}</p>
              <p>OKCoin币行（www.okcoin.cn）成立于2013年6月，主要面向中国区用户提供人民币对比特币、莱特币、以太币等
                  数字资产买卖服务，隶属于北京乐酷达网络科技有限公司，是全球著名的数字资产交易平台之一。 OKCoin币行的
                  核心团队来自阿里、腾讯、华为等世界知名企业。OKCoin币行创立时，获得了世界领先投资人Tim Draper参与设立
                  的创业工场百万美金的天使投资，Tim Draper先生同时也是Hotmail、百度、特斯拉等世界领先企业的投资人。
                  2014年初，OKCoin币行获得了中国著名的风险投资基金策源创投、香港上市公司美图(01357.HK)创始人旗下的
                  隆领投资千万美元的A轮投资。</p>
          </div>
          <div class="exchange-warpper-foot">
              <p>
                  <span>{{ $t("trans.issueTime") }}：<i>2008-11-11</i></span>
                  <span>{{ $t("trans.issueTotal") }}：<i>3100{{ $t("trans.tenThousand") }}</i></span>
                  <span>{{ $t("trans.circulationTotal") }}：<i>1500{{ $t("trans.tenThousand") }}</i></span>
                  <span>{{ $t("trans.crowdPrice") }}：<i>----</i></span>
              </p>
              <p>
                  <span>{{ $t("trans.whitePaper") }}<a href="javascript:;">https://bitcoin.org/bitcoin.pdf</a></span>
                  <span>{{ $t("trans.website") }}<a href="javascript:;">https://bitcoin.org</a></span>
                  <span>{{ $t("trans.blockQuery") }}<a href="javascript:;">https://bitcoin.org/search</a></span>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.coin-exchange-warpper{
    line-height: 60px;
    padding-left: 30px;
    font-size: 16px;
    box-sizing: border-box;
}
.trans-exchange-warpper{
    padding: 30px 50px;
    box-sizing: border-box;
    font-size: 12px;
}
.exchange-warpper-top{
    margin-bottom: 20px;
}
.exchange-warpper-top h3{
    font-size: 20px;
    color: #5877FF;
    line-height: 2;
}
.exchange-warpper-cont{
    margin-bottom: 30px;
    line-height: 1.8;
}
.exchange-warpper-cont .btc-brief{
    margin-bottom: 15px;
}
.exchange-warpper-foot{
    line-height: 1.8;
}
.exchange-warpper-foot p{
    margin-bottom: 20PX;;
}
.exchange-warpper-foot span{
    margin-right: 30px;
}
.exchange-warpper-foot i{
    padding-left: 20px;
}
.exchange-warpper-foot a{
    padding-left: 20px;
    color:#5877FF;
}
.exchange-warpper-foot a:hover{
    text-decoration: underline;
}
</style>