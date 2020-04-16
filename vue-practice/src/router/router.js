import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/home";
import About from "../components/about";

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/about',
        name: 'About',
        component: About
    },
];

export default new VueRouter({
    routes
})