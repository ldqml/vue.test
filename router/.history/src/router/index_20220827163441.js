import VueRouter from "vue-router"
import AboutName from '../components/AboutName'
import HomeName from '../components/HomeName'

export default new VueRouter({
    routes:[
        {path:'/AboutName',component:AboutName},
        {path:'/homeName',component:HomeName},
    ]
})