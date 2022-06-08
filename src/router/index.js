import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },{
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import( '../views/Search.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '../views/Detail.vue')
  },{
    path: '/publish',
    name: 'detail',
    component: () => import( '../views/publish.vue')
  },{
    path: '/user',
    name: 'user',
    component: () => import( '../views/userSpace.vue')
  },{
    path: '/findback',
    name: 'findback',
    component: () => import( '../views/findback.vue')
  },{
    path: '/eee',
    name: '1',
    component: () => import( './Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
