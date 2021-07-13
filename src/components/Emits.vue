<template>
    <div @click="$emit('click')" class="emits">
        <p>自定义事件</p>
    </div>
</template>

<script>
export default {
    emits: ['click']
}
</script>

<style>
.emits {
    cursor: pointer;
}
</style>