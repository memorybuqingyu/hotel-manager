import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由数组
const routes = [

  //登录页
  {
    path:'/',
    component: ()=> import('@v/Login.vue')
  },
  {
    path:'/layout',
    component: ()=> import('@v/Layout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
