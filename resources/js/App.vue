<template>
    <div class="vue-component-wrapper">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "./components/HeaderComponent";

    export default {
        name: "App",
        components: {
            Header
        }
    }
</script>

<style>
    body {
        background: #f7f7f7;
        height: 90vh;
    }

    .vue-component-wrapper {
        height: 100%;
    }
</style>
