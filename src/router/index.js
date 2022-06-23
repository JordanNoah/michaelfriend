import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Solutions from '../views/Solutions.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/solutions',
    name:'Solutions',
    component:Solutions
  },
  {
    path:'/services',
    name:'Services',
    component:Services
  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
