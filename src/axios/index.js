import axios from 'axios'
import sha1 from 'js-sha1'
import store from '../store'
import router from '../router'
import qs from 'qs'
let crypto = require('crypto')
let address = require('os')
    //设置全局axios默认值
axios.defaults.timeout = 5000; //5000的超时验证

//创建一个axios实例
const instance = axios.create();
const ajaxMethod = ['get', 'post'];
const api = {};
/*
console.log(process.env.NODE_ENV)*/
if (process.env.NODE_ENV == 'development') {
    instance.defaults.baseURL = 'http://t.api.gold-tz.com/';
} else if (process.env.NODE_ENV == 'debug') {
    instance.defaults.baseURL = 'http://gold.api.hyft88.com/';
} else if (process.env.NODE_ENV == 'production') {
    instance.defaults.baseURL = 'http://api.gold-tz.com/';
}

axios.interceptors.request.use = instance.interceptors.request.use;

//request拦截器
instance.interceptors.request.use(
    config => {
        console.log(store)
            //每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
        if (store.state.token) {
            //config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
//respone拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.dispatch('UserLogout'); //可能是token过期，清除它
                    router.replace({ //跳转到登录页面
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    });
            }
        }
        return Promise.reject(error.response);
    }
);

ajaxMethod.forEach((method) => {
    api[method] = function(uri, data, config) {
        return new Promise(function(resolve, reject) {
            instance[method](instance.defaults.baseURL + uri, JSON.stringify(GetSign(data)), config).then((response) => {
                if (response.data.basis.Status !== 200) {
                    if (response.data.basis.Status === 259 || response.data.basis.Status === 257) {

                        console.log("登录信息失效，请重新登陆")
                        instance.$router.replace('/login')
                    }
                } else {
                    resolve(response.data)
                }
            }).catch(function(error) {
                if (error && error.response) {
                    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                } else {
                    console.log("网络故障")
                    console.log(error)
                    console.log('Error', error ? error.message : "网络故障")
                }
                //console.log(error.config)
            })
        })
    }

})


// 获取签名
let GetSign = function(obj) {
    if (obj === undefined) { obj = {} }

    function sort(obj) {
        if (obj instanceof Array) {
            return obj
        }
        var newObj = {}
        Object.keys(obj).sort().forEach(function(key) {
            var o = obj[key]
            if (o instanceof Object) {
                o = sort(o)
            }
            newObj[key] = o
        })
        return newObj
    }

    //临时签名对象
    const sign_data = {
        Data: obj,
        Global: { IMEI: "", IMSI: "", IP: "", OS: 99, Sign: "", Token: store.state.token }
    }
    let decipher = crypto.createHash('sha1', ')(4AzEdr5J6a`@#$*%')
        //签名
    let sign = decipher.update(JSON.stringify(sort(sign_data))).digest('hex').toLowerCase()
    const data = {
        Data: obj,
        Global: {
            IMEI: "",
            IMSI: "",
            IP: "",
            OS: 99,
            Sign: sign,
            Token: store.state.token
        }
    }
    return data
}


export default api;