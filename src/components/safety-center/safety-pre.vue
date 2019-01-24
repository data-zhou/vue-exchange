<template>
    <div class="safety-pro-wrapper">
        <div class="safety-pro-title">
            <span>账户预览</span>
        </div>
        <div class="safety-pro-cont">
            <div class="safety-pro-pre-top">
                <ul>
                    <li>
                        <div class="safety-pre-listcont">
                            <img src="../../assets/images/icon_avatar.png" alt="">
                            <div class="safety-pre-listcont-wrapper">
                                <div class="pre-listcont-tit">
                                    <span>{{ $t("safety.preUserName") }}：</span>
                                    <span>张三</span>
                                </div>
                                <div class="pre-listcont-txt">
                                    <span>{{ $t("safety.prePhone") }}：</span>
                                    <span>15088889999</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="safety-pre-listcont">
                            <img src="../../assets/images/icon_id.png" alt="">
                            <div class="safety-pre-listcont-wrapper">
                                <div class="pre-listcont-tit">
                                    <span>{{ $t("safety.preAuth") }}</span>
                                </div>
                                <div class="pre-listcont-txt">
                                    <span>{{ $t("safety.preNotAuth") }}</span>
                                    <a href="javascript:;">{{ $t("safety.preLook") }}</a>
                                    <i class="not"></i>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="safety-pre-listcont">
                            <img src="../../assets/images/icon_tel.png" alt="">
                            <div class="safety-pre-listcont-wrapper">
                                <div class="pre-listcont-tit">
                                    <span>{{ $t("safety.prePhoneBind") }}</span>
                                </div>
                                <div class="pre-listcont-txt">
                                    <span>{{ $t("safety.preBindOver") }}</span>
                                    <a href="javascript:;">{{ $t("safety.preLook") }}</a>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="safety-pro-pre-list">
                <ul>
                    <li>
                        <span>{{ $t("safety.preLoginPassword") }}</span><i>（{{ $t("safety.preExLogin") }}）</i>
                        <router-link to="javascript:;">{{ $t("safety.preChangePassword") }}</router-link>
                    </li>
                    <li>
                        <span>{{ $t("safety.preTransPassword") }}</span><i>（{{ $t("safety.preExTrans") }}）</i>
                        <router-link to="javascript:;">{{ $t("safety.preChangePassword") }}</router-link>
                    </li>
                    <li>
                        <span>{{ $t("safety.preAuth") }}</span><i>（{{ $t("safety.preExAuth") }}）</i>
                        <router-link class="red" to="javascript:;">{{ $t("safety.preAuthNow") }}</router-link>
                    </li>
                    <li>
                        <span>{{ $t("safety.prePhoneBind") }}</span><i>（{{ $t("safety.preExPhone") }}）</i>
                        <router-link to="javascript:;">{{ $t("safety.preChangePassword") }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
.safety-pro-pre-top{
    margin-top: 20px;
}
.safety-pro-pre-top ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}
.safety-pro-pre-top li{
    width:294px;
    height: 164px;
    margin-bottom: 30px;
    padding:0 20px;
    background: url('../../assets/images/shoujibangding.png') no-repeat;/*shimingrenzheng*/
    background-position: center center;
    background-size: 294px 164px;
    box-sizing: border-box;
    display: table;
}
.safety-pro-pre-top li:nth-last-of-type(2){
    background: url('../../assets/images/shimingrenzheng.png') no-repeat;/*yonghuxingming*/
    background-position: center center;
    background-size: 294px 164px;
}
.safety-pro-pre-top li:nth-last-of-type(3){
    background: url('../../assets/images/yonghuxingming.png') no-repeat;/*shoujibangding*/
    background-position: center center;
    background-size: 294px 164px;
}
.safety-pre-listcont{
    display: table-cell;
    vertical-align: middle;
    color:#fff;
    /* padding-left: 80px; */
}
.safety-pre-listcont-wrapper{
    display: inline-block;
    padding-left: 10px;
    vertical-align: top;
}
.safety-pre-listcont img{
    width: 58px;
    height: 58px;
    display: inline-block;
    vertical-align: top;
}
.pre-listcont-tit{
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 5px;
}
.pre-listcont-txt span,.pre-listcont-txt a{
    vertical-align: middle;
    margin-right: 6px;
}
.pre-listcont-txt a{
    color:#fff;
}
.pre-listcont-txt a:hover{
    color:#e5e5e5;
    text-decoration: underline;
}
.pre-listcont-txt i{
    display: inline-block;
    width:14px;
    height:14px;
    vertical-align: middle;
    background:url('../../assets/images/wancheng.png') no-repeat;
    background-position: center center;
    background-size: 14px 14px;
    box-sizing: border-box;
}
.pre-listcont-txt i.not{
    background:url('../../assets/images/weizhuce.png') no-repeat;
}
.safety-pro-pre-list li{
    padding: 10px 0;
}
.safety-pro-pre-list li span{
    color:#666;
}
.safety-pro-pre-list li i{
    color:#999;
}
.safety-pro-pre-list li a{
    float: right;
    color:#5877ff;
}
.safety-pro-pre-list li a.red{
    color:red;
}
.safety-pro-pre-list li a:hover{
    text-decoration: underline;
}
</style>