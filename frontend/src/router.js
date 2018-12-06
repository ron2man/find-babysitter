import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SitterList from './components/SitterList.vue'
import Sign from './views/Sign.vue'
import SitterDetails from './components/SitterDetails.vue'
import ParentProfile from './components/ParentProfile.vue'
import UserDetails from './components/UserDetails.vue'
import ChatContact from './components/ChatContact.vue'
import scedualeZone from './components/scedualeZone.vue'
import SitterProfile from './components/SitterProfile.vue'
import Notifications from './components/Notifications.vue'
import requestsSitter from './components/requestsSitter.vue'
import requestsParent from './components/requestsParent.vue'
import Profile from './views/Profile.vue'



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
      path: '/profiletest',
      name: 'profiletest',
      component: Profile
    },
    {
      path: '/baby/profile/parent/:userName',
      name: 'parentProfile',
      component: ParentProfile,
      children: [
        { path: 'notifications', name: 'notifications', component: Notifications },
        { path: 'details', name: 'details', component: UserDetails },
        { path: 'contact', name: 'contact', component: ChatContact },
        { path: 'requests', name: 'requests', component: requestsParent },
        { path: 'sceduale', name: 'sceduale', component: scedualeZone }
      ]
    },
    {
      path: '/baby/profile/sitter/:userName',
      name: 'sitterProfile',
      component: SitterProfile,
      children: [
        { path: 'notifications', name: 'notifications', component: Notifications },
        { path: 'details', name: 'details', component: UserDetails },
        { path: 'contact', name: 'contact', component: ChatContact },
        { path: 'requests', name: 'requests', component: requestsSitter },
        { path: 'sceduale', name: 'sceduale', component: scedualeZone }
      ]
    },
    {
      path: '/baby/list/:id',
      name: 'sitterDetails',
      component: SitterDetails
    },
  ]
})
