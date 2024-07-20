import { createApp } from 'vue'
import { createPinia } from 'pinia' // 插件
import HelloWorld from './components/HelloWorld.vue'

import App from './App.vue' // 根组件
import router from './router' // 插件

import '@/assets/style/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 全局应用配置
// 针对所有子元素错误的操作
app.config.errorHandler = (err) => {
  console.log(err)
}
// 注册全局组件
app.component('HelloWorld', HelloWorld)

app.mount('#app') // 可以设置一组 css 选择器，但是只渲染第一个 dom
// 可以设置多个实例
// app1.mount('#app1')
// app2.mount('#app2')