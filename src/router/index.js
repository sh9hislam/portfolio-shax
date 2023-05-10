import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes = [
    {
        path: '/',
        name: 'Главная',
        component: HomeView
    },
    {
        path: '/about',
        name: 'О себе',
        component: AboutView
    },
    {
        path: '/project',
        name: 'Проекты',
        component: ProjectView
    },
    {
        path : '/:catchAll(.*)',
        redirect : '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  

export default router