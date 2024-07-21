<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'

// 声明式状态方法

// 1 ref
// 所有用 ref 创建的对象都是响应式的，包括修改子属性的值
// ref 区别于 reactive 是将原始值进行了包装，每次修改的是包装值的 .value 属性
const obj = ref({
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
})
let { age } = obj.value
age++

// 2 reactive
// reactive 讲对象本身具有响应式，也就是 reactive 是针对非原始值的
// reactive 包装对象后并不与原对象相等，因为返回的是一个代理后的对象
// reactive 修改的直接是对象本身，因为 Vue 可以直接拦截对对象的修改，但是拦截不了原始值的修改
// 响应式对象内的嵌套对象依然是代理, 使用 reactive 中所有嵌套对象都是代理，因为要进行响应

const state = { count: 0, a: { b: 0 } }
const proxy = reactive(state)
let { count } = proxy
let { a } = proxy
count++

state === proxy // false
reactive(state) === proxy // true
reactive(proxy) === proxy // true

function handleClick() {
  proxy.count = proxy.count + 1
}

function handleClick2() {
  a.b++
}

// 注意：
// Vue 建议使用 ref 作为主要的响应式声明 API
// 响应性对象的原始类型结构后会失去响应性，对象则不会
// 当嵌套在一个深层响应式对象内时，才会发生 ref 解包
// 修改响应式状态是，DOM 不是立即更新的，需要访问更新后的 DOM, 可以使用 nextTick
// 在选择 ref 和 reactive 时，可以简单的做出判断，原始值使用 ref，非原始值使用 reactive
// 自己的建议是尽量不要将 ref 和 reactive 混用
</script>

<template>
  <div>{{ age }}</div>
  <div>{{ obj }}</div>
  <div>{{ count }}</div>
  <div @click="handleClick2">{{ proxy }}</div>
</template>
