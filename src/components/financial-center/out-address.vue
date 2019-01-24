<template>
    <div class="out-record">
        <div class="showdetails-warpper"></div>
        <div class="add-news-address">
            <span @click="addShowDetail" class="add-btn">+{{ $t("financial.addBtn") }}</span>
        </div>
        <div class="financial-table-warpper">
            <table class="financial-table">
                <thead>
                    <tr>
                        <th>{{ $t("financial.addressCoinName") }}</th>
                        <th>{{ $t("financial.addressWallet") }}</th>
                        <th>{{ $t("financial.addressSend") }}</th>
                        <th>{{ $t("financial.addressType") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tdlist,index) in tableslist" :key="index">
                        <td>
                            <p><i class="financial-icon-logo"></i>{{ tdlist.btc}}</p>
                            <p>{{ tdlist.btcnum}}BTC</p>
                        </td>
                        <td>
                            {{tdlist.tabcont2}}
                        </td>
                        <td>
                            {{tdlist.address}}
                        </td>
                        <td class="echart-blue">
                            <span>{{ $t("financial.outLink") }}</span>|
                            <span>{{ $t("financial.untying") }}</span>
                        </td>
                    </tr>
                    <!-- <tr id="table-tr-not">
                        <div class="nothing">
                            <p>暂无记录！</p>
                        </div>
                    </tr> -->
                </tbody>
            </table>
        </div>
        <div v-show="addDetailsShow" class="popcontent-warpper">
            <div class="popcontent-bg"></div>
            <div class="popcontent">
                <span @click="addHideDetail" class="popcontent-close"></span>
                <div class="out-digital add-addressform">
                    <h3 class="add-addressform-tit">添加一个钱包地址</h3>
                    <el-form ref="form" :model="form" label-width="100px">
                        <el-form-item :label="$t('financial.aCoinName')">
                            <el-select v-model="form.region"  :placeholder="$t('trans.coinType')">
                                <el-option label="比特币（BTC）" value="比特币（BTC）"></el-option>
                                <el-option label="kc币" value="kc币"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item :label="$t('financial.walletRemarkes')">
                            <el-input v-model="form.name1"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('financial.walletAddress')">
                            <el-input v-model="form.name2"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('financial.trnsPassword')">
                            <el-input v-model="form.name3"></el-input>
                            <p class="out-digital-forget"><a href="javascript:;">{{ $t("financial.forgetPassword") }}</a></p>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="sure-submit" type="primary">{{ $t("financial.addAddressBtn") }}</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            addDetailsShow:false,
            tableslist:[
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'},
                {btc:'比特币（BTC）',btcnum:"6356.00",tabcont2:"201812142114",address:'phenix1CG3nAE2vhryAkrf6spe9Hu6Hz87tWnGL8'}
            ],
            form: {
                name1: '',
                name2: '',
                name3: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods:{
        addShowDetail(){
            this.addDetailsShow = true;
        },
        addHideDetail(){
            this.addDetailsShow = false;
        }
    }
}
</script>

<style>
#table-tr-not{
    padding: 0;
    text-align: center;
}
#table-tr-not .nothing{
    position: relative;
    width: 1000px;
    height:250px;
    background:url('../../assets/images/zanwujilu.png') no-repeat;
    background-size: 280px 167px;
    background-position: center center;
}
#table-tr-not .nothing p{
    width: 100%;
    color:#5877ff;
    position: absolute;
    left: 0;
    bottom:0;
}
.add-news-address{
    padding: 20px 0;
    text-align: right;
}
.add-news-address span{
    padding: 5px;
    cursor: pointer;
    color:#5877FF;
}
.add-news-address span:hover{
    color: #2942b1;
}
.showdetails-warpper{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
}
/* 遮罩添加地址 */
.popcontent-warpper{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
}
.popcontent-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
}
.popcontent{
    width: 920px;
    height: 520px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    overflow-y: auto;
    z-index: 10;
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.add-addressform form{
    padding-left: 0;
}
.popcontent-close{
    position: absolute;
    top:15px;
    right: 15px;
    width: 28px;
    height: 28px;
    background:url('../../assets/images/close-btn.png') no-repeat;
    background-size: 28px 28px;
    cursor: pointer;
}
.add-addressform-tit{
    font-size: 18px;
    text-align: center;
    margin-bottom:30px;
    line-height: 1.5;
}
</style>