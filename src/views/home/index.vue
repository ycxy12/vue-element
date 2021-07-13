<template>
    <div>首页</div>
    <div @click="init">点击count:{{$store.state.count}}</div>
    <!-- <HelloWorld></HelloWorld> -->
    <Todos></Todos>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import Todos from '../../components/Todos.vue'
export default {
    components: { HelloWorld, Todos },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        init() {
            this.$store.commit("increment")
            console.log(this.$store.state.count)
        }
    }

}
</script>
