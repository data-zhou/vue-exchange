<template>
    <div class="history-dele">
        <span class="tip-tit">{{ $t("trans.deleHistory") }}</span>
        <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('trans.currBuy')" name="first">
                <table class="details-table">
                    <thead class="trans-top-tit">
                        <tr>
                            <th>{{ $t("trans.time") }}</th>
                            <th>{{ $t("trans.buyOrSell") }}</th>
                            <th>{{ $t("trans.currPrice") }}</th>
                            <th>{{ $t("trans.number") }}</th>
                            <th>{{ $t("trans.dealOver") }}</th>
                            <th>{{ $t("trans.total") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(tdlist,index) in currBuy" :key="index">
                            <td>
                                {{ tdlist.time }}
                            </td>
                            <td class="echart-green">
                                {{tdlist.transType}}
                            </td>
                            <td>
                                {{tdlist.transPrice}}
                            </td>
                            <td>
                                {{tdlist.volume}}
                            </td>
                            <td>
                                {{tdlist.success}}
                            </td>
                            <td>
                                {{tdlist.total}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
            <el-tab-pane :label="$t('trans.currSell')" name="second">
                <table class="details-table">
                    <thead class="trans-top-tit">
                        <tr>
                            <th>{{ $t("trans.time") }}</th>
                            <th>{{ $t("trans.buyOrSell") }}</th>
                            <th>{{ $t("trans.currPrice") }}</th>
                            <th>{{ $t("trans.number") }}</th>
                            <th>{{ $t("trans.dealOver") }}</th>
                            <th>{{ $t("trans.total") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(tdlist,index) in currSell" :key="index">
                            <td>
                                {{ tdlist.time }}
                            </td>
                            <td class="echart-red">
                                {{tdlist.transType}}
                            </td>
                            <td>
                                {{tdlist.transPrice}}
                            </td>
                            <td>
                                {{tdlist.volume}}
                            </td>
                            <td>
                                {{tdlist.success}}
                            </td>
                            <td>
                                {{tdlist.total}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
            <el-tab-pane :label="$t('trans.currAll')" name="third">
                <table class="details-table">
                    <thead class="trans-top-tit">
                        <tr>
                            <th>{{ $t("trans.time") }}</th>
                            <th>{{ $t("trans.buyOrSell") }}</th>
                            <th>{{ $t("trans.currPrice") }}</th>
                            <th>{{ $t("trans.number") }}</th>
                            <th>{{ $t("trans.dealOver") }}</th>
                            <th>{{ $t("trans.total") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(tdlist,index) in currAll" :key="index">
                            <td>
                                {{ tdlist.time }}
                            </td>
                            <td class="echart-green">
                                {{tdlist.transType}}
                            </td>
                            <td>
                                {{tdlist.transPrice}}
                            </td>
                            <td>
                                {{tdlist.volume}}
                            </td>
                            <td>
                                {{tdlist.success}}
                            </td>
                            <td>
                                {{tdlist.total}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
          activeName: 'first',
          currBuy:[
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'}
          ],
          currSell:[
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'}
          ],
          currAll:[
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6'}
          ]
      }
    },
    methods:{
        
    }
}
</script>
<style>
.trans-top-tit{
    line-height: 60px;
    font-size: 16px;
    box-sizing: border-box;
}
.trans-table-tab{
    float: right;
    font-size: 14px;
    padding-right: 30px;
}
.trans-table-tab span{
    padding:5px 8px;
    cursor: pointer;
}
.trans-table-tab span:hover{
    color:#5877FF;
}
.details-table{
    width: 1200px;
    table-layout:fixed ;
    background-color: #0A0F2D;
}
.details-table thead{
    width: 1200px;
    background-color: rgba(0,0,0,0);
}
.details-table thead th{
    color: #5877FF;
    line-height: 38px;
    font-weight: 400;
    white-space: nowrap;
}
.details-table tbody tr:hover{
    cursor: pointer;
    background-color: #11194a;
}
.details-table tbody td{
    padding:12px 10px;
    line-height: 1.5;
    word-wrap:break-word;
    word-wrap:break-all;
    box-sizing: border-box;
    text-align: center;
}
.history-dele .tip-tit{
    position: absolute;
    display: inline-block;
    width: 1170px;
    padding-left: 30px;
    height: 60px;
    background-color: #333752;
    line-height: 60px;
    font-size: 16px;
    z-index: 1;
}
.history-dele .el-tabs__item{
    height: 34px;
    color: #AAAFD0;
}
.history-dele .el-tabs__nav{
    float: right;
    padding-right: 40px;
    /* line-height: 60px; */
}
.history-dele .el-tabs__nav-scroll{
    background-color: #333752;
}
.history-dele .el-tabs__nav-wrap::after{
    height: 0;
}
.history-dele .el-tabs__header{
    padding-top: 13px;
    margin-bottom: 13px;
}
</style>