import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
// import home from '../components/home.vue'
// import api from '../components/api.vue'
import tb from '../components/question1.vue'
// import ap2 from '../components/api-2.vue'
import ques9 from '../components/question9.vue'
import ques8 from '../components/question8.vue'
Vue.use(Router)

const routes = [{
            path: '/',
            component: HelloWorld
        },
        {
            path: '/table',
            component: tb
        },
        {
            path: '/ques9',
            component: ques9
        },
        {
            path: '/ques8',
            component: ques8
        }
    ]
    //     {
    //         path: '/home',
    //         name: 'Home',
    //         component: home
    //     },
    //     {
    //         path: '/a',
    //         name: 'Api',
    //         component: api
    //     },

//     {
//         path: '/API',
//         name: 'Api',
//         component: ap2
//     }





let router = new Router({ routes })
export default router