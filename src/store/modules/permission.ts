import { defineStore } from "pinia";
import { computed,ref } from "vue";


export const usePermission = defineStore("permission", () => {



  const routes = ref([])

  const sidebarList = computed(() => {
    let res = routes.value.filter((i) => i.children);
    res.forEach((i) => {
      i.children = i.children!.filter((i) => i.meta.show);
    });
    return res.filter((i) => i.children!.length !== 0);
  });
  return { sidebarList,routes };
});
