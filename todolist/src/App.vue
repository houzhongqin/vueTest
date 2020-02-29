<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
       <todo-header :listArr="listArr"></todo-header> 
       <todo-main :listArr="listArr"></todo-main>
       <todo-footer :listArr="listArr" @clear="clear"></todo-footer>
    </div>
    </div>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader'
import todoMain from './components/todoMain'
import todoFooter from './components/todoFooter'
import localStore from './localstore/localstore.js'
export default {
  name: 'App',
  components:{
    'todo-header':todoHeader,
    'todo-main':todoMain,
    'todo-footer':todoFooter,
  },
  data() {
    return {
      listArr:[]
    }
  },
  mounted() {
      this.listArr = localStore.get("todolist",[])
    this.bus.$on("del",(id)=>{
        this.listArr = this.listArr.filter((item)=>{
            return item.id !== id
        })
      })
    this.bus.$on('change',(id,checked)=>{
      this.listArr.filter((item)=>{
           if(item.id === id) return item.checked = checked
      })
    })
  },
  methods:{
    clear(){
      this.listArr = this.listArr.filter((item)=>{
          return item.checked !== true
      })
    }
  },
  watch: {
      listArr:{
        handler: function (val) {
          localStore.set("todolist",val)
        },
        deep: true
      }
  },
}
</script>

<style scope>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
