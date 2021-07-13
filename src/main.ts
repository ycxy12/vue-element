import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from "./store/index";
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App)

// import "../public/zoomcharts/zoomcharts.js";

app.directive("highlight", {
    beforeMount(el, binding, vnode) {
        el.style.background = binding.value
    }
})

app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });

app.mount('#app')
