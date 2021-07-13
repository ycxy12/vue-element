<template>
    <div class="navigation">
        <router-link to="./home">首页</router-link>
        <router-link to="./login">登录</router-link>
        <router-link to="./GoJs">GoJs</router-link>
        <router-link to="./link">Link</router-link>
        <router-link to="./zoomcharts">zoomcharts</router-link>
    </div>
    <router-view></router-view>
</template>
X
<script>
</script>
<style lang="scss" scoped>
.navigation {
    margin-bottom: 20px;
    a {
        padding: 0 10px;
    }
}
</style>
