<script setup lang='ts'>
import { AvatarChange } from '@entities/AvatarChange';
import test from '@assets/test.png'
</script>
<template>
  <div>
    <AvatarChange>
      <template #photo>
        <img class="w-full h-full object-cover" :src="test" />
      </template>
      <template #button>

          <a-button><i class="pi pi-plus" />Изменить
            фотографию</a-button>
      </template>
    </AvatarChange>
  </div>
</template>
<style lang='scss'></style>