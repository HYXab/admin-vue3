import { defineStore } from "pinia";
import { reactive } from "vue";
export const useRouterHistory = defineStore('routerHistory', () => {
  const state = reactive({
    history: <any[]>[
      {path: "/index",
      name: "Index",
      meta: {title: '首页',show:true}}
    ]
  })
  return {state}
})