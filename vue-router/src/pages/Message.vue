<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="`/Home/Message/${item.id}`">{{item.title}}----</router-link>
                <button>push</button><button>replace</button>
            </li>
        </ul>
        <br/>
        <router-view></router-view>
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
    name:'message',
    data() {
        return {
            list:[]
        }
    },
    mounted() {
        setTimeout(()=>{
            this.list = list
        },2000)
    },
}
</script>

<style scoped>

</style>