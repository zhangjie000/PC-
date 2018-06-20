<template>
  <div >

    <!-- 头部 -->
    <div class="header">
        <div class="banxin clearfix">
            <p class="fl warn">
                <i></i>
                欢迎致电：400-859-3990 &nbsp;
                市场有风险，选择需谨慎
            </p>
            <div class="fr headerNav">
                <!--<router-link to="/Login" class="loginBtn" >登录</router-link> -->
                <router-link to="/Login" class="loginYes" >15027337467</router-link>
                <span class="space"></span>
                <!-- <a class="registerBtn" href="javascript:;">注册</a> -->
                <a class="loginYes" href="javascript:;">安全退出</a>
                <span class="space"></span>
                <a class="helperBtn" href="javascript:;">帮助中心</a>
                <div class="IpApp">
                   <i></i>下载手机<span>APP</span>
                   <div style="padding:20px;border-radius:4px;position: absolute;top: 45px;left: -40px;background: #fff;text-align: center;box-shadow: 0 0px 20px rgba(0, 0, 0, 0.16);">
                    <img style="width:120px;" src="./assets/images/index/float_app.png" alt="Alternate Text" />
                </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 头部 -->
    <!-- 导航 -->
    <div class="nav ">
      <div class="banxin clearfix">
        <div class="fl logo">
           <img class="logoText" src="./assets/images/index/logoText.png" alt="">
          <img src="./assets/images/index/logo.png"  alt="">
        </div>
      <div class="fr ">
          <ul class="navList clearfix">
            <li class="active">
              <router-link to="/">首页</router-link>
             <!--  <a href="javascript:;">首页</a> -->
            </li>
            <li>
              <router-link to="/investIndex">我要投资</router-link>
            </li>
            <li>
              <router-link to="/loanIndex">我要借款</router-link>
            </li>
            <li>
              <router-link to="/safetyIndex">安全保障</router-link>
            </li>
            <li >
              <a href="javascript:;">关于我们</a>
            </li>
            <li class="last">
              <a href="javascript:;">
                <i></i>
                我的账户
              </a>
            </li>
          </ul>
      </div>

      </div>
    </div>
    <!-- 导航 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- 尾部 -->
    <div class="footer">
        <div class="banxin ">
            <div class='clearfix'>
                <div class='knowUs fl'>
                  <h4>了解我们</h4>
                  <p>
                    <a href="javascript:;">注册用户</a>
                    <a href="javascript:;">用户充值</a>
                    <a href="javascript:;">帮助中心</a>
                  </p>
                  <p>
                    <a href="javascript:;">用户中心</a>
                    <a href="javascript:;">用户提现</a>
                    <a href="javascript:;">关于我们</a>
                  </p>
                </div>
                <div class='aboutUs fl'>
                  <h4>联系我们</h4>
                  <p>地址：深圳市福田区深南大道2003号华嵘大厦1208室</p>
                  <p>邮箱：info@hyft88.com</p>
                </div>
                <div class='callUs fr'>
                    <p class="call"><i class="iphonIcon"></i>400-040-5828</p>
                    <p class="time"><i class="iphonIcon"></i>客服服务时间：09:00~18:00（周一至周五）</p>
                    <p class="share">
                        <span class="Iphon">
                            <i class="IphonScan"></i>
                        </span>
                        <span class="weixin">
                            <i class="IphonScan"></i>
                        </span>
                        <a href="https://weibo.com/6387473458/manage" class="weibo">
                            <!--  <i class="IphonScan"></i> -->
                        </a>

                    </p>
                </div>
            </div>
            <div class="link">
                <p>
                  <span>有情链接：</span>
                  <a href="JavaScript:;" v-for="item in linkList" >{{item.name}}</a>
                  <span class="fr" @click="slideUp">
                    展示
                    <i ></i>
                  </span>
                </p>
            </div>
          <!--   <div class="copyRight">
              <span class="CopyrightText">© 2017 深圳汇银富通互联网金融服务有限公司版权所有 | 粤ICP备17119511号</span>
              <span class="thrplatform fr">
                <a class="thrplatform1" href="javascript;;"></a>
                <a class="thrplatform2" href="javascript;;"></a>
                <a class="thrplatform3" href="javascript;;"></a>
              </span>
          </div> -->
             <div class="copyRight">
                <span class="CopyrightText">&nbsp;&nbsp;© 2017 深圳汇银富通互联网金融服务有限公司版权所有</span>
                <span style="font-size:12px;color:#999;">|</span>
                <a href="javascript:;" style="font-size:12px;color:#999;"><i class='dunPai'></i>粤ICP备17119511号</a>
                <span class="thrplatform fr">
                    <a href="https://webverify.cfca.com.cn/WebVerify/webVerifyServlet?domain=www.hyft88.com" target="_blank" class="cfca">
                    </a>
                    <a id='___szfw_logo___' href='https://credit.szfw.org/CX20171010036827321635.html' target='_blank' class="cert">
                    </a>
                    <a href="https://ss.knet.cn/verifyseal.dll?sn=e17101044030069116t6og000000&ct=df&a=1&pa=0.24426555407916017" target="_blank" class="kxw">
                    </a>
                    <a href="https://webscan.360.cn/task/view/id/15112344901088" target="_blank" class="webscan">
                    </a>
                    <a href="https://v.pinpaibao.com.cn/cert/site/?site=www.hyft88.com&at=business" target="_blank" class="business">
                    </a>
                    <a href="https://www.gdnet110.gov.cn" target="_blank" class="gdnet110">
                    </a>
                </span>
            </div>
        </div>
    </div>
    <!-- 右侧悬浮 -->
    <div id="AdLayer" class="hidden-xs hidden-sm xuanfu ng-scope">
    <div class="xf xuanfu-sm" id="hyft_online_kf">
        <div style="height:43px;padding-top:3px;">
            <a style="display: inline-block;">
                <img style="margin-top:7px;" src="./assets/images/common/float_kf.png" />
            </a>
        </div>
        <div style="color:#fff;font-size:14px;">
            在线客服
        </div>

    </div>
    <div class="xf xuanfu-kf" onmouseover="display_content(1,false)" onmouseout="display_content(1,true)">
        <div style="height:40px;padding-top:5px;">
            <img style="margin-top: 3px;" src="./assets/images/common/gfq.png" />
        </div>
        <div style="color:#fff;margin-top:2px;font-size:14px;">
            客服热线
        </div>
        <div id="AdLayer_01" class="xuanfu-h" style="display:none;">
            <div>
                @*<h5 style="font-size:14px;">官方投资理财群</h5>
                    <a href="//shang.qq.com/wpa/qunwpa?idkey=5fd840202e4112e5aa023b9c693bc629ddea166dbc520db7b650e15d38da0ef1" target="_blank" class="border-a">新手群：<span class="font16">114351013</span></a>
                    <a href="//shang.qq.com/wpa/qunwpa?idkey=7c47d14adbc0f8f8dadafa33f6d23d482945b1382126c59799b5acb9472e0933" target="_blank" class="border-a">投资群：<span class="font16">650436127</span></a>
                    <span class="info" style="font-size:14px;display:block;padding:0px 0px;margin-top:0px;height:30px;line-height:30px;">（投资群限投资5千以上）</span>*@
                <i class="xf-xian"></i>
                <h5 style="text-align:center;"><i class="xf-dh" style="font-size:14px;"></i>全国客服</h5>
                <h4 style="text-align:center;padding:5px 0px;">400-040-5828</h4>
                <span style="font-size:14px;text-align:center;display:block">服务时间：09:00-18:00</span>
            </div>
        </div>
    </div>
    <div class="xf xuanfu-sm" onmouseover="display_content(2,false)" onmouseout="display_content(2,true)">
        <div style="height:43px;padding-top:3px;">
            <img style="margin-top:4px;" src="./assets/images/common/float_phone.png" />
        </div>
        <div style="color:#fff;font-size:14px;">
            APP下载
        </div>
        <div id="AdLayer_02" class="xuanfu-h" style="display: none;">
            <div style="text-align:center;">
                <img style="width:150px;height:150px;" src="./assets/images/common/float_app.png" />
                <h5>扫描下载App</h5>
            </div>
        </div>
    </div>
    <div class="xf xuanfu-sm" onmouseover="display_content(3,false)" onmouseout="display_content(3,true)">
        <div style="height:43px;padding-top:3px;">
            <img style="margin-top:5px;" src="./assets/images/common/float_wx.png" />
        </div>
        <div style="color:#fff;font-size:14px;">
            公众号
        </div>
        <div id="AdLayer_03" class="xuanfu-h" style="display: none;">
            <div style="text-align:center;">
                <img style="width:150px;height:150px;" src="./assets/images/common/fwh.jpg" />
                <h5>扫描官方微信公众号</h5>
            </div>
        </div>
    </div>
    <div class="to-top" id="toTop" style="padding:0px;display:none;">
        <a target="_self" href="javaScript:;" style="height:100%;padding:10px 0px;">
            <img style="" src="./assets/images/common/float_top.png" />
            <div style="color:#fff;font-size:14px; margin-top:0px;">
                返回顶部
            </div>
        </a>

    </div>
</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      linkList:[
        {
          name:"网贷第三方"
        },
        {
          name:"网贷第三方"
        },
        {
          name:"网贷档案"
        },
        {
          name:"网贷第三方"
        },
        {
          name:"网贷快讯"
        },
        {
          name:"网贷第三方"
        },
        {
          name:"网贷审计"
        },
        {
          name:"网贷第三方"
        },

      ],
      linkUP:true
    }
  },
  mounted(){

  },
  methods:{
    slideUp() {
      if(this.linkUP){
        for(let k=0;k<20;k++){
          this.linkList.push({
            name:"网贷第三方"
          })
        }
        this.linkUP=false
      }else{
        this.linkList=[
          {
            name:"网贷第三方"
          },
          {
            name:"网贷第三方"
          },
          {
            name:"网贷档案"
          },
          {
            name:"网贷第三方"
          },
          {
            name:"网贷快讯"
          },
          {
            name:"网贷第三方"
          },
          {
            name:"网贷审计"
          },
          {
            name:"网贷第三方"
          },

        ]
        this.linkUP=true
      }

    }
  }

}
</script>

<style>

.xuanfu {
    bottom: 360px;
    height: 100px;
    position: fixed;
    right: 22px;
    width: 64px;
    z-index: 1000;
}

.xuanfu > div {
    background: #aaa;
    color: #fff;
    display: block;
    height: 69px;
    margin: 5px 0;
    position: relative;
    text-align: center;
    width: 100%;
}

.xuanfu > div.to-top {
    background: #aaa none repeat scroll 0 0;
    font-size: 15px;
    padding: 10px 0;
}

.xf a img {
    margin-top: 9px;
}

* {
    box-sizing: border-box;
}

.xuanfu-h {
    background: transparent none repeat scroll 0 0;
    color: #666;
    cursor: default;
    display: none;
    height: auto;
    min-height: 138px;
    position: absolute;
    right: 64px;
    top: -32px;
    width: 190px;
    z-index: 200;
}

    .xuanfu-h > div {
        background: #fff none repeat scroll 0 0;
        border: 1px solid #e4e4e4;
        padding: 10px;
        text-align: left;
    }

a {
    text-decoration: none;
}

.border-a {
    background: rgba(0, 0, 0, 0) -moz-linear-gradient(center top, #f9f8f8, #fff) repeat scroll 0 0;
    border: 1px solid #d7d7d7;
    border-radius: 6px;
    color: #666;
    display: block;
    font-size: 14px;
    margin-right: 10px;
    margin-top: 10px;
    padding: 4px 0;
    text-align: center;
    width: 100%;
}

.qqlink {
    margin-bottom: 15px;
    position: relative;
}

    .qqlink img {
        bottom: 2px;
        left: 10px;
        position: absolute;
        text-align: left;
    }

.xf-dh {
    background: rgba(0, 0, 0, 0) url("http://www.darenloan.com/common/css/../imgs/main/xf-dh.png") no-repeat scroll 0 0;
    display: inline-block;
    height: 22px;
    margin-right: 5px;
    vertical-align: middle;
    width: 30px;
}

.xuanfu-h .info {
    color: #666;
    font-size: 12px;
    margin-top: 5px;
}

.xuanfu > div.xuanfu-kf, .xuanfu > div.xuanfu-kf:hover, .xuanfu > div.xuanfu-kf.active {
    background-position: center top;
}

.xuanfu > div.xuanfu-dh, .xuanfu > div.xuanfu-dh:hover, .xuanfu > div.xuanfu-dh.active {
    background-position: center -74px;
}

.xuanfu > div.xuanfu-sm, .xuanfu > div.xuanfu-sm:hover, .xuanfu > div.xuanfu-sm.active {
    background-position: center -80px;
}

.xuanfu > div.to-top {
    background: #aaa none repeat scroll 0 0;
    font-size: 15px;
    padding: 10px 0;
}

    .xuanfu > div.to-top a {
        color: #fff;
        display: block;
        height: 100%;
        width: 100%;
    }

.xuanfu > div:hover, .xuanfu > div.active {
    background: #ffbb20;
    cursor: pointer;
}

.xuanfu .to-top:hover, .xuanfu .to-top:active {
    background: #ffbb20;
}
/**************************悬浮框 end *********************/
</style>
