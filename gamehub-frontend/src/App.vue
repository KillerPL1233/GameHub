<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link> |
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    nav a {
        margin-right: 15px;
        text-decoration: none;
        color: #333;
    }

        nav a.router-link-exact-active {
            font-weight: bold;
        }
</style>