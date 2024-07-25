<script setup lang="ts">
import { ref, watch, computed, reactive, watchEffect } from 'vue'

// 侦听器自动对 ref 解构
const count = ref(0)
const params = ref(0)
const obj = ref({ b: 233 })
const obj1 = reactive({ c: 222, d: { name: '张三' } })
const computedMessage = computed(() => count.value + 1)

function handleClick1() {
  count.value++
}

function handleClick2() {
  obj.value = { b: 123 }
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

// 传入一个响应式对象，会隐式的创建一个深层监听器，监听每一个子属性的变动
watch(obj1, (value) => {
  console.log('obj1 被侦听到了, 值是' + value)
})

// 在给 watch 传入的 getter 函数中，如果监听的对象是响应式对象，则除替换为不同的对象，否则无法监听到变化
// 可以传入 deep 选项，强制转换成深层侦听器
watch(
  () => obj1.d,
  (value) => {
    console.log('obj1 的 d 被侦听到了， 值是' + value)
  }
)

// 既时回调侦听器
// immediate: true

// 一次性侦听器
// once: true

// watchEffect 用法
// 1. 当你需要 watch 即时回调时可以使用
// 2. 当你需要 watch 的源数据需要在回调里面使用时，可以使用 watchEffect
watchEffect(() => {
  // console.log('watchEffect 侦听器被触发了, 值是' + count.value)
  params.value = count.value
  console.log(1)
})

// 回调触发的时机

// 关闭侦听器
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
