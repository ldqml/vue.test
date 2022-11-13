import VueRouter from "vue-router"
import AboutName from '../components/AboutName'
import HomeName from '../components/HomeName'

export default new VueRouter({
    route:[
        {path:'/about',component:AboutName},
        {path:'/home',component:HomeName},
    ]
})