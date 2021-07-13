<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="count++">count is: {{ count }}</button>
        <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

        <!-- composition -->
        <Composition></Composition>

        <!-- teleport: ModuleButton -->
        <ModuleButton></ModuleButton>

        <!-- Emits：原生时间会触发两次 -->
        <Emits @click="onClick"></Emits>

        <!-- Vmodeltest -->
        <Vmodeltest v-model:counter="counter"></Vmodeltest>
        <!-- <Vmodeltest :counter="counter" @update:counter="counter=$event"></Vmodeltest> -->

        <!-- Render api -->
        <RenderTest v-model:counter="counter">
            <template>default</template>
            <template v-slot:content>content</template>
        </RenderTest>

        <!-- 异步组件 -->
        <AsyncComp></AsyncComp>

        <!-- 自定义指令 -->
        <p v-highlight="'green'">自定义指令</p>

        <!-- 动画 -->
        <TransitionTest></TransitionTest>
    </div>
</template>

<script>
import { computed, defineAsyncComponent, h, onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue'
import Composition from "./Composition.vue";
import ModuleButton from "./ModuleButton.vue";
import Vmodeltest from "./Vmodeltest.vue";
import Emits from "./Emits.vue";
import TransitionTest from './TransitionTest.vue';
export default {
    name: 'HelloWorld',
    components: {
        Composition, ModuleButton, Emits, Vmodeltest,
        RenderTest: {
            props: {
                counter: {
                    type: Number,
                    default: 0
                }
            },
            render() {
                this.$slots.default()
                this.$slots.content()
                return h("div", [
                    h("div", { onClick: this.onClick }, [
                        `I am RenderTest: ${this.counter}`,
                        this.$slots.default(),
                        this.$slots.content() //传参即为作用域插槽
                    ]
                    )
                ])
            },
            methods: {
                onClick() {
                    this.$emit("update:counter", this.counter + 1)
                }
            }
        },
        AsyncComp: defineAsyncComponent(() => import('./NextPage.vue')),
        TransitionTest //定义异步组件
    },
    props: {
        msg: String
    },
    data() {
        return {
            count: 0,
            counter: 1,
            foo: {
                bar: '122'
            }
        }
    },
    methods: {
        onClick() {
            console.log('click me!')
        }
    },
}

</script>
