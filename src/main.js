import { createApp } from 'vue'
import App from './App.vue'
import 'expose-loader/dist/utils'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import 'animate.css'
import 'vue-slick-carousel'
import 'jquery'




createApp(App).use(router).mount('#app')
