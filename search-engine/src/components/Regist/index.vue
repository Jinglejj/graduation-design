<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
             label-position="left">

      <div class="title-container">
        <h3 class="title">注册</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-user"></i>
        </span>
        <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="email">
        <span class="svg-container">
          <i class="el-icon-message"></i>
        </span>
        <el-input
            ref="email"
            v-model="loginForm.email"
            placeholder="请输入邮箱"
            name="email"
            tabindex="2"
            auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="verify">
        <span class="svg-container">
          <i class="el-icon-key"></i>
        </span>
        <el-input
            ref="verify"
            v-model="verify"
            placeholder="请输入验证码"
            name="verify"
            tabindex="2"
            auto-complete="on"
        >

        </el-input>
        <el-button  @click="sendVerifyCode"
                    class="getVerify"
                    :disabled="isSend">{{ tips }}
        </el-button>
      </el-form-item>
      <el-button type="primary" style="width:100%;"
                 @click.native.prevent="handleRegist">注册
      </el-button>
    </el-form>
  </div>
</template>

<script>

import {register} from "@/apis/user";
import {verifyEmail} from "../../apis/user";

export default {
  name: 'Regist',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        email: ''
      },
      tips: "获取验证码",
      verify: null,//验证码
      loginRules: {
        username: [{required: true, trigger: 'blur', message: '请输入用户名'}],
        password: [{required: true, trigger: 'blur', message: '请输入密码'}],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ]
      },
      passwordType: 'password',
      isSend: false,
      senconds: 60
    }
  },
  methods: {
    handleRegist() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.checkVerify()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toGetVerify() {

    },
    async sendVerifyCode() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          const data = await verifyCode(this.loginForm.email)
          if (data.data.code !== 200) {
            this.$message.error("验证码发送发送失败，请检查邮箱是否可用！")
          }
          this.isSend = true
          setTimeout(() => {
            this.isSend = false
            this.senconds = 60
            this.tips = "获取验证码"
          }, 62000)
          var timer = setInterval(() => {
            if (this.senconds > 0) {
              this.tips = this.senconds + "秒后重试"
              this.senconds -= 1
            } else {
              clearInterval(timer)
            }
          }, 1000)

        }
      })
    },
    async checkVerify() {
      if(this.verify!==null){
        const data = await verifyEmail(this.loginForm.email, this.verify)
        if (data.data.data) {//验证码验证成功
          //处理登陆请求 页面跳转 =》 上传页面
          const {data} = await register(this.loginForm);
          if (data.code === 200) {//修改状态=》跳转admin
            this.$message.success("注册成功，三秒后跳转登陆！")
          } else {
            this.$message.error("注册失败，请重试！")
          }
          setTimeout(() => {
            this.$router.push('login')
          }, 3000)
        } else {
          this.$message.error("验证码错误！")
        }
      }else{
        this.$message.warning("请输入验证码！")
      }
    }
  }
  ,
  mounted() {
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }


}
.getVerify{
  position: absolute;
  width: 112px;
  color: white;
  left: 406px;
  background-color: #6cbd22;
  border: 0px;
  height: 52px;
}
</style>
