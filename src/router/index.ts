import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
        },
        {
            path: '/zoomcharts',
            name: 'zoomcharts',
            component: () => import(/* webpackChunkName: "home" */ '../views/zoomcharts/index.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "home" */ '../views/login/index.vue'),
        },
        {
            path: '/GoJs',
            name: 'GoJs',
            component: () => import(/* webpackChunkName: "home" */ '../views/GoJs/index.vue'),
        },
        {
            path: '/link',
            name: 'link',
            component: () => import(/* webpackChunkName: "home" */ '../views/GoJs/link.vue'),
        },
        {
            path: '/users/:username/posts/:postId',
            component: () => import(/* webpackChunkName: "home" */ '../views/user/index.vue'),
        }
    ]
})

export default router