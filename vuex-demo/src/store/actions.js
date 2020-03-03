import {SEARCHNAME,GETLIST,SEARCH,SUCCESS,SEARCHNOBODY} from './mutations_type'
import axios from 'axios'
export default{
    [SEARCHNAME]({commit},val){
        commit('searchName',val)
    },
    async [GETLIST](store){
        store.commit(SEARCH)
    const body = await axios({
            baseURL:"https://api.github.com",
            url:"/search/users",
            method:"get",
            params:{
              q:store.state.searchName
            }
        })

        const list = body.data.items.map((item)=>({
            name:item.login,
            href:item.html_url,
            src:item.avatar_url
        }))
        if(list.length > 0){
            store.commit(SUCCESS)
        }else{
            store.commit(SEARCHNOBODY)
        }
        store.commit(SEARCHNAME,'')
        store.commit(GETLIST,list)
    }
}