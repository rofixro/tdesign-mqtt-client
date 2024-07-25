<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld2 from '@/components/HelloWorld2.vue'
import HelloWorld3 from '@/components/HelloWorld3.vue'

defineProps(['title'])

// 动态组件
const tabList = ref([HelloWorld2])

function handleClick() {
    tabList.value = tabList.value.includes(HelloWorld2) ? [HelloWorld3] : [HelloWorld2]
}
</script>

<template>
    <component :is="tabList[0]"></component>
    <button @click="handleClick">切换子组件</button>
</template>
