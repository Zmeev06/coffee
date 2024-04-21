<script setup lang='ts'>
import { AvatarChange } from '@entities/AvatarChange';
import test from '@assets/test.png'
</script>
<template>

  <AvatarChange>
    <template #photo>
      <img class="w-full h-full object-cover" :src="test" />
    </template>
    <template #button>
      <a-button><i class="pi pi-plus mr-2" />Изменить
        фотографию</a-button>
    </template>
  </AvatarChange>

</template>
<style lang='scss'></style>