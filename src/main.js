import './assets/main.css'
import Toast from "vue-toastification";
import VueEasyLightbox from 'vue-easy-lightbox';
import 'primeicons/primeicons.css'

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast)
app.use(VueEasyLightbox)

app.mount('#app')
