import Vue from 'vue'
import VueRouter from 'vue-router'
import Wifi from '@/views/Wifi'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'wifi',
        meta: {
            title: '2022’s TOP 4 WiFi Booster | SMART CHOICES'
        },
        component: Wifi
    },
    {
        path: '/disclosure',
        name: 'disclosure',
        meta: {
            title: 'Disclosure | SMART CHOICES'
        },
        component: () => import('@/views/Disclosure')
    },
    {
        path: '/privacy',
        name: 'privacy',
        meta: {
            title: 'Privacy Policy | SMART CHOICES'
        },
        component: () => import('@/views/Privacy')
    },
    {
        path: '/terms',
        name: 'terms',
        meta: {
            title: 'Terms Of Use | SMART CHOICES'
        },
        component: () => import('@/views/Terms')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'About Us | SMART CHOICES'
        },
        component: () => import('@/views/About')
    },
    {
        path: '/contact',
        name: 'contact',
        meta: {
            title: 'Contact Us | SMART CHOICES'
        },
        component: () => import('@/views/Contact')
    }
];


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;