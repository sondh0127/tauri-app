import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from '~pages'

const app = createApp(App)

const router = createRouter({ routes, history: createWebHashHistory() })

app.use(router)

app.mount('#app')
