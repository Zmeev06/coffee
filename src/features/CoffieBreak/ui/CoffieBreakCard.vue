<script setup lang="ts">

import { reactive, ref } from 'vue';
import { Passing } from '@features/Passing';

const value = ref<number>(1);
const radioStyle = reactive({
  display: 'flex',
  height: '30px',
  lineHeight: '30px',
});

import dayjs, { Dayjs } from 'dayjs';

const date_value = ref<Dayjs>(dayjs('08:00:00', 'HH:mm:ss'));

const loading = ref<boolean>(false);
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    open.value = false;
  }, 2000);
};

const handleCancel = () => {
  open.value = false;
};

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
            <a-button type="primary" danger ghost @click="showModal">Отказаться</a-button>
        </div>

        <a-modal v-model:open="open" @ok="handleOk">
            <template #footer>
                <a-button key="back" @click="handleCancel">Отмена</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk" >Отравить</a-button>
            </template>
            <Passing/>
         </a-modal>
    </div>
    
</template>