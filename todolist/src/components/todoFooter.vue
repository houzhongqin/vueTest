<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll" v-if="disabled"/>
    </label>
    <span>
      <span>已完成{{computChecked}}</span> / 全部{{listArr.length}}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props:{
    listArr:Array
  },
  data () {
    return {
      disabled:true
    }
  },
  computed: {
    checkAll:{
      get(){       
        let flag = this.computChecked !== 0 && this.listArr.length !== 0
      return this.computChecked === this.listArr.length && flag
      },
      set(val){      
          this.listArr.map((item)=>{
           return item.checked = val        
      })
      }
    },
    computChecked(){
      return this.listArr.reduce((adder,item)=>{
          return adder + (item.checked ? 1 : 0)
      },0)
    },
    
  },
  methods: {
    clear(){
      this.$emit('clear')
    }
  },
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
