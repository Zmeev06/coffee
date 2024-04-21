<script setup lang='ts'>
import { Header } from '@widgets/Header'
</script>
<template>
  <div class=" bg-gray-100 h-screen">
    <Header />
    <div class="px-[50px] ">
      <slot />
    </div>
  </div>
</template>
<style lang='scss'></style>