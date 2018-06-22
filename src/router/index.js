import Vue from 'vue'
import Router from 'vue-router'
/*home文件夹   首页*/
import homeIndex from '@/components/home/index'
/*passport文件夹   登录注册*/
import login from '@/components/passport/login'
import Register from '@/components/passport/Register'
/*invest文件夹 投资页面*/
import investIndex from '@/components/invest/index'
import experienceDetail from '@/components/invest/experienceDetail'
import experienceBuy from '@/components/invest/experienceBuy'
import investDetails from '@/components/invest/details'
import riskDisclosure from '@/components/invest/riskDisclosure'
/*loan文件夹  我要贷款页面*/
import loanIndex from '@/components/loan/index'
/*loan文件夹  我要贷款页面*/
import safetyIndex from '@/components/safety/index'
/*about文件夹 关于我们页面*/
import groupIntroduction from '@/components/about/groupIntroduction'
import aboutUs from '@/components/about/aboutUs'
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
            path: '/login',
            component: login,
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
        /*投资详情页面*/
        {
            path:"/investDetails",
            component:investDetails,
             meta: {
                title: '投资详情页面'
            }
        },
        /*风险揭示书页面*/
        {
            path:"/riskDisclosure",
            component:riskDisclosure,
             meta: {
                title: '我要贷款'
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

        /*体验标详情页面*/
        {
            path:"/experienceDetail",
            component:experienceDetail,
            meta: {
                title: '体验标详情页面'
            }
        },
        /*体验标详情页面*/
        {
            path:"/experienceBuy",
            component:experienceBuy,
            meta: {
                title: '体验标购买页面'
            }
        },
        /*安全保障*/
        {
            path:"/safetyIndex",
            component:safetyIndex,
             meta: {
                title: '安全保障'
            }
        },
        /*关于我们 集团介绍*/
        {
            path:"/groupIntroduction",
            component:groupIntroduction,
             meta: {
                title: '集团介绍'
            }
        },/*关于我们*/
        {
            path:"/aboutUs",
            component:aboutUs,
             meta: {
                title: '关于我们'
            }
        }
    ]
})