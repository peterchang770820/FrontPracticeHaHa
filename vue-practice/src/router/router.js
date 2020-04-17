import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/home";
import About from "../components/about";
import Sample1 from "../components/js-item-sample";

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
    {
        path: '/sample1',
        name: 'Sample1',
        component: Sample1
    }
];

export default new VueRouter({
    routes
})