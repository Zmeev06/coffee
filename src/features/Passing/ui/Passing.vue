<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string>('');
</script>

<template>
    <div>
        <p>Напишите причину отказа</p>
        <a-textarea v-model:value="value" placeholder="Что пошло не так ?" :rows="4" />
    </div>
</template>