<template>
 <div class="content-login">
    <div class="banxin clearfix" style="position:relative;">
        <div class="login-box  clearfix">
            <h2 class='login-title'>登录汇银富通</h2>
            <p class="login-noAcoount">
                <span>还没有账号？</span>
                <a href="/passport/register">免费注册</a>
            </p>
            <p class="position"><i class="userNameIcon"></i><input class="login-inputStyle" id="LoginName" type="text" placeholder="请输入手机号" name=""></p>
            <p class="login-prompt" id="LoginNameError" style="visibility:hidden;"><i class="promptIcon"></i>请输入手机号码</p>
            <p class="position"><i class="userPasswordIcon"></i><input class="login-inputStyle"  id="Psw" type="password" placeholder="请输入密码" name=""></p>
            <p class="login-prompt" id="PswErroer" style="visibility:hidden;"><i class="promptIcon"></i>请输入6~20位密码</p>
            <p class="login-remember">
                <input type="checkbox" id="remeber" /><label  for="remeber">记住用户名</label>
                <a class="fr" href="/passport/forget">忘记密码？</a>
            </p>
            <p><a class="login-buttom" href="javascript:;" id="LoginBtn">立即登录</a></p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted:function(){

    },

}
</script>
<style scoped>

::-webkit-input-placeholder { /* WebKit browsers */
    color: #BBB;
    font-family: "microsoft YaHei"
}

:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #BBB;
    font-family: "microsoft YaHei"
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #BBB;
    font-family: "microsoft YaHei"
}
/* ::-ms-input-placeholder { Internet Explorer 10+
    color:    #888;
} */

button {
    background-color: transparent;
    border: none;
    font-family: "Microsoft YaHei";
    font-weight: 100;
}
/* 登录样式 */
.content-login {
    width: 100%;
    height: 618px;
    background: url(../../assets/images/passport/banner.jpg);
    background-size: cover;
    position: relative;
}

.content-login .login-box {
    width: 399px;
    height: 422px;
    background-color: #fff;
    margin-top: 98px;
    padding: 0 44px;
    position: absolute;
    right:0px;
    top:50%;
}

.content-login .login-title {
    font-size: 20px;
    color: #282828;
    font-weight: normal;
    padding-top: 33px;
}

.content-login .login-noAcoount {
    text-align: right;
    padding-bottom: 15px;
    padding-top: 10px;
}

.content-login .login-noAcoount span {
    font-size: 14px;
    color: #888;
}

.content-login .login-noAcoount a {
    font-size: 14px;
    color: #ff7f00;
    text-decoration: none;
}

.content-login .login-noAcoount a:hover {
    text-decoration: none;
}

.content-login .login-inputStyle {
    width: 100%;
    height: 45px;
    border: 1px solid #ddd;
    padding-left: 69px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: #bbb;
}

.userNameIcon {
    height: 44px;
    width: 57px;
    position: absolute;
    top: 1px;
    left: 0px;
    border-right: 1px solid #ddd;
    background: url(../../assets/images/passport/userNameIcon.png) no-repeat;
    background-position: center;
}

.userPasswordIcon {
    height: 44px;
    width: 57px;
    position: absolute;
    top: 1px;
    left: 0px;
    border-right: 1px solid #ddd;
    background: url(../../assets/images/passport/userPasswordIcon.png) no-repeat;
    background-position: center;
}

.position {
    position: relative;
}

.content-login .login-prompt {
    color: #6CB7FF;
    font-size: 12px;
    line-height: 28px;
    height: 28px;
}

.login-prompt .promptIcon {
    width: 13px;
    height: 13px;
    display: inline-block;
    background: url(../../assets/images/passport/promptIcon.png);
    vertical-align: middle;
    margin: 5px;
}

.login-remember {
    padding-top: 26px;
}

.login-remember, .login-remember a {
    color: #888;
    font-size: 14px;
    padding-bottom: 17px;
}

.login-remember input {
    margin-right: 5px;
}

.login-buttom {
    width: 100%;
    height: 44px;
    background-color: #f90;
    display: block;
    border-radius: 4px;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    color: #fff;
}

.login-buttom:hover {
    background-color: #ff9900;
}



</style>
