import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../pages/login.vue")
    },
    {
        path: "/",
        name: "index",
        component: () => import("../pages/index.vue")
    },
    {
        path: "/userCenter",
        name: "userCenter",
        component: () => import("../pages/userCenter.vue")
    },
    {
        path: "/course/:id",
        name: "course",
        component: () => import("../pages/course.vue")
    },
    {
      path: "/contactlist",
      name: "contactlist",
      component: () => import("../views/ContactList.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
