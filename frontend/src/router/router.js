import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import Register from '../views/Register.vue'
import Signin from '../views/Signin.vue'
import Contactus from '../views/Contactus.vue'
import Tandc from '../views/Tandc.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/feed', name: 'Feed', component: Feed},
        {path: '/register', name: 'Register', component: Register},
        {path: '/signin', name: 'Signin', component: Signin},
        {path: '/contactus', name: 'Contactus', component: Contactus},
        {path: '/tandc', name: 'Tandc', component: Tandc}
    ]
})
