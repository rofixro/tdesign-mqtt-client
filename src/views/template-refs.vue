<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import HelloWorld3 from '@/components/HelloWorld3.vue';


const myRef = ref([])
const helloWorld3 = ref(null)

function getMyRef(el: HTMLElement) {
    console.log(el)
}

watchEffect(() => {
    console.log(myRef.value[0])
})

onMounted(() => {
    console.log(helloWorld3.value.b)
})
</script>

<template>
    <HelloWorld3 ref="helloWorld3" />
    <div :ref="getMyRef"></div>
    <ul>
        <li v-for="i in 3" :key="i" ref="myRef"></li>
    </ul>
</template>