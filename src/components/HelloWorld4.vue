<script setup lang="ts">
const model = defineModel({ default: 0 })
const title = defineModel('title')

function update() {
  model.value++
}

function update1() {
  title.value = '再见'
}
</script>

<template>
  <div>title: {{ title }}</div>
  <div>model: {{ model }}</div>
  <div>HelloWorld4</div>
  <button @click="update">子组件按钮 1</button>
  <button @click="update1">子组件按钮 2</button>
</template>
