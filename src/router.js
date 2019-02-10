import Vue from 'vue';
import Router from 'vue-router';
import KittenImage from './components/KittenImage';
import About from './components/About';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: KittenImage
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})