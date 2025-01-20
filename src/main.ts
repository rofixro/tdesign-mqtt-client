import App from "./App.vue";
import { createApp } from "vue";
import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";

const app = createApp(App);

app.use(TDesign);
app.mount("#app");
