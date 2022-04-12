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
import ex from "../components/example.vue"
import ex2 from "../components/example2.vue"
import vif from "../components/v-if.vue"
import que1 from "../components/q1.vue"
import que3 from "../components/q3.vue"
import que4 from "../components/q4.vue"
import que5 from "../components/q5.vue"
import que7 from "../components/q7.vue"
import que8 from "../components/q8.vue"
import que9 from "../components/q9.vue"
import que10 from "../components/q10.vue"
import qu1 from "../components/qu1.vue"
import qu3 from "../components/qu3.vue"
import qu4 from "../components/qu4.vue"
import qu5 from "../components/qu5.vue"
import qu6 from "../components/qu6.vue"
import qu7 from "../components/qu7.vue"
import ques1 from "../components/que1.vue"
import ques2 from "../components/que2.vue"

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
    { path: '/ex', component: ex },
    { path: '/ex2', component: ex2 },
    { path: '/vif', component: vif },
    { path: '/que1', component: que1 },
    { path: '/que3', component: que3 },
    { path: '/que4', component: que4 },
    { path: '/que5', component: que5 },
    { path: '/que7', component: que7 },
    { path: '/que7', component: que7 },
    { path: '/que8', component: que8 },
    { path: '/que9', component: que9 },
    { path: '/que10', component: que10 },
    { path: '/qu1', component: qu1 },
    { path: '/qu3', component: qu3 },
    { path: '/qu4', component: qu4 },
    { path: '/qu5', component: qu5 },
    { path: '/qu6', component: qu6 },
    { path: '/qu7', component: qu7 },
    { path: '/ques1', component: ques1 },
    { path: '/ques2', component: ques2 },
    //{ path: '/q5', component: q5 }
]

let router = new Router({ routes })
export default router