<template>
    <div class="row">
        <p v-if="search">请输入用户名查询</p>
        <p v-else-if="load">loading</p>
        <p v-else-if="searNobody">查无此人</p>
        <div v-else>
         <v-item v-for="(item, index) in list" :key="index" :item="item"></v-item>    
        </div>
    </div>
</template>

<script>
import item from '@/components/item.vue'
import {mapState} from 'vuex'
export default {
    name:'list',
    components:{
        "v-item":item
    },
    computed: {
        ...mapState(["search","load","searNobody","list"])
    },
}
</script>

<style scoped>
p{
    font-size: 20px
}
</style>
