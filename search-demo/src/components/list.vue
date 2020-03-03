<template>
    <div class="row">
      <div v-if="seac">请输入请户名查询!</div>
      <div v-else-if="load">Loding...</div>
      <div class="card" v-for="item in list" v-else>
        <a :href="item.html_url">
          <img :src="item.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{item.name}}</p>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'list',
    data() {
        return {
            list:[],
            seac:true,
            load:true
        }
    },
    mounted() {
        
        this.bus.$on('search',async(searchName)=>{
            this.seac = false
         const body = await axios({
                baseURL:'https://api.github.com',
                url:"/search/users",
                method:'get',
                params:{
                    q:searchName
                }
            })
            this.load = false
            this.list = body.data.items.map((item)=>{
                return {
                    name:item.login,
                    avatar:item.avatar_url,
                    html_url:item.html_url
                }
            })
        })
        
    },  
}
</script>

<style scoped>
  .card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
  
</style>