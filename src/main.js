import { createApp } from 'vue'
import './assets/style/normalize.css'
import './assets/style/fonts.css'
import './assets/style/global.scss'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
