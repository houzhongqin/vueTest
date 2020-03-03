<template>
    <div class="container">
      <v-search></v-search>
      <v-list></v-list>
    </div>
</template>

<script>
import search from '@/components/search.vue'
import list from '@/components/list.vue'
export default {
  name: 'user',
  components:{
    "v-list":list,
    "v-search":search
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
