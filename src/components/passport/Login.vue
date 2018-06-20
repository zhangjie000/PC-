<template>
    <div>
         <el-row>
            <el-col :span="10" :offset="7">
                <el-tabs v-model="activeName">

                    <el-tab-pane label="登录" name="login">
                        <el-form :model="loginForm" :rules="rules" label-width="100px" ref="loginForm">
                            <el-form-item label="用户名" prop="LoginName">
                                <el-input v-model="loginForm.LoginName"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="Password">
                                <el-input v-model="loginForm.Password" type="Password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                                <el-button @click="resetForm('loginForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>

                    <el-tab-pane label="注册" name="register">
                        <Register></Register>
                    </el-tab-pane>

                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import api from '../../api'
//引入注册组件
import Register from './Register.vue'
export default {
    data(){
        return {
            activeName: 'login', //选项卡
            loginForm: {        //表单v-model的值
                LoginName: '15018543578',
                Password: 'a11111'
            },
            rules: { //验证规则
                LoginName: [
                    { required: true, message: '用户名不能少', trigger: 'blur'},
                    { min: 6, max: 16, message: '用户名在6到16位之间', trigger: 'blur'}
                ],
                Password: [
                    { required: true, message: '请输入密码', trigger: 'blur'}
                ]
            }
        }
    },
    mounted:function(){
         let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/');
         console.log( redirectUrl );
    },
    methods: {
        resetForm(formName){
            this.$refs[formName].resetFields();
        },
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){ //验证通过
                    let opt = this.loginForm;
                    api.userLogin(opt).then((data) => {

                        //console.log( data );
                        if(data.basis.Status == 200){
                            this.$message({
                                type: 'success',
                                message: '登录成功'
                            })
                            let token = data.result.Token;
                            this.$store.dispatch('UserLogin', token);
                            //如果用户手动输入"/"那么会跳转到这里来，即this.$route.query.redirect有参数
                            let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/');
                            //跳转到指定的路由
                            this.$router.push({
                                path: redirectUrl
                            });
                        }else{
                            this.$message({
                                type: 'info',
                                message: data.basis.Msg
                            });
                        }
                    });
                }else{
                    //验证不通过
                    return false;
                }
            });
        }
    },
    components: {
        Register
    }
}
</script>
<style scoped>

</style>
