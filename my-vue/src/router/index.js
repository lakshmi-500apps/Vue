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
import prac from "../components/practice1.vue"
import emit from "../components/Parent.vue"
import cemit from "../components/child.vue"
import q1 from "../components/Ques1.vue"
import q2 from "../components/Ques2.vue"
import q3 from "../components/Ques3.vue"
import q4 from "../components/Ques4.vue"
//import q5 from "../components/Ques5.vue"
import q7 from "../components/Ques7.vue"
import q8 from "../components/Ques8.vue"
import q9 from "../components/Ques9.vue"
import q10 from "../components/Ques10.vue"
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
    { path: '/vfor', component: vfor },
    { path: '/prac', component: prac },
    { path: '/emit', component: emit },
    { path: '/cemit', component: cemit },
    { path: '/q1', component: q1 },
    { path: '/q2', component: q2 },
    { path: '/q3', component: q3 },
    { path: '/q4', component: q4 },
    { path: '/q7', component: q7 },
    { path: '/q8', component: q8 },
    { path: '/q9', component: q9 },
    { path: '/q10', component: q10 },
    //{ path: '/q5', component: q5 }
]

let router = new Router({ routes })
export default router