<template>
  <el-sub-menu v-if="props.routes!.children.length > 1" :index="props.index">
    <template #title>
      <span>{{ props.routes!.meta.title }}</span>
    </template>
    <template v-for="(item,index) in props.routes!.children" key="index">
      <el-menu-item :index="item.name" v-if="!item.children" @click="routerPush(item.name);addHistory(item)">
        {{ item.meta.title }}
      </el-menu-item>
      <SidebarItem v-else :routes="item" :index="index"></SidebarItem>
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="props.routes!.children[0].name || props.index" @click="routerPush(props.routes!.children[0].name);addHistory(props.routes!.children[0])">
    <span>{{ props.routes!.children[0].meta.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts" name="SidebarItem">
import { useRouter, useRoute } from "vue-router";
import { useRouterHistory } from "@/store/modules/routerHistory";
const historyStore = useRouterHistory()
const props = defineProps({
  routes: Object,
  index: Number,
});
const router = useRouter()
const routerPush = (name:any) => {
  router.push({name:name})
}

const addHistory = (item:any) => {
  if(historyStore.state.history.some(i=>i.name == item.name)) {
    return
  }
  historyStore.$patch((state) => {
    state.state.history.push(item)
  })
}
</script>

<style scoped>

</style>
