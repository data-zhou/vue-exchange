<template>
    <div class="history-dele">
        <span class="tip-tit">{{ $t("trans.currDele") }}</span>
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
                            <th>{{ $t("index.operation") }}</th>
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
                            <td>
                                {{tdlist.operate}}
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
                            <th>{{ $t("index.operation") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(tdlist,index) in currSell" :key="index">
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
                            <td>
                                {{tdlist.operate}}
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
                            <th>{{ $t("index.operation") }}</th>
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
                            <td>
                                {{tdlist.operate}}
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
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'}
          ],
          currSell:[
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'}
          ],
          currAll:[
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'卖出',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',success:'已成交',total:'899263.6',operate:'完成'}
          ]
      }
    },
    methods:{
        
    }
}
</script>
<style>

</style>