<template>
  <div class="app_wrapper">
    <Sidebar></Sidebar>
    <div class="right_wrapper">
      <MainHeader></MainHeader>
      <TagsView></TagsView>
      <div class="main"><RouterView></RouterView></div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Layout">
import Sidebar from "./components/SideBar/index.vue";
import MainHeader from "./components/MainHeader.vue";
import TagsView from "./components/TagView.vue";
import { onMounted } from "vue";
import { getUserInfo } from "@/api/login";
import { usePermission } from "@/store/modules/permission";
import { router, asyncRoutes,baseRoutes } from "@/router/inedx";
import filterroutes from "@/utils/filterRoute";
const permissionStore = usePermission()
const getUser = async() => {
  const {data} = await getUserInfo()
  const res = filterroutes(asyncRoutes,data)
  const routes = baseRoutes.concat(res)
  permissionStore.routes = routes
  routes.forEach((i) => {
    // @ts-ignore
    router.addRoute(i)
  })
}
onMounted(() => {
  getUser()
})
</script>

<style scoped lang="less">
.app_wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  .right_wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    .main {
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
}
</style>