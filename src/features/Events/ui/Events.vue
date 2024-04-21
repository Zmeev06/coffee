<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { CoffieBreakCard } from '@features/CoffieBreak';
import { getInterest } from '../api/getInterest';

const interest = ref()

const options = ref()

const getInterestData = async () => {
  const { data, status } = await getInterest()
  if (status === 200) {
    options.value = data.data.map((item: any) => {
      return {value: item.name}
    })
  }
}

onMounted(() => {
  getInterestData()
})
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