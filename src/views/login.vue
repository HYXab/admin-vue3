<template>
  <div class="login">
    <el-card class="box-card">
      <h3>登录后台管理系统</h3>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名" @keyup.enter.native="loginHandler(loginFormRef!)"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="密码" @keyup.enter.native="loginHandler(loginFormRef!)"/>
        </el-form-item>
        <el-form-item style="margin-top: 20px;">
          <el-button type="primary" style="width: 100%;" @click="loginHandler(loginFormRef!)">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import { login } from "@/api/login";
import { setToken } from "@/utils/auth";
import { useRouter, useRoute, RouteRecordName } from "vue-router";
const router = useRouter()
const route = useRoute()
const loginForm = reactive({
  username: "",
  password: "",
});

const loginFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  username: [
    {required:true,message:'必须填写用户名',trigger:'blur'},
    {min:2,max:18,message:'长度2~18',trigger:'blur'}
  ],
  password: [
    {required:true,message:'必须填写密码',trigger:'blur'},
    {min:3,max:18,message:'长度3~18',trigger:'blur'}
  ]
})
const loginHandler = (Ref:FormInstance) => {
  if(!Ref) return
  Ref.validate( async (valid) =>  {
    if(valid) {
      const fromto = route.query.from || undefined
      const res = await login(loginForm.username,loginForm.password)
      setToken(res.token)
      if(fromto) {
        // @ts-ignore
        router.push({name: fromto})
      } else {
        router.push({name:'Index'})
      }
      
    }
  })
}
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom,rgb(17, 31, 231),rgb(158, 186, 247));
  display: flex;
  justify-content: center;
  align-items: center;
  .el-card {
    padding: 20px;
    width: 400px;
    height: 300px;
    h3 {
      color: black;
      text-align: center;
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .el-form {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
