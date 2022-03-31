import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import home from '../components/home.vue'
import api from '../components/api.vue'
import tb from '../components/question1.vue'
import ap2 from '../components/api-2.vue'
import ques9 from '../components/question9.vue'
import ques8 from '../components/question8.vue'
import es6 from "../components/es6.vue"
import npmt from "../components/npmtable.vue"
import vfor from "../components/v-for.vue"
Vue.use(Router)

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/table', component: tb },
    { path: '/ques9', component: ques9 },
    { path: '/ques8', component: ques8 },
    { path: '/home', component: home },
    { path: '/a', component: api },
    { path: '/API', component: ap2 },
    { path: '/es6', component: es6 },
    { path: '/npmt', component: npmt },
    { path: '/vfor', component: vfor }
]

let router = new Router({ routes })
export default router