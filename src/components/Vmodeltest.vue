<template>
    <div>
        <!-- <div @click="$emit('update:modelValue',modelValue+1)">
            counter:{{modelValue}}
        </div> -->
        <div @click="$emit('update:counter',counter+1)">
            counter1:{{counter}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // modelValue: {
        //     type: Number,
        //     default: 0
        // },
        counter: {
            type: Number,
            default: 0
        },
    }
}
</script>

<style>
</style>