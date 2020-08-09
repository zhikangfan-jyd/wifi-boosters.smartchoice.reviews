import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Wifi from '@/views/Wifi'
const routes = [
    {
        path: '/',
        name: 'wifi',
        component: Wifi
    },
    {
        path: '/disclosure',
        name: 'disclosure',
        component: () => import('@/views/Disclosure')
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: () => import('@/views/Privacy')
    },
    {
        path: '/terms',
        name: 'terms',
        component: () => import('@/views/Terms')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact')
    }
];


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;