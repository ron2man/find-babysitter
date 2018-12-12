import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/scss/main.scss'
import VueSocketIO from 'vue-socket.io'
import moment from 'moment'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueChatScroll from 'vue-chat-scroll'
import axios from 'axios'
axios.defaults.withCredentials = true

Vue.use(Element)

Vue.filter('relativeTime', (timestamp) => {
    return moment(timestamp).fromNow();
})

Vue.use(VueChatScroll)

Vue.use(new VueSocketIO({
    debug: true,
    connection: process.env.NODE_ENV === 'production'
    ? '/'
    : 'http://localhost:3003'
,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}))


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')