<script setup lang='ts'>
import Events from '@features/Events/ui/Events.vue';
import { ChangeAvatar } from '@features/ChangeAvatar';
import { UserData } from '@features/UserData';
import { getUser } from '../api/getUser';
import { ref, onMounted } from 'vue';
import { Loader } from '@shared/ui/Loader';

const user = ref()

const getData = async () => {
  const { data, status } = await getUser()
  if (status === 200) {
    user.value = data.data
  }
}

onMounted(() => {
  getData()
})
</script>
<template>
  <div class="w-[80vw] flex justify-between mx-auto">
    <ChangeAvatar />
    <UserData v-if="user" v-model:email="user.email" v-model:date="user.birthday" v-model:gmail="user.gmail" v-model:name="user.name" v-model:patronymic="user.patronymic" v-model:sphere="user.sphere" v-model:surname="user.surname" v-model:tg="user.telegram"/>
    <Loader v-else/>
    <Events />
  </div>
</template>
<style lang='scss'></style>