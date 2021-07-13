<template>
    <div>
        <button @click="moduleOpen = true">弹出模态窗</button>

        <teleport to='body'>
            <div v-if="moduleOpen" class="module">
                <div>
                    <p>这是一个模态框</p>
                    <button @click="moduleOpen = false">关闭</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moduleOpen: false
        }
    }
}
</script>

<style scoped>
.module {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.module div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 300px;
    height: 300px;
    padding: 5px;
    border-radius: 10px;
}
</style>