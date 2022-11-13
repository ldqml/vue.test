import VueRouter from "vue-router"
import AboutName from '../components/AboutName'
import HomeName from '../components/HomeName'
import MessAge from '../components/MessAge'
import NewSofm from '../components/NewSofm'

export default new VueRouter({
    routes:[
        {path:'/about',
        component:AboutName
        },
        {path:'/home',
        component:HomeName,
        children:[
            {path:'message',
             component:MessAge
            },
            {path:'newsofm',
             component:NewSofm,
             children:[
                {path:'querymessage',component:QueryMessage}
             ]
            }
        ]
        },
    ]
})