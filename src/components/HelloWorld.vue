<script setup lang="ts">
import HelloWorld2 from './HelloWorld2.vue'
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onActivated,
  onDeactivated
} from 'vue'

const a = ref(0)
const div = ref(null)

function handleClick() {
  a.value++
}

onBeforeMount(() => {
  // 可以获取响应式数据，但无法获取 DOM
  // 因为在此阶段会进行初始渲染，所以在这里进行 fetch 可能会影响渲染
  console.log('------------HelloWorld onBeforeMount 开始------------')
  console.log(a.value)
  console.log(div.value)
  console.log('------------HelloWorld onBeforeMount 结束------------')
})

onMounted(() => {
  // 注册一个回调函数，在组件挂载完成后执行
  // 可以获取响应式数据，也可以获取 DOM
  // 挂载状态包括：1.所有子组件都已经被挂载，也就是同样的生命周期，子组件的会优先执行 2. 自身的 DOM 已经插入到页面中
  console.log('------------HelloWorld onMounted 开始------------')
  console.log(a.value)
  console.log(div.value)
  console.log('------------HelloWorld onMounted 结束------------')
})

onBeforeUpdate(() => {
  // 可以用来在 Vue 更新 DOM 之前访问 DOM 状态
  console.log('------------HelloWorld onBeforeUpdate 开始------------')
  console.log(div.value.innerHTML)
  console.log('------------HelloWorld onBeforeUpdate 结束------------')
})

onUpdated(() => {
  // 可以用来访问更新后的 DOM 状态
  // 父组件的更新钩子将在其子组件的更新钩子之后调用
  // 不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环
  console.log('------------HelloWorld onUpdated 开始------------')
  console.log(div.value.innerHTML)
  console.log('------------HelloWorld onUpdated 结束------------')
})

onBeforeUnmount(() => {
  // 注册一个钩子，在组件实例被卸载之前调用
  // 可以访问响应式数据，也可以访问 DOM
  console.log('------------HelloWorld onBeforeUnmount 开始------------')
  console.log(a.value)
  console.log(div.value)
  console.log('------------HelloWorld onBeforeUnmount 结束------------')
})

onUnmounted(() => {
  // 注册一个钩子，在卸载实例之后调用
  // 可以访问响应式数据，但是无法访问 DOM
  console.log('------------HelloWorld onUnmounted 开始------------')
  console.log(a.value)
  console.log(div.value)
  console.log('------------HelloWorld onUnmounted 结束------------')
})

onErrorCaptured((err, instance, info) => {
  // 注册一个回调函数，在子组件抛出错误时调用
  // onErrorCaptured 会优于 app.config.errorHandler 发出错位提示
  console.log(err, instance, info)

  return false // 拦截错误，不会进入 app.config.errorHandler
})

onActivated(() => {
  // 注册一个钩子，若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用
  // 判断是否在 <KeepAlive> 缓存树中
  console.log('在 KeepAlive 中, 组件插入 DOM 时')
})

onDeactivated(() => {
  // 注册一个钩子，若组件实例是 <KeepAlive> 缓存树的一部分，当组件被从 DOM 中移除时调用
  // 判断是否在 <KeepAlive> 缓存树中
  console.log('在 KeepAlive 中, 组件从 DOM 中移除时')
})
</script>

<template>
  <div>{{ a }}</div>
  <HelloWorld2 />
  <div ref="div">HelloWorld</div>
  <button @click="handleClick">子组件按钮</button>
</template>
