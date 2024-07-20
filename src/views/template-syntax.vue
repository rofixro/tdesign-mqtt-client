<script setup lang="ts">
import { ref } from 'vue'
let hello = 'Hello'
const objectOfAttrs = {
  id: 'hello',
  style: 'color: red'
}

// Vue 的文本插值只是针对 ref 进行响应变化的
function handleClick() {
  hello = '你好'
  console.log(hello)
}

function setAttribute() {
  return 'title'
}
</script>

<template>
  <!-- 文本插值 -->
  <div>{{ hello }}</div>
  <button @click="handleClick">修改文字</button>
  <!-- 动态绑定多个值 -->
  <p :="objectOfAttrs">动态绑定多个值</p>
  <!-- 绑定函数返回值 -->
   <!-- 绑定的函数会在每次渲染时调用 -->
  <p :id="setAttribute()">绑定函数返回值</p>
  <p :id="window">受限的全局访问 {{ window }}</p>
</template>

<style scoped>
#hello {
  background-color: rosybrown;
}

#title {
  color: blue;
}
</style>
