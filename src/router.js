import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProject from './pages/AppProject.vue';
import AppNotFound from './pages/AppNotFound.vue';
import SingleProject from './pages/SingleProject.vue';
import TypeProjects from './pages/TypeProjects.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProject
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/projects/type/:slug',
            name: 'type-projects',
            component: TypeProjects
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router }