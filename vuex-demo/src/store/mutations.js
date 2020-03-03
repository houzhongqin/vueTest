import {SEARCHNAME,GETLIST,SEARCH,SUCCESS,SEARCHNOBODY} from './mutations_type'
export default{
    [SEARCHNAME](state,val){
        state.searchName = val
    },
    [GETLIST](state,list){
        state.list = list
    },
    [SEARCH](state){
        state.search = false
        state.load = true
        state.searNobody = false
    },
    [SUCCESS](state){
        state.search = false
        state.load = false
        state.searNobody = false
    },
    [SEARCHNOBODY](state){
        state.search = false
        state.load = false
        state.searNobody = true
    },
}