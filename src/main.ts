import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import store from "./store/index";
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/packages/theme-chalk/src/index.scss'
// import 'element-plus/lib/theme-chalk/index.css';
import './styles/common.scss';

const app = createApp(App)


app.directive("highlight", {
    beforeMount(el, binding, vnode) {
        el.style.background = binding.value
    }
})

app.use(ElementPlus, { size: 'small', zIndex: 3000 });

app.use(store)
app.use(router)

app.mount('#app')
