import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8080'
app.config.globalProperties.axios = axios
app.use(ElementPlus).use(router).mount('#app')

// app.use(router).mount('#app')
