// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入store
import store from './store'
//引用elment-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*基础样式样式*/
import "./assets/css/base.css"
/*字体图表*/
import "./assets/css/font.css"
/*引入jQuery*/
import $ from "jquery"
/*引入 分页组件*/
//引用插件
//信息提示弹出框
import messagePop from "@/lib/messagePop/messagePop.js"
Vue.use(messagePop)
//提示条
/*import tipPop from "@/lib/tipPop/tipPop.js"
Vue.use(tipPop)*/
//验证信息
import messVaildator from "@/lib/messVaildator/messVaildator.js"
/*引入 api请求*/
//import "@/api/index.js"
/*引入 api请求*/
//import "@/utils/base.js"
Vue.use(ElementUI);

//兼容 promise
import 'babel-polyfill'

Vue.config.productionTip = true
/* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        store,
        components: { App },
        template: '<App/>'
    })
// 跳转后返回顶部

//跳转后返回顶部
router.afterEach((to,from,next) => {
   /* console.log(to)*/
    window.scrollTo(0,0)
 /* if(to.name =="homeIndex"){
    window.location.reload()
  }*/
 /* */
})
router.beforeEach((to,form,next) => {
   /* console.log(to)*/
    document.getElementById('titleId').innerHTML = to.meta.title
    document.getElementById('description').content = to.meta.description
    next()
})
