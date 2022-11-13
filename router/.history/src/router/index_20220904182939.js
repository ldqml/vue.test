import VueRouter from "vue-router"
import AboutName from '../components/AboutName'
import HomeName from '../components/HomeName'
import MessAge from '../components/MessAge'
import NewSofm from '../components/NewSofm'
import QueryMessage from '../components/QueryMessage'

export default new VueRouter({
    routes:[
        {path:'/about',
        component:AboutName
        },
        {path:'/home',
        component:HomeName,
        children:[
            {path:'message',
             component:MessAge,
             children:[
                {path:'querymessage',
                component:QueryMessage,
                name:'querymessage',
                props({query}){
                    return {id:query.id,title:query.title}
                }}
             ]
            },
            {path:'newsofm',
             component:NewSofm,
            }
        ]
        },
        
    ]
})