<script setup lang='ts'>
import { ref } from 'vue';

const interest = ref()

const options = [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }));
</script>
<template>
  <div class="w-[400px] flex flex-col gap-3">
    <a-select v-model:value="interest" mode="tags" style="width: 100%" placeholder="Ваши интересы"
      :options="options"></a-select>
    <a-card title="Мероприятие">
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </div>
</template>
<style lang='scss'></style>