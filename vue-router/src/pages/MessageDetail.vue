<template>
    <div>
        <span v-show="detail">id:{{detail.id}}</span><br>
        <span v-show="detail">title:{{detail.title}}</span><br>
        <span v-show="detail">content:{{detail.content}}</span>
    </div>
</template>

<script>
 const list =[
     {id:1,title:'信息1',content:'世界和平1'},
     {id:2,title:'信息2',content:'世界和平2'},
     {id:3,title:'信息3',content:'世界和平3'},
     {id:4,title:'信息4',content:'世界和平4'},
 ]
export default {
    name:'MessageDatil',
    props:['id'],
    data() {
        return {
            detail:{},
            detail:false
        }
    },
    methods: {
        showDatil(){
           setTimeout(()=>{
            this.detail = list.find((item)=>{
                this.detail = true
                return +this.id === item.id
            })
        },2000) 
        }
    },
    mounted() {
        this.showDatil()
    },
    watch: {
        $route(){
            this.showDatil()
        }
    },
}
</script>

<style scoped>

</style>