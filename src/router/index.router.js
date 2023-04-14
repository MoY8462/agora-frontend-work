import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:catchAll(.*)",
            redirect: { name: "Home" },
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue'),
        },
    ]
})

export default router