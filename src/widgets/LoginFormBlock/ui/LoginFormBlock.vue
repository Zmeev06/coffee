<script setup lang="ts">
import { LoginForm } from "@features/LoginForm";

</script>
<template lang="html">
  <a-card
    class="w-fit"
    header-color="#122147"
    :headStyle="{
      background: '#FFDD00',
    }"
  >
    <template #cover>
      <div class="px-6 pt-6 pb-3">
        <LoginForm />
      </div>
    </template>
    <template #title>
      <h2 class="text-white text-2xl">Вход</h2>
    </template>
  </a-card>
</template>
<style lang="scss"></style>
