<script setup lang="ts">
import HelloWorld5 from '@/components/HelloWorld5.vue'
// 透传就是没有声明的 props 和 emits
// 透传默认会继承到子组件上面
// 父组件设置的透传会覆盖子组件
// 孙组件也会继承祖父组件的透传，除非在父组件声明 props 或者 emits
function handleClick() {
  console.log('1')
}
</script>

<template>
  <div>attributes 章节</div>
  <HelloWorld5 class="hello" @click="handleClick" />
</template>

<style scoped>
.hello {
  background-color: red;
}
</style>
