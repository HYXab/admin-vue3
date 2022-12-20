import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import { getToken } from "@/utils/auth";

const baseRoutes = [
    //基础路由
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index.vue"),
        meta: { title: "首页", show: true },
      },
    ],
  },
  {
    path: "/login",
    name:'login',
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/register",
    name:'register',
    component: () => import("@/views/register.vue"),
  },
  {
    path: "/users",
    component: Layout,
    children: [
      {
        path: "personal",
        component: () => import("@/views/system/userCenter/index.vue"),
        name: "Personal",
        meta: { title: "个人中心", show: false },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
]

const asyncRoutes = [
  //动态路由
  {
    path: "/system",
    component: Layout,
    name:'System',
    meta: { title: "系统管理" },
    children: [
      {
        path: "user-auth",
        component: () => import("@/views/system/userAuth/index.vue"),
        name: "UserAuth",
        meta: { title: "用户管理", show: true },
      },
      {
        path: "role-auth",
        component: () => import("@/views/system/roleAuth/index.vue"),
        name: "RoleAuth",
        meta: { title: "权限管理", show: true },
      },
      {
        path: "announcement",
        component: () => import("@/views/system/Announcement/index.vue"),
        name: "Announcement",
        meta: { title: "通知公告", show: true },
      },
      {
        path: "log",
        component: () => import("@/views/system/Log/index.vue"),
        name: "Log",
        meta: { title: "日志管理", show: true },
        children: [
          {
            path: "loginlog",
            component: () => import("@/views/system/Log/loginLog.vue"),
            name: "LoginLog",
            meta: { title: "登录日志", show: true },
          },
          {
            path: "operationlog",
            component: () => import("@/views/system/Log/operationLog.vue"),
            name: "OperationLog",
            meta: { title: "操作日志", show: true },
          },
        ],
      },
    ],
  },
  {
    path: "/test",
    component: Layout,
    name:'test',
    redirect:'/test1',
    children:[
      {
        path: "test1",
        component: () => import("@/views/test.vue"),
        name: "test1",
        meta: { title: "测试", show: true }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  //@ts-expect-error
  routes: baseRoutes, 
});

router.beforeEach((to,from,next) => {
  if(!getToken()) {
    if(to.path !== '/login') {
      next({name:'login'})
    } else {
      next()
    }
  } else {
    if(to.path == '/login') {
      next({name:'Index'})
    } else {
      next()
    }
  }
  
})

export {
  router,baseRoutes,asyncRoutes
}