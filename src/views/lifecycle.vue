<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const isShow = ref(true)
function handleClick() {
  isShow.value = !isShow.value
}
</script>

<template>
  <HelloWorld v-if="isShow" />
  <button @click="handleClick">父组件按钮</button>
</template>
