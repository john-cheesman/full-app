<template>
    <div id="app">
        <router-link to="/">Welcome</router-link>
        <router-link to="/about-you">About you</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }

</script>

<style scoped>
    #app{
        background: #fcfcfc;
    }
</style>