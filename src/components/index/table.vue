<template>
    <div>
        <table class="details-table">
            <thead>
                <tr>
                    <th width="160px">{{ $t("index.tradMarket") }}</th>
                    <th width="120px">{{ $t("index.btcPrice") }}</th>
                    <th width="130px">{{ $t("index.USprice") }}</th>
                    <th width="130px">{{ $t("index.buy") }}</th>
                    <th width="130px">{{ $t("index.sell") }}</th>
                    <th width="140px">{{ $t("index.volume") }}</th>
                    <th width="140px">{{ $t("index.turnover") }}</th>
                    <th width="140px">{{ $t("index.upDowns") }}</th>
                    <th width="110px">{{ $t("index.operation") }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tdlist,index) in tableslist" :key="index">
                    <td>
                        {{ tdlist.btc }}
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
                    <td>
                        {{tdlist.tabcont5}}
                    </td>
                    <td>
                        {{tdlist.tabcont6}}
                    </td>
                    <td class="red">
                        {{tdlist.tabcont7}}
                    </td>
                    <td class="blue index-tdtrans">
                        {{tdlist.tabcont8}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
          tablecont:0,
          tableslist:[
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"1299.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"1499.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"1339.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"199.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"},
              {btc:'比特币（BTC）',tabcont1:"186.00",tabcont2:"199.00",tabcont3:"199.00",tabcont4:"199.00",tabcont5:"199.00",tabcont6:"199.00",tabcont7:"199.00",tabcont8:"去交易"}
          ]
      }
    }
}
</script>
<style scoped>
.details-table{
    width: 1200px;
    table-layout:fixed ;
}
.details-table thead{
    width: 1200px;
    background-color: #333752;
}
.details-table thead th{
    color: #fff;
    line-height: 60px;
    font-weight: 400;
    width: 100px;
    font-size: 16px;
    white-space: nowrap;
}
.details-table tbody{
    background-color: #fff;
}
.details-table tbody tr:nth-of-type(even){
    background-color: #ededf6;
}
.details-table tbody tr:hover{
    cursor: pointer;
    background-color: #f1f1f1;
}
.details-table tbody td{
    padding:15px 10px;
    line-height: 1.5;
    word-wrap:break-word;
    word-wrap:break-all;
    box-sizing: border-box;
    text-align: center;
}
.index-tdtrans{
    cursor: pointer;
}
</style>