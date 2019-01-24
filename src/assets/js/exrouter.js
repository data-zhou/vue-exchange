import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import trans from '@/components/trans-center/trans-center'
import c2ctrans from '@/components/c2c-trans/c2c-trans'
import financial from '@/components/financial-center/financial-center'
import safety from '@/components/safety-center/safety-center'
import market from '@/components/market/market'
import login from '@/components/login/login'
import register from '@/components/register/register'
import registerTwo from '@/components/register/register-two'
import registerThree from '@/components/register/register-three'
import registerOver from '@/components/register/register-four'
import findpwd from '@/components/login/findpwd'
import about from '@/components/footer/footAbout'
import noticeList from '@/components/index/notice-list'
import noticeDoc from '@/components/index/notice-details'

Vue.use(Router);



const router = new Router({
  mode: 'history',
  routes:[
    {path: '/home', component:index},
    {path: '/trans', component:trans},
    {path: '/c2ctrans', component:c2ctrans},
    {path: '/financial', component:financial},
    {path: '/safety', component:safety},
    {path: '/market', component:market},
    {path: '/login', component:login},
    {path: '/register', component:register},
    {path: '/registerTwo', component:registerTwo},
    {path: '/registerThree', component:registerThree},
    {path: '/registerOver', component:registerOver},
    {path: '/findpwd', component:findpwd},
    {path: '/about', component:about},
    {path: '/noticeList', component:noticeList},
    {path: '/noticeDoc', component:noticeDoc}
  ]
});


export default router