import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { piniaLocalStoragePlugin } from './stores/plugin'
import router from './router'
import App from './App.vue'
import './assets/base.css'

const pinia = createPinia()
pinia.use(piniaLocalStoragePlugin)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

