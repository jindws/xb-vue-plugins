import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './pages/Index'

import {StartVue,WillCourse,FooterVue,FootertopVue,SmalltabVue,Slider,SingleclassVue,PaginationVue,AllclassesVue,AllCourse,Header} from '..'
Vue.use(StartVue)
Vue.use(WillCourse)
Vue.use(FooterVue)
Vue.use(FootertopVue)
Vue.use(SmalltabVue)
Vue.use(Slider)
Vue.use(SingleclassVue)
Vue.use(PaginationVue)
Vue.use(AllclassesVue)
Vue.use(AllCourse)
Vue.use(Header)

const routes = [
    {
        path: '*',
        component: Index
    },
]

const router = new VueRouter({routes});

new Vue({router}).$mount('#container');
