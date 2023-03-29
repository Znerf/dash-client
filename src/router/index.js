
import { createRouter, createWebHistory } from 'vue-router'
import HealthTests from '../pages/HealthTest.vue'
import LoginPage from '../pages/LoginPage'

const routes = [
    {
        path: '/check',
        name: 'HealthTest',
        component: HealthTests
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router