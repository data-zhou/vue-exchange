<template>
    <div class="out-record">
        <div class="financial-table-warpper">
            <table class="financial-table">
                <thead>
                    <tr>
                        <th>{{ $t("financial.recordTime") }}</th>
                        <th class="theadthselect"><el-select v-model="value" placeholder="比特币（BTC）">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select></th>
                        <th width="200px">{{ $t("financial.recordAddress") }}</th>
                        <th>{{ $t("financial.recordNumber") }}</th>
                        <th>{{ $t("financial.recordCost") }}</th>
                        <th>{{ $t("financial.recordActual") }}</th>
                        <th>{{ $t("financial.recordType") }}</th>
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
                            {{tdlist.address}}
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
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont1:"2018-12-12 15:30:30",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8',tabcont2:"199.00",tabcont3:"2.50",tabcont4:"200.00",tabconttype:'成功'}
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