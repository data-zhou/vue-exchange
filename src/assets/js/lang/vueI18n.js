import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import LangEn from './en.js'
import LangZhCHS from './zhCHS.js'
import LangZhCHT from './zhCHT.js'



Vue.use(VueI18n);


const i18n = new VueI18n({
    //定义默认语言
    locale: Cookies.get('lang') || 'cn',
    messages:{
      'en': LangEn,
      'cn': LangZhCHS,
      'zh_tw': LangZhCHT
    }
});

export default i18n