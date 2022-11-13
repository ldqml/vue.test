import VueRouter from "vue-router"
import About from '../components/AboutName'
import Home from '../components/HomeName'

export default new VueRouter({
    routes:[
        {path:'/about',component:About},
        {path:'/home',component:Home}
    ]
})