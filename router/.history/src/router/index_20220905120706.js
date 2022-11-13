import VueRouter from "vue-router"
import AboutName from '../components/AboutName'
import HomeName from '../components/HomeName'
import MessAge from '../components/MessAge'
import NewSofm from '../components/NewSofm'
import QueryMessage from '../components/QueryMessage'

const router = new VueRouter({
    mode:'history',
    routes:[
        {path:'/about',
        component:AboutName,
        meta:{title:'about'}
        },
        {path:'/home',
        component:HomeName,
        meta:{title:'home'},
        children:[
            {path:'message',
             component:MessAge,
             meta:{isAuth:true,title:'message'},
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
             meta:{isAuth:true,title:'newsofm'}
            }
        ]
        }, 
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        if(localStorage.getItem('school')==='jiuzhi'){
            next()
        }else{
            alert('学校名不是九职')
        }
    }else{
        next()
    }
})

router.afterEach((to,from)=>{
    console.log(to,from)
    document.title = to.meta.title || '路由系统'
})

export default router