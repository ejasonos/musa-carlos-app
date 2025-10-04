import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'

export const router: Object = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/feed', name: 'Feed', component: Feed}
    ]
})
