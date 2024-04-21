<script setup lang='ts'>
import Events from '@features/Events/ui/Events.vue';
import { ChangeAvatar } from '@features/ChangeAvatar';
import { UserData } from '@features/UserData';

</script>
<template>
  <div class="w-[80vw] flex justify-between mx-auto">
    <ChangeAvatar />
    <UserData />
    <Events />
  </div>
</template>
<style lang='scss'></style>