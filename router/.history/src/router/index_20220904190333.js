import VueRouter from "vue-router"
import AboutName from '../components/AboutName'
import HomeName from '../components/HomeName'
import MessAge from '../components/MessAge'
import NewSofm from '../components/NewSofm'
import QueryMessage from '../components/QueryMessage'

const router = new VueRouter({
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

router.beforeEach((to,from,next)=>{
    if(to.path === '/home/message' || to.path === 'home/newsofm'){
        if(localStorage.getItem('school')==='jiuzhi'){
            next()
        }else{
            alert('学校名不是九职')
        }
    }else{
        next()
    }
})

export default router