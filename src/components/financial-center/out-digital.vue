<template>
    <div>
        <div class="out-digital">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item :label="$t('financial.outCoin')">
                    <!-- <el-input class="out-coinInput" v-model="form.name"></el-input> -->
                    <div class="deputbox">
                        {{ $t("financial.currTotal") }}：<span class="echart-blue">5000</span>
                    </div>
                    <!-- <span class="input-v-tips echart-blue">{{ $t("financial.transCharges") }}0.02</span> -->
                    <div class="out-equal">
                        <p>≈15.25CNY</p>
                        <p>≈15.25CNY</p>
                    </div>
                    <div class="out-cointype">
                        <el-select v-model="form.region" placeholder="比特币(BTC)">
                            <el-option label="kc币" value="shanghai"></el-option>
                            <el-option label="mao币" value="beijing"></el-option>
                        </el-select>
                    </div>
                </el-form-item>
                <el-form-item :label="$t('financial.outAddressText')">
                    <el-select v-model="form.region" placeholder="--请选择提现地址--">
                    <el-option label="phenix1BcTqYfCsdyTFs7P3Y9K8XWG2gsyBS5zhQ" value="shanghai"></el-option>
                    <el-option label="phenix1JZrfXMFz8ijvKz4UaN9U2z13khBLceFx4" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('financial.outNumber')">
                    <el-input v-model="form.name2"></el-input>
                    <span class="input-v-tips echart-blue">{{ $t("financial.transCharges") }}0.02</span>
                    <div class="out-equal">
                        <p>≈15.25CNY</p>
                        <p>≈15.25CNY</p>
                    </div>
                </el-form-item>
                <el-form-item :label="$t('financial.mesCode')">
                    <el-input v-model="form.name3"></el-input>
                    <div class="codenum out-digital-code">
                        <span v-show="sendAuthCode" 
                        class="auth_text auth_text_blue">{{ $t("register.getSms") }}</span>
                        <span v-show="!sendAuthCode" class="auth_text"> 
                        <span class="auth_text_blue">{{auth_time}} </span> {{ $t("register.getSmsTime") }}</span>
                    </div>
                </el-form-item>
                <el-form-item :label="$t('financial.trnsPassword')">
                    <el-input v-model="form.name4"></el-input>
                    <p class="out-digital-forget"><a href="javascript:;">{{ $t("financial.forgetPassword") }}</a></p>
                </el-form-item>
                <el-form-item :label="$t('financial.remarks')">
                    <el-input v-model="form.name5"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="sure-submit" type="primary" @click="onSubmit">{{ $t("financial.sureOut") }}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
          sendAuthCode:true,
          auth_time:0,
        form: {
          name: '',
          name2: '',
          name3: '',
          name4: '',
          name5: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message.error('submit');
      }
    }
}
</script>

<style>
.out-digital{
    margin-top:40px;
}
.out-digital form{
    padding-left: 100px;
}
.out-digital .el-input,.out-digital .el-select{
    width:320px;
}
.out-coinInput .el-input__inner{
    padding-left: 120px;
}
/* 内框 */
.out-digital .deputbox{
    position: relative;
    border:1px solid #dcdfe6;
    height:40px;
    width:320px;
    border-radius: 4px;
    padding-left: 120px;
    box-sizing: border-box;
}
.out-digital .out-cointype{
    width: 120px;
    height:38px;
    position: absolute;
    left: 1px;
    top: 1px;
}
.out-digital .out-cointype .el-select,.out-digital .out-cointype .el-input{
    width: 120px;
}
.out-digital .out-cointype .el-input__inner{
    border-right:none;
    height:32px;
    border:none;
    border-radius: 0px;
}
.out-equal{
    width: 320px;
    padding-top: 10px;
}
.out-equal p{
    line-height: 1.8;
}
.out-digital .el-input{
    position: relative;
}
.input-v-tips{
    display: block;
    height: 40px;
    line-height: 40px;
    position: absolute;
    left: 340px;
    top: 0;
}
.out-digital-forget{
    width: 320px;
    text-align: right;
}
.out-digital-forget a{
    color:#5877FF;
}
.out-digital-forget a:hover{
    text-decoration: underline;
}
.sure-submit{
    width: 320px;
    background-color: #3b466b;
    border:none;
}
.sure-submit:hover{
    background-color: #333752;
}
.out-digital-code{
    left: 170px;
    margin-top:1px;
}
.out-digital .el-button--primary {
    color:#fff;
    background-color: #333752;
    border-color: #333752;
}
.out-digital .el-button--primary:hover {
    background-color: #626b89;
    border-color: #626b89;
}
</style>