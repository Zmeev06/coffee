<script setup lang='ts'>
import { ref } from 'vue';
import { CoffieBreakCard } from '@features/CoffieBreak';

const interest = ref()

const options = [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }));
</script>
<template>
  <div class="w-[400px] flex flex-col gap-3">
    <a-select v-model:value="interest" mode="tags" style="width: 100%" placeholder="Ваши интересы"
      :options="options"></a-select>
    <a-card title="Мероприятие">
      <CoffieBreakCard/>
    </a-card>
  </div>
</template>
<style lang='scss'></style>