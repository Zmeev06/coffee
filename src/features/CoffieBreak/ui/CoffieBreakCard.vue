<script setup lang="ts">

import { reactive, ref } from 'vue';
const value = ref<number>(1);
const radioStyle = reactive({
  display: 'flex',
  height: '30px',
  lineHeight: '30px',
});

import dayjs, { Dayjs } from 'dayjs';

const date_value = ref<Dayjs>(dayjs('08:00:00', 'HH:mm:ss'));



</script>

<template>
    <div class="w-[320px] h-[200px] border-2 border-grey rounded-lg mx-auto p-2">
        <div class=" flex justify-between">
            <p>Кофе-брэйк</p>
            <p>22.04.2024</p>

        </div>
        <div class="flex justify-between">
            <a-radio-group v-model:value="value">
                <a-radio :style="radioStyle" :value="1">10 минут</a-radio>
                <a-radio :style="radioStyle" :value="2">20 минут</a-radio>
                <a-radio :style="radioStyle" :value="3">30 минут</a-radio>
            </a-radio-group>
            <div>
                <p>Выберите время</p>
                <a-time-picker v-model:value="date_value" />
            </div>
        </div>

        <div class="flex justify-between mt-1">
            <a-button type="text">Принять</a-button>
            <a-button type="primary" danger ghost>Отказаться</a-button>
        </div>
        
    </div>
    
</template>