import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/components/pages/HomePage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'Início - Polícia Civil MT'

    document.title = title

    next()
})

export default router
