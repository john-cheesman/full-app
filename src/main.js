import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

new Vue({ // eslint-disable-line no-new
    router,
    render: h => h(App)
}).$mount('#app')
