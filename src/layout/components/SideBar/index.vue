<template>
  <div class="sidebar_container">
    <el-scrollbar>
      <div class="logo">
        <svg
          t="1671255720368"
          class="icon"
          viewBox="0 0 1081 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="868"
          width="24"
          height="24"
        >
          <path
            d="M909.496516 48.902825a280.960211 280.960211 0 0 0-359.017394 35.376793L151.520188 483.46679a66.873551 66.873551 0 0 0-19.856652 47.929849v289.404994l-114.118688 114.118688A52.951071 52.951071 0 0 0 8.187115 999.967974a51.35341 51.35341 0 0 0 79.654845 9.129495l110.695128-110.695128H489.539743a64.134703 64.134703 0 0 0 45.647475-18.030753l410.827278-410.827278A276.395463 276.395463 0 0 0 909.496516 48.902825zM437.273384 795.923759h-135.573002l215.456083-215.456084h162.73325l-196.284144 196.284144a65.960602 65.960602 0 0 1-46.332187 19.17194z m345.323151-318.162903H619.635048l157.255552-157.027315a51.581647 51.581647 0 0 0-9.814207-80.339557 52.722834 52.722834 0 0 0-64.591178 9.129495L234.142118 718.094813v-135.116527a65.504127 65.504127 0 0 1 19.17194-45.647475L629.677492 160.282665A169.580371 169.580371 0 0 1 839.199404 132.665942a166.613285 166.613285 0 0 1 29.214384 259.27766z"
            fill="#66B346"
            p-id="869"
          ></path>
        </svg>
        <h3>后台管理系统</h3>
      </div>
      <el-menu background-color="#2f4156" text-color="#fff"
      :default-active="activeName"
      >
        <SidebarItem
          v-for="(item, index) in sidebarList"
          :key="index"
          :routes="item"
          :index="index"
        ></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts" name="Sidebar">
import { usePermission } from "@/store/modules/permission";
import SidebarItem from "./SidebarItem.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute()
const PermissionStore = usePermission();
const sidebarList = computed(() => {
  return PermissionStore.sidebarList;
})
const activeName = computed(() => {
  return route.name
})

</script>

<style scoped lang="less">
.sidebar_container {
  width: 196px;
  height: 100%;
  background-color: #2f4156;
  .logo {
    display: flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    h3 {
      margin-right: 10px;
      margin-left: 10px;
      font-weight: 550;
      font-size: 15px;
      color: #fff;
    }
  }
}
</style>
