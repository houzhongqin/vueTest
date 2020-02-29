<template>
    <div data-v-957c9522="" msg="atguigu">
    <h2 data-v-957c9522="">home组件</h2>
    <div data-v-957c9522="">
        <ul data-v-957c9522="" class="nav nav-tabs">
            <router-link to="/Home/News" >News</router-link>
            <router-link to="/Home/Message">Message</router-link>
        </ul>
        </div>
        <router-view>></router-view>
    </div>
</template>

<script>
export default {
    name:'home',
}
</script>

<style scoped>

</style>