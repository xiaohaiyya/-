<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <div class="choose">
                <span :class="[c_flag?'active':'']" @click="select1">账号密码登录</span>
                <span :class="[!c_flag?'active':'']" @click="select2">手机号登录</span>
            </div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <!-- 账号密码登录 -->
                <div v-if="c_flag">
                    <el-form-item prop="username">
                        <el-input v-model="param.username" placeholder="请输入用户名">
                            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            type="password"
                            placeholder="请输入密码"
                            v-model="param.password"
                            @keyup.enter.native="submitForm()"
                        >
                            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                        </el-input>
                    </el-form-item>
                </div>
                <!-- 手机号登录 -->
                <div v-if="!c_flag">
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
                </div>
                <div class="remember">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                    <span @click="register">注册账户</span>
                    <span @click="forget">忘记密码</span>
                </div>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('param')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import http from '@/http.js';
export default {
    data: function() {
        return {
            param: {
                username: '',
                password: '',
                phone: '',
                authcode: '' //验证码
            },
            rules: {
                username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
                phone: [{ required: true, message: '手机号不能为空', trigger: 'blur' }],
                authcode: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
            },
            // 登录方法判断
            c_flag: true,
            // 记住密码状态
            checked: true
        };
    },
    methods: {
        // 登录提交
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    let params = {
                        username: this.param.username,
                        password: this.param.password
                    };
                    console.log(params);
                    // 测试登录（post）
                    http.fetchPost('/login', params)
                        .then(res => {
                            if (res.data.data == '登录成功') {
                                this.$message.success('登录成功');
                                localStorage.setItem('ms_username', this.param.username);
                                // localStorage存储userId,方便后续操作
                                let userId = res.data.userId;
                                localStorage.setItem('userId', userId);
                                this.$router.push('/');
                            } else {
                                this.$message.error('账号或密码错误,请重新输入');
                                console.log('error submit!!');
                                return false;
                            }
                        })
                        .catch(err => {
                            console.log('请求出错', err);
                        });
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 选择登录方式
        select1() {
            this.c_flag = true;
        },
        select2() {
            this.c_flag = false;
        },
        getCode() {
            console.log('发送登录验证码')
        },
        // 注册账户
        register() {
            console.log('注册账户');
            this.$router.push('/register')
        },
        forget() {
            console.log('忘记密码')
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
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.choose {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    color: #fff;
    padding: 0 20px;
}
.choose span {
    display: inline-block;
    cursor: pointer;
    padding: 10px 20px;
}
.active {
    color: rgb(64, 158, 255);
    border-bottom: 2px solid rgb(64, 158, 255);
}
.remember{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 16px;
    font-size: 14px;
}
.remember span {
    color: rgb(64, 158, 255);
    cursor: pointer;
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