<template>
  <div id="app">
    <div class="container">
      <v-search></v-search>
      <v-list></v-list>
    </div>
  </div>
</template>

<script>
import list from '@/components/list.vue'
import search from '@/components/search.vue'

export default {
  name: 'App',
  components: {
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
