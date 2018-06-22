<template>
<div class="registerBg">
    <div class="banxin">
        <div class="registerBox">
            <div class="registerTitle">

                <h2>用户注册</h2>
                <p>
                    <span>已有账号？</span>
                    <a href="javascript:;">立即登录</a>
                </p>

            </div>
            <div class="clearfix registerContent">
                <div class="fl">
                    <ul>
                        <li>
                            <i class="registerIcon registerIconNum"></i><input class="registerInputStyle"  type="text" placeholder="请输入注册手机号" name="" id="LoginName" data-val="LoginName">

                        </li>
                        <li>
                            <i class="registerIcon registerIconPassWord"></i><input  class="registerInputStyle" type="password" placeholder="6-20个字符，必须由两种不同符号的组合" maxlength="20" name="" id="Psw" data-val="Psw">

                        </li>
                        <li>
                            <div class="clearfix registerImgbox" id="pcodebox">
                                <i class="registerIcon registerIconIMgCode"></i><input  class="registerInputStyle" type="text" placeholder="请输入验证码" name="" id="PCode">
                              <!--   <img class="registerImg" src="" alt="" title="点击刷新" /> -->
                            </div>

                        </li>
                        <li>
                            <div class="clearfix" id="vcodebox">
                                <i class="registerIcon registerIconNumIpCode"></i><input class="fl codeInput registerInputStyle" type="text" placeholder="请输入验证码" name="" id="VCode"><button class="fr codeBtn" id="sendmsg">获取验证码</button>
                            </div>

                        </li>
                        <li class="recommend-default">
                            <p class="recommend"><i></i>推荐码（选填）</p>
                        </li>
                        <li class="hide">
                            <i class="registerIcon registerIconNumRcmd"></i><input  class="registerInputStyle" type="text" placeholder="请输入推荐码（选填）" name="" id="RcmdID" data-val="RcmdID">
                        </li>
                        <li class="agree">
                            <input type="checkbox" checked="checked" id="remeber" /><label for="remeber">我已阅读并同意</label><label> <span id="regpool">《汇银富通注册协议》</span></label>
                        </li>
                        <li>
                            <a class="login-buttom" href="javascript:;" id="register_btn">立即注册</a>
                        </li>
                    </ul>
                </div>
                <div class="fr">
                    <img class="registerRightImg" src="../../assets/images/passport/registerRightImg.jpg" alt="">
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 注册样式 */
.registerBg {
    background-color: #f5f5f5;
    padding: 25px 0px;
}

.registerBox {
    border: 1px solid #ececec;
    margin: 0 auto;
    padding: 0px 93px;
    padding-bottom: 74px;
    background-color: #fff;
}

.registerBox .registerTitle {
    height: 92px;
    border-bottom: 1px solid #e4e4e4;
    padding-top: 45px;
}

.registerBox .registerTitle > h2 {
    font-size: 22px;
    color: #555;
    float: left;
    font-weight: normal;
}

.registerBox .registerTitle > p {
    float: right;
    margin-top: 10px;
}

.registerBox .registerTitle > p > span {
    font-size: 14px;
    color: #888;
}

.registerBox .registerTitle > p > a {
    font-size: 14px;
    color: #f90;
}

.registerBox .registerContent {
    padding-top: 36px;
}

.registerBox .registerInputStyle {
    border: 1px solid #ddd;
    font-size: 14px;
    padding-left: 12px;
    height: 45px;
    width: 310px;
    line-height: 43px;
    color: #333 !important;
    font-family: "Microsoft YaHei";
}

.registerBox .registerIcon {
    width: 50px;
    height: 45px;
    display: inline-block;
    border: 1px solid #ddd;
    border-right: 0px;
    margin-top: -1px;
    background: url(../../assets/images/passport/registerIcon.png) no-repeat;
}

.registerBox .registerIconNum {
    background-position: 11px 10px;
}

.registerBox .registerIconPassWord {
    background-position: 13px -32px;
}

.registerBox .registerIconIMgCode {
    background-position: 13px -73px
}

.registerBox .registerIconNumIpCode {
    float: left;
    margin-top: 0px;
    background-position: 13px -116px;
}

.registerBox .registerIconNumRcmd {
    background-position: 12px -159px;
}

.registerBox .control-group.error .help-inline {
    background: url(../../assets/images/passport/promptIcon.png) 0px 5px no-repeat;
    margin-left: 52px;
    color: #6CB7FF !important;
    /*background:transparent;*/
}

.registerBox .control-group.success .help-inline {
    background: transparent;
}

.registerBox .control-group.warning .help-inline {
    background: transparent;
}


.registerBox .registerImgbox {
    position: relative;
}

.registerBox .registerImgbox {
    position: relative;
}

.registerBox .registerImg {
    position: absolute;
    top: 4px;
    right: 10px;
    width: 110px;
    height: 38px;
    cursor: pointer;
}

.registerBox .codeInput {
    width: 166px;
}

.registerBox .codeBtn {
    width: 123px;
    background-color: #ffbb20;
    line-height: 40px;
    height: 40px;
    border: none;
    margin-top: 3px;
    color: #fff;
    cursor: pointer;
    font-family: "Microsoft YaHei";
}

.registerBox ul > li {
    height: 70px;
    /*line-height: 25px;*/
}

.registerBox ul > li > p {
    font-size: 10px;
    color: #ff3030;
    height: 25px;
    line-height: 25px;
}

.registerBox ul > li > span {
    font-size: 10px;
    color: #ff3030;
    height: 25px;
    line-height: 25px;
}

.registerBox ul > li.recommend-default, .registerBox ul > li.recommend-open {
    height: 46px;
}

.registerBox ul > li .recommend {
    color: #ffbb20;
    font-size: 16px;
    height: 40px;
    width: 132px;
    line-height: 40px;
    cursor: pointer;
}

.registerBox .recommend i {
    width: 0px;
    height: 0px;
    border: 6px solid rgba(0,0,0,0);
    /*border-top:6px solid #ffbb20;*/
    display: inline-block;
    margin-right: 5px;
}

.registerBox li.recommend-open .recommend i {
    ;
    border-top: 6px solid #ffbb20;
}

.registerBox li.recommend-default .recommend i {
    margin-top: -3px;
    border-left: 6px solid #ffbb20;
    margin-right: -2px;
}

.registerBox .agree {
    height: 50px;
    line-height: 50px;
}

.registerBox .agree {
    height: 65px;
    line-height: 65px;
}

.registerBox .agree label {
    font-size: 14px;
    color: #5c5c5c;
    margin-left: 5px;
}

.registerBox .agree label span {
    color: #ffbb20;
}

.registerBox .login-buttom {
    border-radius: 2px;
    height: 49px;
    line-height: 49px;
}

.registerRightImg {
    margin-top: 5px;
    margin-right:10px;
}
</style>