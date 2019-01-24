<template>
    <div>
        <div class="trans-top">
            {{ $t("trans.newTransRecord") }}
        </div>
        <table class="details-table">
            <thead class="trans-top">
                <tr>
                    <th>{{ $t("trans.time") }}</th>
                    <th>{{ $t("trans.buyOrSell") }}</th>
                    <th>{{ $t("trans.transPrice") }}</th>
                    <th>{{ $t("trans.transNum") }}</th>
                    <th>{{ $t("trans.currDele") }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tdlist,index) in tableslist" :key="index">
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
                        {{tdlist.total}}
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
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'},
              {time:'2018-12-15 16:02:33',transType:'买入',transPrice:'600.00',volume:'11523.60',total:'899263.6'}
          ]
      }
    }
}
</script>
<style scoped>
.trans-top{
    line-height: 60px;
    padding-left: 30px;
    font-size: 16px;
    box-sizing: border-box;
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
</style>