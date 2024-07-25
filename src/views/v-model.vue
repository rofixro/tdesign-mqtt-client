<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld4 from '@/components/HelloWorld4.vue';

// v-model 的意义
// 普通的 props 是单向的数据流，只能由父组件修改状态
// v-model 是双向的数据流，子组件可以直接修改状态，父组件也会同步更新状态，反之亦然

// v-model 的参数用来声明多个 v-model
const count = ref(0)
const title = ref('你好')

function handleClick() {
    count.value++
}

function handleClick2() {
    title.value = '你好'
}
</script>

<template>
    <HelloWorld4 v-model="count" v-model:title="title" />
    <button @click="handleClick">父组件按钮1</button>
    <button @click="handleClick2">父组件按钮2</button>
</template>