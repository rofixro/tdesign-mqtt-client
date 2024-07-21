<script setup lang="ts">
import { ref } from 'vue'
const isHover = ref(false)

function handleClick() {
  isHover.value = !isHover.value
}
</script>

<template>
  <h1 :class="['text-3xl', 'font-bold', isHover && 'underline']" @click="handleClick">
    Hello world!
  </h1>
</template>
