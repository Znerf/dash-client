
import { createRouter, createWebHistory } from 'vue-router'
import HealthTests from '../pages/HealthTest.vue'

const routes = [
    {
        path: '/check',
        name: 'HealthTest',
        component: HealthTests
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router