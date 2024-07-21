<script setup lang="ts">
import { reactive, computed } from 'vue'
// 使用计算属性是为了解决模版中比较复杂的逻辑
// 计算属性永远返回一个 ref
// 计算属性会自动追踪里面的响应属性的变化，从而更新计算属性的值
// 计算属性与函数的区别
// 计算属性会缓存，只要依赖的响应属性不发变化就直接返回缓存结果
// 函数可以接受参数，而计算属性却不行（计算属性本质上是一个变量，并不是一个函数，不能接受参数也是应该的）
const obj = reactive({
    name: '张三',
    age: 18,
    get fullName() {
        return this.name + this.age
    }
})

const tmpObj = computed(() => obj.age > 18)
console.log(tmpObj.value)
</script>

<template>
    <div>{{ tmpObj }}</div>
</template>