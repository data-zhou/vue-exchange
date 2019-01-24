<template>
  <div class="vheader">
    <div class="head">
        <div class="logo">
            <router-link to="/home">
                <img src="../../assets/images/logo.png" alt="">
            </router-link>
        </div>
        <div class="nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
                <el-menu-item index="home">
                    {{ $t("header.index") }}
                </el-menu-item>
                <el-submenu index="trans">
                    <template slot="title">{{ $t("header.trans") }}</template>
                        <el-menu-item index="trans">比特币</el-menu-item>
                        <el-menu-item index="trans">kc交易所</el-menu-item>
                </el-submenu>
                <el-menu-item index="financial">
                    {{ $t("header.financial") }}
                </el-menu-item>
                <el-menu-item index="safety">
                    {{ $t("header.safety") }}
                </el-menu-item>
                <el-menu-item index="market">
                    {{ $t("header.market") }}
                </el-menu-item>
            </el-menu>
            <div class="line"></div>
        </div>
        <div class="language">
            <el-select v-model="value" @change="currentSel">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="headregister">
            <ul v-if="loginTypeHead">
                <li>
                    <router-link to="/login">{{ $t("header.login") }}</router-link>
                </li>
                <li>
                    <router-link to="/register">{{ $t("header.register") }}</router-link>
                </li>
            </ul>
            <ul class="loginOver" v-else="">
                <li>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            18002986082<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/financial">充币提币</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/financial">交易管理</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/financial">财务中心</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/safety?tabView=first">安全中心</router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li>
                    <span class="logout" @click="loginOut">退出</span>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    name: 'vheader',
    data() {
      return {
        loginTypeHead:true,
        options: [{
          value: '简体中文',
          label: '简体中文'
        },
        {
          value: '繁體中文',
          label: '繁體中文'
        }, {
          value: 'English',
          label: 'English'
        }],
        navTab:[

        ],
        value: '简体中文'
      }
    },
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
    mounted: function(){
        this.languageChange();
        this.setLoginState();
        // if(this.activeIndex == false){
        //     this.activeIndex='1'
        // }
    },
    methods:{
        //获取cookie，设置下拉框选中值
        languageChange(){             
            if(Cookies.get("languageName")){
                this.value = Cookies.get("languageName");
            }else{
                this.value = '简体中文';
            }
        },
        //下拉选择事件，根据选择设置cookie
        currentSel(selVal){ 
            if(selVal === '简体中文'){
                Cookies.set('lang', 'cn', {expires: 1});
                Cookies.set('languageName', '简体中文', {expires: 1});
                const lang = Cookies.get("lang");
                this.$i18n.locale = lang;
                location.reload();
            }else if(selVal === '繁體中文'){
                Cookies.set('lang', 'zh_tw', {expires: 1});
                Cookies.set('languageName', '繁體中文', {expires: 1});
                const lang = Cookies.get("lang");
                this.$i18n.locale = lang;
                location.reload();
            }else if(selVal === 'English'){
                Cookies.set('lang', 'en', {expires: 1});
                Cookies.set('languageName', 'English', {expires: 1});
                const lang = Cookies.get("lang");
                this.$i18n.locale = lang;
                location.reload();
            }
        },
        //判断登录状态，切换按钮
        setLoginState(){
            if(Cookies.get("loginToken")){
                this.loginTypeHead = false;
            }else{
                this.loginTypeHead = true;
            }
        },
        // 退出登录
        loginOut(){
            const outMess = this.$t("hook.outMess");
            const outTit = this.$t("hook.outTit");
            const outBtn = this.$t("hook.regMessageBtn");
            const outnotBtn = this.$t("hook.outnotBtn");
            this.$confirm(outMess, outTit, {
                confirmButtonText: outBtn,
                cancelButtonText: outnotBtn
            })
            .then(() => {
                const token = Cookies.get("loginToken");
                this.axios.post('apis/personal/v1/user/loginout?token=' + token)
                .then(() => {
                    Cookies.remove('loginToken');
                    Cookies.remove('user');
                    location.reload();
                    this.$router.push({path: '/'});
                })
                .catch((err) => {
                    this.$message.error(err);
                })
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出登录'
                });          
            })
        }
    }
}
</script>

<style>
.vheader{
    width: 100%;
    height:60px;
    background-color:#333752;
    color:#fff;
}
.head{
    width: 1200px;
    height:60px;
    margin:0 auto;
    line-height: 60px;
    color:#fff;
    text-align: right;
}
.logo{
    float: left;
}
.logo a{
    display: inline-block;
    height: 60px;
}
.nav{
    display: inline-block;
}
/*element样式配置*/
.nav .el-menu{
    background-color: rgba(255,255,255,0);
}
.nav .el-menu--horizontal>.el-menu-item{
    color:#fff;
}
.nav .el-menu--horizontal>.el-menu-item a{
    display: block;
    width: 100%;
    height: 100%;
}
.nav .el-menu--horizontal>.el-menu-item.is-active{
    color: #409EFF;
}
.nav .el-submenu__title i{
    color: #fff;
}
.nav .el-submenu__title a{
    color:#fff;
}
.nav .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,.nav .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    color: #409EFF;
}
.nav .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.nav .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{
    background-color: #38407b;
}
.nav .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, 
.nav .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, 
.nav .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background-color: #38407b;
}
.nav .el-menu--horizontal>.el-submenu:focus .el-submenu__title, 
.nav .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
    color:#fff;
}
.nav .el-menu.el-menu--horizontal{
    border-bottom: none;
}
.nav .el-menu--horizontal>.el-submenu .el-submenu__title{
    color:#fff;
}
.nav .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
    color:#409EFF;
}
.nav .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    color:#409EFF;
}
.el-menu--horizontal .el-menu .el-menu-item{
    border-bottom: 1px dashed #ccc;
}
.el-menu--horizontal .el-menu .el-menu-item:last-child{
    border-bottom: none;
}
.el-menu--horizontal .el-menu .el-menu-item a{
    color:#666;
}
.el-menu--horizontal .el-menu .el-menu-item:hover a{
    color:#409EFF;
}
.el-menu--popup{
    min-width: 150px!important;
}
.headregister{
    margin-left:30px;
    float: right;
}
.headregister ul li{
    display: inline;
}
.headregister ul li a{
    display: inline;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 30px;
    color:#fff;
    border-right: 1px solid #fff;
}
.headregister ul li a:hover{
    text-decoration: underline;
}
.headregister ul li:last-of-type a{
    border:none;
}
.headregister .loginOver{
    margin:0 10px;
}
.headregister .loginOver li{
    margin-right:15px;
}
.headregister .el-dropdown,.headregister .logout{
    color:#fff;
    cursor: pointer;
}
.headregister .el-dropdown:hover,.headregister .logout:hover{
    color:#5877FF;
}
.language{
    width: 100px;
    float: right;
}
.language .el-select .el-input__inner{
    background-color: rgba(100, 36, 36, 0);
    border:none;
    color: #fff;
}
.language .el-select .el-input .el-select__caret{
    color:#fff;
}

</style>
