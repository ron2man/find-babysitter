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
Vue.use(Element)

Vue.filter('relativeTime', (timestamp) => {
    return moment(timestamp).fromNow();
})

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3003/',
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