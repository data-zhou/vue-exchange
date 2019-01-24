import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'
import Cookies from 'js-cookie'


const veeconfig = {
  errorBagName:'errorBags',
  fieldsBagName:'fieldBags',
  delay: 0,
  locale: Cookies.get('lang') || 'cn', //根据缓存设置语言提示
  messages: null,
  strict: true,
  events: 'blur'
}
Vue.use(VeeValidate,veeconfig);

//自定义方法
//手机
Validator.extend('phone', {
  getMessage : field => '手机号格式错误',
  validate: value => value.length===11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
});
//密码
Validator.extend('password', {
  getMessage : field => '密码请设置6-16位',
  validate: value => /^[a-zA-Z\d]{6,16}$/.test(value)
});
//登录密码
Validator.extend('regpassword', {
  getMessage : field => '请输入6-16位的密码',
  validate: value => /^[a-zA-Z\d]{6,16}$/.test(value)
});
//交易密码
Validator.extend('transpassword', {
  getMessage : field => '请输入6位数字的交易密码',
  validate: value => /^\d{6}$/.test(value)
});
//确认交易密码
Validator.extend('retranspassword', {
  getMessage : field => '请输入6位数字的交易密码',
  validate: value => /^\d{6}$/.test(value)
});
//身份证号码
Validator.extend('pincode', {
  getMessage : field => '请输入正确的身份证号码',
  validate: value => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
});
//旧密码
Validator.extend('oldpassword', {
  getMessage : field => '密码应为6-16位',
  validate: value => /^[a-zA-Z\d]{6,16}$/.test(value)
});
//新密码
Validator.extend('newpassword', {
  getMessage : field => '请设置6-16位新密码',
  validate: value => /^[a-zA-Z\d]{6,16}$/.test(value)
});
//确认新密码
Validator.extend('reNewpassword', {
  getMessage : field => '请设置6-16位新密码',
  validate: value => /^[a-zA-Z\d]{6,16}$/.test(value)
});
//交易密码旧密码
Validator.extend('transOld', {
  getMessage : field => '请输入6位数字的旧密码',
  validate: value => /^\d{6}$/.test(value)
});
//交易密码新密码
Validator.extend('transNew', {
  getMessage : field => '请输入6位数字的新密码',
  validate: value => /^\d{6}$/.test(value)
});
//交易密码再次新密码
Validator.extend('transReNew', {
  getMessage : field => '请确认新交易密码',
  validate: value => /^\d{6}$/.test(value)
});

//修改默认错误提示
const dictionary = {
  cn: {
    messages:{
      phone:() => '手机号格式错误',
      password:() => '密码请设置6-16位',
      regpassword:() => '请输入6-16位的密码',
      transpassword:() => '请输入6位数字的交易密码',
      retranspassword:() => '请输入6位数字的交易密码',
      pincode:() => '请输入正确的身份证号码',
      oldpassword:() => '密码应为6-16位',
      newpassword:() => '请设置6-16位新密码',
      reNewpassword:() => '请设置6-16位新密码',
      transOld:() => '请输入6位数字的旧密码',
      transNew:() => '请输入6位数字的新密码',
      transReNew:() => '请确认新交易密码',
      required:(field)=> field + "不能为空"
    },
    attributes: {
      phone:'手机',
      password:'密码',
      code:'验证码',
      transpassword:'交易密码',
      regpassword:'登录密码',
      retranspassword:'确认交易密码',
      truename:'真实姓名',
      Country:'国际名称',
      pincode:'身份证号码',
      oldpassword:'旧密码',
      newpassword:'新密码',
      reNewpassword:'确认新密码',
      transOld:'旧密码',
      transNew:'新密码',
      transReNew:'确认新密码'
    }
  },
  zh_tw: {
    messages:{
      phone:() => '手機號格式錯誤',
      password:() => '密碼請設置6-16位',
      regpassword:() => '請輸入6-16位的密碼',
      transpassword:() => '請輸入6位數字的交易密碼',
      retranspassword:() => '請輸入6位數字的交易密碼',
      pincode:() => '請輸入正確的身份證號碼',
      oldpassword:() => '密碼應為6-16位',
      newpassword:() => '請設置6-16位新密碼',
      reNewpassword:() => '請設置6-16位新密碼',
      transOld:() => '請輸入6位數字的舊密碼',
      transNew:() => '請輸入6位數字的新密碼',
      transReNew:() => '請確認新交易密碼',
      required:(field)=> field + "不能為空"
    },
    attributes: {
      phone:'手機',
      password:'密碼',
      code:'驗證碼',
      transpassword:'交易密碼',
      regpassword:'登錄密碼',
      retranspassword:'確認交易密碼',
      truename:'真實姓名',
      Country:'國際名稱',
      pincode:'身份證號碼',
      oldpassword:'舊密碼',
      newpassword:'新密碼',
      reNewpassword:'確認新密碼',
      transOld:'舊密碼',
      transNew:'新密碼',
      transReNew:'確認新密碼'
    }
  },
  en: {
    messages:{
      phone:() => 'english手机号格式错误',
      password:() => 'english密码请设置6-16位',
      regpassword:() => 'english请输入6-16位的密码',
      transpassword:() => 'english请输入6位数字的交易密码',
      retranspassword:() => 'english请输入6位数字的交易密码',
      pincode:() => 'english请输入正确的身份证号码',
      oldpassword:() => 'english密码应为6-16位',
      newpassword:() => 'english请设置6-16位新密码',
      reNewpassword:() => 'english请设置6-16位新密码',
      transOld:() => 'english请输入6位数字的旧密码',
      transNew:() => 'english请输入6位数字的新密码',
      transReNew:() => 'english请确认新交易密码',
      required:(field)=> field + "english不能为空"
    },
    attributes: {
      phone:'english手机',
      password:'english密码',
      code:'english验证码',
      transpassword:'english交易密码',
      regpassword:'english登录密码',
      retranspassword:'english确认交易密码',
      truename:'english真实姓名',
      Country:'english国际名称',
      pincode:'english身份证号码',
      oldpassword:'english旧密码',
      newpassword:'english新密码',
      reNewpassword:'english确认新密码',
      transOld:'english旧密码',
      transNew:'english新密码',
      transReNew:'english确认新密码'
    }
  }
};

Validator.updateDictionary(dictionary);

