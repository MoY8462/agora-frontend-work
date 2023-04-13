import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:catchAll(.*)",
            redirect: { name: "Error" },
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('../components/views/Home.vue'),
        },
    ]
})

export default router