import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import User from "@/pages/User.vue";
import UserDatil from "@/pages/UserDatil.vue";
import Message from "@/pages/Message.vue";
import MessageDetail from "@/pages/MessageDetail.vue";

export default [
  {
      path:"/About",
      component:About,
     
},
  {
      path:"/Home",
      component:Home,

      children:[
        {path:'News',component:News},
        {
          path:'Message',
          component:Message,
          children:[
            {path:':id',component:MessageDetail,props:true}
          ]
        },
        ]
    },
  { 
    path: '/User', 
    component:User,
    children:[
      {
        path:':id',
        component:UserDatil,
        props:(route)=>({
          id:route.params.id,
          name:route.query.name,
        })
    },
      
    ],
    
   },
  { path: '/', redirect: '/About'},
]

