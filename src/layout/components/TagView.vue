<template>
  <div class="tags_wrapper">
    <BorderTag
      v-for="(item,index) in list"
      :key="item.name"
      @click="router.push({ name: item.name })"
      @closed="handlerClose(item,index)"
      :class="activeName==item.name ? 'active' : ''"
      >{{ item.meta.title }}</BorderTag
    >
  </div>
</template>

<script setup lang="ts">
import BorderTag from "@/components/tag.vue";
import { useRouterHistory } from "@/store/modules/routerHistory";
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
const router = useRouter();
const route = useRoute();

const history = useRouterHistory();
const list = computed(() => {
  return history.state.history;
});
const handlerClose = (item: any, index: any) => {
  if(history.state.history.length == 1) {
    return
  }
  if(item.name == history.state.history[history.state.history.length - 1].name) {
    router.push({name:history.state.history[index - 1].name})
  } 
  else if (item.name == route.name) {
    router.push({name:history.state.history[index + 1].name})
  }
  history.$patch((state) => {
    state.state.history = state.state.history.filter(
      (i) => !(i.name == item.name)
    );
  });
};

const activeName = computed(() => {
  return route.name
})

</script>

<style scoped>
.tags_wrapper {
  height: 28px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.active {
  background-color: rgb(78, 132, 231);
  color: #fff;
}
</style>
