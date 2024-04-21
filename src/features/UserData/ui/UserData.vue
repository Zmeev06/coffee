<script setup lang='ts'>
import { ref } from 'vue';

const spheres = [
  {
    label: 'тест 1',
    value: 0
  },
  {
    label: 'тест 2',
    value: 1
  },
  {
    label: 'тест 3',
    value: 2
  },
  {
    label: 'тест 4',
    value: 3
  },
]

const surname = ref('')
const name = ref('')
const patronymic = ref('')
const email = ref('')
const gmail = ref('')
const tg = ref('')
const date = ref(0)
const sphere = ref('0')


</script>
<template>
  <div>
    <a-card size="small" title="Ваши данные:" class="max-w-[350px]">
      <div class="flex flex-col gap-4">
        <a-input v-model:value="surname" class="w-[300px]" placeholder="Фамилия" />
        <a-input v-model:value="name" class="w-[300px]" placeholder="Имя" />
        <a-input v-model:value="patronymic" class="w-[300px]" placeholder="Отчество" />
        <a-date-picker v-model:value="date" format="DD.MM.YYYY" />
        <a-input v-model:value="email" class="w-[300px]" placeholder="Email" />
        <a-input v-model:value="gmail" class="w-[300px]" placeholder="Gmail" />
        <a-input v-model:value="tg" class="w-[300px]" placeholder="Telegram" />
        <a-select v-model:value="sphere" :options="spheres"></a-select>
      </div>
    </a-card>
    <a-button class="w-full mt-2"><i class="pi pi-save mr-2" />Сохранить</a-button>
  </div>
</template>
<style lang='scss'></style>