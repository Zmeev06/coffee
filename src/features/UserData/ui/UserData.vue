<script setup lang='ts'>
import dayjs from 'dayjs';
import { toUnix } from '../../../shared/model/toUnix';
import { getSpheres } from '../api/getSpheres';
import { ref, onMounted } from 'vue';

interface Props {
  surname: string
  name: string
  patronymic: string
  email: string
  gmail: string
  tg: string
  date: number
  sphere: string
}

interface Emits {
  (emit: 'update:surname', value: string): void
  (emit: 'update:name', value: string): void
  (emit: 'update:patronymic', value: string): void
  (emit: 'update:email', value: string): void
  (emit: 'update:gmail', value: string): void
  (emit: 'update:tg', value: string): void
  (emit: 'update:date', value: number): void
  (emit: 'update:sphere', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const spheres = ref()

const setBirthday = (e: any) => {
  emit("update:date", toUnix(e));
};

const getSpheresData = async () => {
  const { data, status } = await getSpheres()
  if (status === 200) {
    spheres.value = data.data.map((item: any) => {
      return {
        label: item.name,
        value: item.id
      }
    })
  }
}

onMounted(() => {
  getSpheresData()
})
</script>
<template>
  <div>
    <a-card size="small" title="Ваши данные:" class="max-w-[350px]">
      <div class="flex flex-col gap-4">
        <a-input :value="props.surname" @input="(e: any) => emit('update:surname', e)" class="w-[300px]"
          placeholder="Фамилия" />
        <a-input :value="name" @input="(e: any) => emit('update:name', e)" class="w-[300px]" placeholder="Имя" />
        <a-input :value="patronymic" @input="(e: any) => emit('update:patronymic', e)" class="w-[300px]"
          placeholder="Отчество" />
        <a-date-picker :value="dayjs.unix(props.date).format('DD.MM.YYYY')" valueFormat="DD.MM.YYYY" format="DD.MM.YYYY"
          @change="setBirthday" />
        <a-input :value="email" @input="(e: any) => emit('update:email', e)" class="w-[300px]" placeholder="Email" />
        <a-input :value="gmail" @input="(e: any) => emit('update:gmail', e)" class="w-[300px]" placeholder="Gmail" />
        <a-input :value="tg" @input="(e: any) => emit('update:tg', e)" class="w-[300px]" placeholder="Telegram" />
        <a-select :value="sphere" @change="(e:any) => emit('update:sphere', e)" :options="spheres"></a-select>
      </div>
    </a-card>
    <a-button class="w-full mt-2"><i class="pi pi-save mr-2" />Сохранить</a-button>
  </div>
</template>
<style lang='scss'></style>