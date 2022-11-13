import VueRouter from "vue-router"
import AboutName from '../components/AboutName'
import HomeName from '../components/HomeName'

export default new VueRouter({
    routes:[
        {path:'/about',component:about-name},
        {path:'/home',component:HomeName},
    ]
})