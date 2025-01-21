<script setup lang="ts">
import { ref } from "vue";
import { EditIcon, DeleteIcon, AddIcon } from "tdesign-icons-vue-next";

interface Message {
  type: number;
  title: string;
}

const visible = ref(false);
const themes = ref<string[]>([]);
const messages = ref<Message[]>([]);
</script>

<template>
  <div class="vue-mqtt-client">
    <t-card>
      <div class="vue-mqtt-client__container">
        <t-space>
          <t-card>
            <div class="vue-mqtt-client__aside">
              <t-button block theme="primary" @click="visible = true">
                <template #icon><AddIcon /></template>
                新建主题
              </t-button>
              <div class="vue-mqtt-client__aside__item" v-for="index in themes" :key="index">
                <t-card title="主题" subtitle="subtitle">
                  <template #actions>
                    <t-button shape="circle" variant="text" theme="primary"><EditIcon slot="icon" /></t-button>
                    <t-popconfirm theme="danger" content="确认删除吗?">
                      <t-button shape="circle" variant="text" theme="danger"><DeleteIcon slot="icon" /></t-button>
                    </t-popconfirm>
                  </template>
                </t-card>
              </div>
            </div>
          </t-card>
          <t-card>
            <div class="vue-mqtt-client__content">
              <t-card>
                <div class="vue-mqtt-client__content__text">
                  <div :key="index" v-if="messages.length" v-for="({ title, type }, index) in messages" class="vue-mqtt-client__content__text__item" :style="{ justifyContent: type && 'flex-end' }">
                    <t-card style="width: 20vw">{{ title }}{{ index }}</t-card>
                  </div>
                  <div v-else class="vue-mqtt-client__content__empty">
                    <t-empty />
                  </div>
                </div>
              </t-card>

              <t-textarea placeholder="按回车发送消息" style="margin-top: 16px" :autosize="{ minRows: 3, maxRows: 3 }" />
            </div>
          </t-card>
        </t-space>
      </div>
    </t-card>
  </div>
  <t-dialog v-model:visible="visible" header="新建主题" width="40%" :confirm-on-enter="true">
    <t-form>
      <t-form-item label="姓名" name="name" initial-data="TDesign">
        <t-input placeholder="请输入内容" />
      </t-form-item>
      <t-form-item label="手机号码" name="tel" initial-data="123456">
        <t-input placeholder="请输入内容" />
      </t-form-item>
      <t-form-item label="课程" name="course" initial-data="['1']">
        <t-checkbox-group>
          <t-checkbox value="1">语文</t-checkbox>
          <t-checkbox value="2">数学</t-checkbox>
          <t-checkbox value="3">英语</t-checkbox>
          <t-checkbox value="4">体育</t-checkbox>
        </t-checkbox-group>
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<style>
body {
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

.vue-mqtt-client {
  height: 100vh;
  display: grid;
  place-content: center;
}

.vue-mqtt-client__container {
  display: flex;
}

.vue-mqtt-client__aside {
  width: 12vw;
  height: 70vh;
  overflow-y: auto;
}

.vue-mqtt-client__aside__item {
  margin-top: 16px;
}

.vue-mqtt-client__content {
  width: 50vw;
  height: 70vh;
}

.vue-mqtt-client__content__text {
  height: 56vh;
  overflow-y: auto;
}

.vue-mqtt-client__content__empty {
  height: 100%;
  display: grid;
  place-content: center;
}

.vue-mqtt-client__content__text__item {
  display: flex;
  margin-top: 16px;
}
</style>
