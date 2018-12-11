import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SitterList from './views/SitterList.vue'
import Sign from './views/Sign.vue'
import SitterDetails from './components/SitterDetails.vue'
import ParentProfile from './components/ParentProfile.vue'
import UserDetails from './components/UserDetails.vue'
import ChatContact from './components/ChatContact.vue'
import SitterProfile from './components/SitterProfile.vue'
import RequestsSitter from './components/RequestsSitter.vue'
import RequestsParent from './components/RequestsParent.vue'
import Profile from './views/Profile.vue'
import Inbox from './components/Profile/Inbox.vue'
import Schedule from './components/Profile/Schedule.vue'

import Notifications from './components/Notifications.vue'
import ScedualeZone from './components/ScedualeZone.vue'


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
    // {
    //   path: '/profiletest',
    //   name: 'profiletest',
    //   component: Profile
    // },
    {
      path: '/baby/profile/parent/:userName',
      name: 'parentProfile',
      component: ParentProfile,
      children: [
        { path: 'notifications', name: 'notifications', component: Inbox },
        // { path: 'notifications', name: 'notifications', component: Notifications },
        { path: 'details', name: 'details', component: UserDetails },
        { path: 'contact', name: 'contact', component: ChatContact },
        { path: 'requests', name: 'requests', component: RequestsParent },
        { path: 'schedule', name: 'schedule', component: Schedule }
        // { path: 'sceduale', name: 'sceduale', component: ScedualeZone }
      ]
    },
    {
      path: '/baby/profile/sitter/:userName',
      name: 'sitterProfile',
      component: SitterProfile,
      children: [
        { path: 'notifications', name: 'notifications', component: Inbox },
        { path: 'details', name: 'details', component: UserDetails },
        { path: 'contact', name: 'contact', component: ChatContact },
        { path: 'requests', name: 'requests', component: RequestsSitter },
        { path: 'schedule', name: 'schedule', component: Schedule }

        // { path: 'sceduale', name: 'sceduale', component: ScedualeZone }
      ]
    },
    {
      path: '/baby/list/:id',
      name: 'sitterDetails',
      component: SitterDetails
    },
  ]
})
