import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/home";
import About from "../components/about";
import Sample1 from "../components/js-item-sample";
import Sample2 from "../components/say-hi";
import Sample3 from "../components/interpolation-sample";
import Dogs from '../components/dogs';
import VShow from '../components/vshow';
import CityRent from '../components/city-avg-rent';
import VFor from '../components/v-for';
import VBind from '../components/v-bind';
import Seconds from '../components/seconds';
import ReactivitySample from '../components/reactivity-sample';
import TwoWay from '../components/two-way';
import VHtml from '../components/v-html';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/sample1',
        name: 'Sample1',
        component: Sample1
    },
    {
        path: '/sample2',
        name: 'Sample2',
        component: Sample2
    },
    {
        path: '/sample3',
        name: 'Sample3',
        component: Sample3
    },
    {
        path: '/dogs',
        name: 'Dogs',
        component: Dogs
    },
    {
        path: '/vshow',
        name: 'VShow',
        component: VShow
    },
    {
        path: '/cityrent',
        name: 'CityRent',
        component: CityRent
    },
    {
        path: '/vfor',
        name: 'VFor',
        component: VFor
    },
    {
        path: '/vbind',
        name: 'VBind',
        component: VBind
    },
    {
        path: '/seconds',
        name: 'Seconds',
        component: Seconds
    },
    {
        path: '/rs',
        name: 'RS',
        component: ReactivitySample
    },
    {
        path: '/twoway',
        name: 'TwoWay',
        component: TwoWay
    },
    {
        path: '/vhtml',
        name: 'VHtml',
        component: VHtml
    }
];

export default new VueRouter({
    routes
})