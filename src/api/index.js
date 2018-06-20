import instance from '../axios';

export default {
    //用户注册
    userRegister(data) {
        return instance.post('101', data);
    },
    //用户登录
    userLogin(data) {
        return instance.post('100', data);
    },
    //获取新闻资讯集合
    getNews(data) {
        return instance.post('908', data);
    },
    //获取banner集合
    getBanner(data) {
        return instance.post('901', data);
    },
    //获取产品集合
    getPdt(data) {
        return instance.post('800', data);
    },
    //获取合作伙伴集合
    getPartner() {
        return instance.get('910');
    },
    //获取友情链接集合
    getLink() {
        return instance.get('911');
    },
    //获取底部联系我们信息
    getContactUs() {
        return instance.get('909');
    }
}