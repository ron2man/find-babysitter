import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SitterList from './components/SitterList.vue'
import Sign from './views/Sign.vue'
import SitterDetails from './components/SitterDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/baby/list',
      name: 'list',
      component: SitterList
    },
    {
      path: '/baby/:id',
      name: 'sitterDetails',
      component: SitterDetails
    }
  ]
})
