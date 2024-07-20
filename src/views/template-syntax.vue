<script setup lang="ts">
import { ref } from 'vue'
let hello = 'Hello'

// Vue 的文本插值只是针对 ref 进行响应变化的
function handleClick () {
  hello = '你好'
  console.log(hello)
}
</script>

<template>
  <div>{{ hello }}</div>
  <button @click="handleClick">修改文字</button>
</template>
