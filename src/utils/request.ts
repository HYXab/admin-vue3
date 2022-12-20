import axios from "axios";
import { getToken, removeToken } from "./auth";
import nprogress from "./mynprogress";
import { ElMessage, ElMessageBox } from "element-plus";
import { router } from "@/router/inedx";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
export let isRelogin = { show: false };
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.token = getToken();
  nprogress.start();
  return config;
});

request.interceptors.response.use(
  (res) => {
    nprogress.done();
    const code = res.data.code || 200;
    if (code == 401) {
      removeToken()
      ElMessageBox.confirm(
      "登录已过期",
      "提示", 
      {
        confirmButtonText: "去登录",
        cancelButtonText: "停留在当前页",
        type: "warning",
      })
        .then(() => {
          router.push({name:'login'})
        })
      return Promise.reject("登录已过期");
    }
    if (code !== 200) {
      ElMessage({
        message: res.data.message || "error",
        type: "warning",
      });
      return Promise.reject("error");
    }
    return res.data;
  },
  (error) => {
    nprogress.done();
    console.log(error);
    let { message } = error;
    if (message == "Network Error") {
      message = "连接异常";
    } else if (message.includes("timeout")) {
      message = "请求超时";
    }
    console.log("出错了");

    ElMessage({
      message: message,
      type: "error",
    });
    return Promise.reject(error);
  }
);
export default request;
