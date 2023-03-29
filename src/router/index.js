
import { createRouter, createWebHistory } from 'vue-router'
import HealthTests from '../pages/HealthTest.vue'
import LoginPage from '../pages/LoginPage'
import DashboardComponent from '../components/DashboardComponent'

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
    {
        path: '/',
        name: 'DashboardComponent',
        component: DashboardComponent,
    },
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login','/check' ];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("token")
    if (authRequired && loggedIn=='false') {
        return next('/login');
    }
  
    next();
  })
  
export default router