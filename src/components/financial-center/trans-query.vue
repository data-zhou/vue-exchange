<template>
    <div class="out-record">
        <div class="financial-table-warpper">
            <table class="financial-table">
                <thead>
                    <tr>
                        <th class="theadthselect"><el-select v-model="value" placeholder="比特币（BTC）">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select></th>
                        <th>{{ $t("financial.queryTime") }}</th>
                        <th class="theadthselect"><el-select v-model="value2" :placeholder="$t('financial.queryAll')">
                                <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select></th>
                        <th>{{ $t("financial.queryPrice") }}</th>
                        <th>{{ $t("financial.queryNum") }}</th>
                        <th>{{ $t("financial.queryTotal") }}</th>
                        <th>{{ $t("financial.queryCharges") }}</th>
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
                            {{tdlist.transtype}}
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
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",transtype:'买入',tabcont2:"199.00",tabcont3:"635.0",tabcont4:"58993.0",tabcont5:'0.05'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",transtype:'买入',tabcont2:"199.00",tabcont3:"635.0",tabcont4:"58993.0",tabcont5:'0.05'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",transtype:'买入',tabcont2:"199.00",tabcont3:"635.0",tabcont4:"58993.0",tabcont5:'0.05'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",transtype:'买入',tabcont2:"199.00",tabcont3:"635.0",tabcont4:"58993.0",tabcont5:'0.05'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",transtype:'买入',tabcont2:"199.00",tabcont3:"635.0",tabcont4:"58993.0",tabcont5:'0.05'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",transtype:'买入',tabcont2:"199.00",tabcont3:"635.0",tabcont4:"58993.0",tabcont5:'0.05'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",transtype:'买入',tabcont2:"199.00",tabcont3:"635.0",tabcont4:"58993.0",tabcont5:'0.05'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",transtype:'买入',tabcont2:"199.00",tabcont3:"635.0",tabcont4:"58993.0",tabcont5:'0.05'}
            ],
            options: [
              {value: '比特币（BTC）',label: '比特币（BTC）'}, 
              {value: 'kc币',label: 'kc币'}, 
              {value: '猫币',label: '猫币'}
            ],
            value: '比特币（BTC）',
            options2: [
              {value: '买入',label: '买入'}, 
              {value: '卖出',label: '卖出'}
            ],
            value2: '全部'
        }
    }
}
</script>

<style>
.out-record{
    margin-top:40px;
}
/* 整个宽度 */
/* .theadthselect .el-select{
    width:200px;
} */
/* 里面字体大小 */
.theadthselect .el-input{
    font-size: 16px;
}
/* 里面字体颜色,背景色，边框色 */
.theadthselect .el-input__inner{
    color:#fff;
    background-color: #333752;
    border-color: #e5e5e5;
    border:none;
    text-align: center;
}
/* 三角颜色 */
.theadthselect .el-select .el-input .el-select__caret{
    color:#e5e5e5;
}
</style>