<script setup lang="ts">
import { onUnmounted } from 'vue';


onUnmounted(() => {
    console.log('HelloWorld2 被卸载了')
})
</script>

<template>
    <div>HelloWorld2</div>
</template>