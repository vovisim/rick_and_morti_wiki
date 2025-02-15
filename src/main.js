import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import router from '@/router/router'

import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueRouter from 'vue-router'

const app = createApp(App)

app.use(BootstrapVue3)
app.use(VueRouter)
app.use(router)

app.mount('#app')
