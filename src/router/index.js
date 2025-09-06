import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/pages/HomePage.vue'),
    },
    {
        path: '/mais-detalhes',
        name: 'person-detail',
        meta: {
            title: 'Mais Detalhes - Polícia Civil MT',
        },
        component: () => import('@/components/pages/PersonDetailPage.vue'),
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
    document.title = to.meta.title || 'Início - Polícia Civil MT'

    next()
})

export default router
