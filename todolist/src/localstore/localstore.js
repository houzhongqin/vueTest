export default {
    get(key,defa){
        let val = localStorage.getItem(key)
        return val ? JSON.parse(val) : defa
    },
    set(key,val){
        localStorage.setItem(key,JSON.stringify(val))
    }
}