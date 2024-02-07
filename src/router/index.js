import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld,
  },
  {
    path: '/:name',
    name: 'home',
    component: HelloWorld,
    props: true, 
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
