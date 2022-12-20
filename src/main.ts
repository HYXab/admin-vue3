import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/index.css'
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
import { router } from "@/router/inedx";
import store from "@/store/index";
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
console.log(import.meta.env)
