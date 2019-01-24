<template>
    <div>
        <div class="to-digital">
            <div class="todigital-num">
                <el-select v-model="value" placeholder="比特币（BTC）">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span class="digital-currt">{{ $t("financial.currTotal") }}：<i>50000.00</i></span>
            </div>
            <div class="todigital-address">
                <p>{{ $t("financial.addressMessage") }}：<i>phenix2CKBLQLReLotZKaqhDVp9dU4p7k7WFA9kL</i></p>
            </div>
            <div class="todigital-pic">
                <img src="../../assets/images/footer-code.png" alt="">
            </div>
        </div>
        <div class="financial-table-warpper">
            <table class="financial-table">
                <thead>
                    <tr>
                        <th>{{ $t("financial.toTime") }}</th>
                        <th>{{ $t("financial.toCoinType") }}</th>
                        <th>{{ $t("financial.toNumber") }}</th>
                        <th>{{ $t("financial.toGive") }}</th>
                        <th>{{ $t("financial.toTotal") }}</th>
                        <th>{{ $t("financial.toType") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tdlist,index) in tableslist" :key="index">
                        <td>
                            {{tdlist.tabcont1}}
                        </td>
                        <td>
                            <p><i class="financial-icon-logo"></i>{{ tdlist.btc}}</p>
                            <p>{{ tdlist.btcnum}}BTC</p>
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
                        <td class="echart-blue">
                            {{tdlist.tabconttype}}
                        </td>
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
            tableslist:[
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'}
            ],
            options: [
              {value: '比特币（BTC）',label: '比特币（BTC）'}, 
              {value: 'kc币',label: 'kc币'}, 
              {value: '猫币',label: '猫币'}
            ],
            value: '比特币（BTC）'
        }
    }
}
</script>

<style>
.to-digital{
    margin: 20px 0;
    position: relative;
}
.todigital-num,.todigital-address{
    padding: 20px 0;
}
.digital-currt{
    margin-left: 40px;
}
.digital-currt i{
    color:#5877ff;
    font-size: 18px;
    padding-left: 10px;
}
.todigital-address p{
    color:#5877ff;
}
.todigital-address i{
    color:#666;
}
.todigital-pic{
    position: absolute;
    right: 20px;
    top: 0;
}
.todigital-pic img{
    width: 110px;
    height: 110px;
}
</style>