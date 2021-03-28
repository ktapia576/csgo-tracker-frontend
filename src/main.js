import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import toastConfig from './toastConfig.js'
import 'vue-toastification/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(Toast, toastConfig)

app.use(router)

app.mount('#app')