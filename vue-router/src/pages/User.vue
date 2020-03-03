<template>
    <div>
        user
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'user',
    mounted() {
        console.log(this.$route)
    },
    data() {
        return {
            // id:this.$route.params.id,
            // name:this.$route.query.name
        }
    },
}
</script>

<style scoped>

</style>