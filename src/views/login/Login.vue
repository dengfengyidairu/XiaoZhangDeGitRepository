<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg" v-show="flag">
    <div class="biox">
      <div class="pawbox">
        <el-form :model="loginForm" :rules="loginRules" ref="loginRef">
          <!-- 手机号 -->
          <el-form-item prop="phone">
            <el-input style="margin-top: 74px;" v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" maxlength="15" minlength="6">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn-login" @click="loginFn">登录</el-button>
          </el-form-item>
        </el-form>
        <span @click="chaFn"><i class="iconfont icon-chahao"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
import { phoneLoginAPI } from '@/api/Login/index'
export default {
  data() {
    return {
      flag: false,
      loginForm: {
        phone: '',
        password: ''
      },
      // 表单验证规则
      loginRules: {
      phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^[0-9]{11}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 叉号点击事件
    chaFn() {
      this.flag = false
    },
    // 登录按钮点击事件，判断表单是否通过校验，通过校验调用登录接口返回登录信息
    loginFn () {
      this.$refs.loginRef.validate(async valid => {
        if (valid) {
          const res = await phoneLoginAPI(this.loginForm)
          if(res.data.code === 200){
            this.flag = false
            this.$message.success('登录成功')
          } else {
            this.$message.error(res.data.message)
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.bg {
  width: 1259px;
  height: 640px;
  background-color: rgb(0, 0, 0, 0.4);
  background-position: 0px -537px;
  position: fixed;
  top: 68px;
  left: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.biox {
  width: 500px;
  height: 300px;
  background-color: #1f91a3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.pawbox input {
  width: 240px;
  height: 30px;
  /* margin: 20px 0; */
  border-radius: 4px;
  border: none;
}

.pawbox button {
  width: 120px;
  height: 40px;
  border: none;
  margin: 20px 0 0 43px;
  color: #000;
  font-weight: 800;
  font-size: 18px;
  border-radius: 8px;
  background-color: azure;
}

.pawbox span {
  position: relative;
  bottom: 260px;
  left: 294px;
}

.pawbox span i {
  font-size: 36px;
}


input:focus {
  outline: none;
}

button:hover,
.pawbox span {
  cursor: pointer;
}
</style>