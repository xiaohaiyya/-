<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">账号注册</div>
            <el-form
                :model="param"
                :rules="rules"
                ref="register"
                label-width="0px"
                class="ms-content"
            >
                <el-form-item prop="mail">
                    <el-input v-model="param.mail" placeholder="邮箱">
                        <el-button slot="prepend" icon="el-icon-lx-mail"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="pwd1">
                    <el-input v-model="param.pwd1" placeholder="6 - 16位密码，区分大小写">
                        <el-button slot="prepend" icon="el-icon-lx-text"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="pwd2">
                    <el-input v-model="param.pwd2" placeholder="确认密码">
                        <el-button slot="prepend" icon="el-icon-lx-text"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="phone">
                    <el-input v-model="param.phone" placeholder="请输入手机号">
                        <el-button slot="prepend" icon="el-icon-lx-mobile"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="authcode">
                    <el-input
                        style="width: 62%; margin-right: 6%;"
                        placeholder="验证码"
                        v-model="param.authcode"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-mail"></el-button>
                    </el-input>
                    <el-button type="primary" style="width: 32%;" @click="getCode">获取验证码</el-button>
                </el-form-item>
                <div class="login-btn rowcenter">
                    <el-button type="primary" @click="submitForm()" style="width: 40%;">注册</el-button>
                    <el-button
                        type="primary"
                        @click="toLogin()"
                        style="width: 40%;background:none;border:none;color:rgb(102,177,255)"
                    >使用已有账号登陆</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import http from '@/http.js';
import { timeout } from 'q';
export default {
    data: function() {
        return {
            param: {
                mail: '',
                pwd1: '',
                pwd2: '',
                phone: '',
                authcode: '' // 验证码
            },
            rules: {
                mail: [{ required: true, message: '邮箱不能为空', trigger: 'blur' }],
                pwd1: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
                pwd2: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
                phone: [{ required: true, message: '手机号不能为空', trigger: 'blur' }],
                authcode: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
            }
        };
    },
    methods: {
        // 获取注册验证码
        getCode() {
            console.log('发送注册验证码');
        },
        // 账号注册提交
        submitForm() {
            this.$refs.register.validate(valid => {
                if (valid) {
                    if (this.param.pwd1 != this.param.pwd2) {
                        alert('两次输入密码不一致');
                    } else {
                        let params = {
                            username: this.param.phone,
                            password: this.param.pwd1
                        };
                        http.fetchPost('/regist', params)
                            .then(res => {
                                if (res.status == 200) {
                                    this.$message.success('注册成功');
                                    this.$router.push('/success');
                                } else {
                                    this.$message.error('账号注册失败，请重试');
                                    console.log('error submit!!');
                                    return false;
                                }
                            })
                            .catch(err => {
                                console.log('请求出错', err);
                            });
                    }
                } else {
                    this.$message.error('请输入内容');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        toLogin() {
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
@import url('../../assets/css/reset.css');
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background: #ccc;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
</style>