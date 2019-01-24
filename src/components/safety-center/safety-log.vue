<template>
    <div class="safety-pro-wrapper">
        <div class="safety-pro-title">
            <span>{{ $t("safety.log") }}</span>
        </div>
        <div class="safety-log">
            <table class="details-table">
                <thead class="trans-top">
                    <tr>
                        <th>{{ $t("safety.logTime") }}</th>
                        <th>{{ $t("safety.logType") }}</th>
                        <th>{{ $t("safety.logRemarks") }}</th>
                        <th>{{ $t("safety.logIP") }}</th>
                        <th>{{ $t("safety.logAddress") }}</th>
                        <th>{{ $t("safety.logState") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tdlist,index) in tableslist" :key="index">
                        <td>
                            {{ tdlist.time }}
                        </td>
                        <td>
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
                        <td class="blue">
                            {{tdlist.totaltype}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    data:function(){
        return {
          tablecont:0,
          token:Cookies.get("loginToken"),
          tableslist1:[],
          tableslist:[
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'},
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'},
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'},
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'},
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'},
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'},
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'},
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'},
              {time:'2018-12-15 16:02:33',transType:'登录',transPrice:'通过电脑登录',volume:'119.123.72.141',total:'未分配或者内网ip',totaltype:'正常'}
          ]
      }
    },
    mounted(){
        // console.log(this.token);
        //BUG+E2MV6AC5TMGK31DIBDN8YZGCAF
        //BUG%2BE2MV6AC5TMGK31DIBDN8YZGCAF
        this.getLog();
    },
    methods:{
        //获取登录日志
        getLog(){
            this.axios.get('apis/personal/v1/user/loginlog?token=' + this.token).then((response) => {
                    const obj = response.data;
                    // console.log(obj);
                    if(obj.code == 0){
                        // console.log('ojbk');
                        this.tableslist1 = obj.data;
                    }else{
                        this.$message.error(obj.msg);
                    }
                }).catch((err) => {
                    this.$message.error(err);
                })
        }
    }
}
</script>

<style scoped>
.safety-log{
    margin-top: 30px;
}
.details-table{
    width: 100%;
    table-layout:fixed ;
}
.details-table thead{
    width: 1200px;
    background-color: rgba(0,0,0,0);
}
.details-table thead th{
    font-size: 16px;
    line-height: 38px;
    font-weight: 600;
    white-space: nowrap;
}
.details-table tbody tr:hover{
    cursor: pointer;
    background-color: #f1f1f1;
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