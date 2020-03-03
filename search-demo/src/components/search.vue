<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model.trim="searchName"/>
        <button @click="searchC">Search</button>
      </div>
    </section>
</template>

<script>
export default {
    name:'search',
    data() {
        return {
            searchName:''
        }
    },
    methods: {
        searchC(){
            this.bus.$emit('search',this.searchName)
            this.searchName = ''
        }
    },
}
</script>

<style scoped>
    
</style>