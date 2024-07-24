<script setup lang="ts">
import { ref, watch, computed, reactive } from 'vue'

// 侦听器自动对 ref 解构
const count = ref(0)
const obj = ref({ b: 233 })
const obj1 = reactive({ c: 222 })
const computedMessage = computed(() => count.value + 1)

function handleClick1() {
  count.value++
}

function handleClick2() {
  obj.value = { a: 123 }
}

function handleClick3() {
  obj.value.b = 10
  console.log(obj.value.b)
}

function handleClick4() {
  obj1.c = 444
}

watch(count, () => {
  console.log('count 变化被监听到了，源数据是一个原始值')
})

watch(obj, () => {
  console.log('obj 变化被监听到了，源数据是一个对象')
})

watch(computedMessage, () => {
  console.log('computedMessage 变化被监听到了，源数据是一个计算属性')
})

// 不能直接对一个对象的某个属性进行侦听，要传入一个函数
watch(
  () => obj.value.b,
  (value) => {
    console.log('obj 的 b 被侦听到了, 值是' + value)
  }
)

watch(
  () => obj1.c,
  (value) => {
    console.log('obj1 的 c 被侦听到了, 值是' + value)
  }
)
</script>

<template>
  <div>
    <div>count: {{ count }}</div>
    <button @click="handleClick1">按钮1</button>
    <button @click="handleClick2">按钮2</button>
    <button @click="handleClick3">按钮3</button>
    <button @click="handleClick4">按钮4</button>
  </div>
</template>
