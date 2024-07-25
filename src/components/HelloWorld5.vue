<script setup lang="ts">
function handleClick() {
    console.log(2)
}
</script>

<template>
  <div class="hello" @click="handleClick">HelloWorld5</div>
</template>

<style scoped>
.hello {
  background-color: blue;
}
</style>
