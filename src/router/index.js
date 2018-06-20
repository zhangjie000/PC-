import Vue from 'vue'
import Router from 'vue-router'
/*home文件夹   首页*/
import homeIndex from '@/components/home/index'
/*passport文件夹   登录注册*/
import Login from '@/components/passport/Login'
import Register from '@/components/passport/Register'
/*invest文件夹 投资页面*/
import investIndex from '@/components/invest/index'
/*loan文件夹  我要贷款页面*/
import loanIndex from '@/components/loan/index'
/*loan文件夹  我要贷款页面*/
import safetyIndex from '@/components/safety/index'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
       /*首页*/
        {
            path:'/homeIndex',
            redirect:"/",
            meta: {
                title: '首页',
                description:"description1"
            }
        },
        {
            path: '/',
            name: 'homeIndex',
            component: homeIndex,
            meta: {
                title: '首页',
                description:"description1"
            }
        },
        /*登录、注册*/
        {
            path: '/Login',
            component: Login,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/Register',
            component: Register,
            meta: {
                title: '注册'
            }
        },
        /*投资页面*/
        {
            path:"/investIndex",
            component:investIndex,
             meta: {
                title: '投资页面'
            }
        },
        /*我要贷款页面*/
        {
            path:"/loanIndex",
            component:loanIndex,
             meta: {
                title: '我要贷款'
            }
        },
        /*安全保障*/
        {
            path:"/safetyIndex",
            component:safetyIndex,
             meta: {
                title: '安全保障'
            }
        }
    ]
})