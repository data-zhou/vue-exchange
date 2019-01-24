<template>
    <div class="">
        <div class="my-property">
            <ul>
                <li>
                    <p class="my-property-num">1200</p>
                    <p>{{ $t("financial.usable") }}BTC</p>
                </li>
                <li>
                    <p class="my-property-num">1200</p>
                    <p>{{ $t("financial.usable") }}BTC</p>
                </li>
                <li>
                    <p class="my-property-num">1200</p>
                    <p>{{ $t("financial.usable") }}BTC</p>
                </li>
            </ul>
        </div>
        <div class="financial-table-warpper">
            <table class="financial-table">
                <thead>
                    <tr>
                        <th>{{ $t("financial.DigitalAsset") }}</th>
                        <th>{{ $t("financial.usable") }}</th>
                        <th>{{ $t("financial.Frozen") }}</th>
                        <th>{{ $t("financial.totalProperty") }}</th>
                        <th>{{ $t("financial.ProConversion") }}</th>
                        <th>{{ $t("financial.ProOperation") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tdlist,index) in tableslist" :key="index">
                        <td>
                            <p><i class="financial-icon-logo"></i>{{ tdlist.btc}}</p>
                            <p>{{ tdlist.btcnum}}BTC</p>
                        </td>
                        <td>
                            {{tdlist.tabcont1}}
                        </td>
                        <td>
                            {{tdlist.tabcont2}}
                        </td>
                        <td>
                            {{tdlist.tabcont3}}
                        </td>
                        <td>
                            {{tdlist.tabcont4}}
                        </td>
                        <td class="goto-trans">
                            <a href="javascript:;">{{ $t("financial.goTrans") }}</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
          tablecont:0,
          tableslist:[
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"},
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"},
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"},
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"},
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"},
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"},
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"},
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"},
              {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00"}
          ]
      }
    }
}
</script>

<style>
.my-property{
    margin:20px 0;
    width:100%;
    height:180px;
    background: url('../../assets/images/beijing.png') no-repeat;
    background-size: cover;
}
.my-property ul{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.my-property ul li{
    flex: 1;
    text-align: center;
    color:#fff;
    border-right: 1px solid #f1f1f1;
}
.my-property ul li:last-child{
    border-right:none;
}
.my-property-num{
    font-size: 20px;
    font-weight: 500;
    line-height: 2;
    padding: 5px 0;
}
.financial-table{
    width: 100%;
    table-layout:fixed ;
}
.financial-table thead{
    width: 100%;
    background-color: #333752;
}
.financial-table thead th{
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    font-weight: 400;
    white-space: nowrap;
}
.financial-table tbody tr:nth-of-type(even){
    background-color: #ededf6;
}
.financial-table tbody td{
    padding:10px;
    line-height: 1.5;
    word-wrap:break-word;
    word-wrap:break-all;
    box-sizing: border-box;
    text-align: center;
}
.financial-icon-logo{
    display: inline-block;
    width:12px;
    height: 12px;
    background-color: #5877ff;
    border-radius: 12px;
    margin-right: 5px;
}
.goto-trans a{
    padding: 5px 10px;
    color:#fff;
    border-radius: 4px;
    background-color: #5877ff;
}
.goto-trans a:hover{
    background-color: #3e5ad4;
}
</style>