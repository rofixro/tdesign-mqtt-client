<script setup lang="ts">
function handleClick(event: Event) {
  console.log(typeof event.target.innerHTML)
}

// 认识事件修饰符
</script>

<template>
  <div>
    <button @keyup.enter="handleClick">原生按钮</button>
  </div>
</template>
