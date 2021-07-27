import Layout from '../layout/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/home/index'
        },
        {
            path: '/login',
            name: '登录页',
            component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
            meta: {
                keepAlive: true,
            }
        },
        {
            path: '/lock',
            name: '锁屏页',
            component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
            meta: {
                keepAlive: true,
            }
        },
        {
            path: '/home',
            component: Layout,
            children: [{
                path: 'index',
                name: '首页',
                component: () => import( /* webpackChunkName: "views" */ '../views/home/index.vue'),
                meta: {
                    keepAlive: true,
                },
            }]
        },
    ]
})

export default router