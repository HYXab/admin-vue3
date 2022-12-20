<template>
  <div class="header_wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-if="show" to="/index">首页</el-breadcrumb-item>
      <template v-for="item in history" :key="item.path">
        <el-breadcrumb-item v-if="item.meta.title" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="router.push({name:'Personal'})">个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
const route = useRoute()
const router = useRouter()
const history = computed(() => {
  return route.matched
})
const show = computed(() => {
  if(route.path == '/index') {
    return false
  } else {
    return true
  }
})


</script>

<style scoped>
.header_wrapper {
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 40px 0 20px;
  justify-content: space-between;
  align-items: center;
}
</style>
