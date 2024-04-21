<script setup lang="ts">

import { reactive, ref } from 'vue';
import type { UnwrapRef } from 'vue';

const columns = [
  {
    title: 'ФИО',
    dataIndex: 'name',
    width: '25vw',
  },
  {
    title: 'Дата рождения',
    dataIndex: 'age',
    width: '40vw',
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40vw',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
  },
];
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const dataSource = ref(data);
const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});


</script>

<template>

    <div class="conteiner">
    <a-table :columns="columns" :data-source="dataSource" bordered>
        <template #bodyCell="{ column, text, record }">
        <template v-if="['ФИО', 'Дата рождения', 'Статус','Должность'].includes(column.dataIndex)">
            <div>
            <a-input
                v-if="editableData[record.key]"
                style="margin: -5px 0"
            />
            <template v-else>
                {{ text }}
            </template>
            </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
            <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
            </span>
            <span v-else>
                <a >Edit</a>
            </span>
            </div>
        </template>
        </template>
    </a-table>
    </div>

</template>


<style scoped >
    .conteiner {
        width: 100vw;
        align-items: center;
        padding: 10px;
        margin: 5vh;
    }
</style>
