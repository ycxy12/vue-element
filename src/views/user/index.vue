<template>
    <div>
        <ul>
            <li>
                <router-link to="/users/eduardo/posts/1">/users/eduardo/posts/1</router-link>
            </li>
            <li>
                <router-link to="/users/eduardo/posts/20">/users/eduardo/posts/20</router-link>
            </li>
        </ul>
        User {{ $route.params.username }} with post {{ $route.params.postId }}
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>