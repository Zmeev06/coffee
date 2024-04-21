<script setup lang='ts'>
import { UserCard } from '@//widgets/UsersCard';
import { MainLayout } from '@shared/layouts/MainLayout';

</script>
<template>
  <MainLayout>
    <div class="mt-20">
      <div class="flex gap-10">
        <UserCard> </UserCard>
      </div>
    </div>
  </MainLayout>
</template>
<style lang='scss'></style>