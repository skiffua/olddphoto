<template>
  <div class="page404">
    <img src="../assets/404.svg" alt="404 image">
    <h1 v-if="error?.statusCode === 404">Сторінку не знайдено </h1>
    <h1 v-else-if="error?.statusCode !== 404">Помилка... спробуйте перезавантажитись)</h1>
    <NuxtLink to="/"><h2>Повернутись на головну</h2></NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { definePageMeta } from '~/.nuxt/imports';

// Проп error
defineProps<{
  error?: any;
}>();
</script>

<style scoped lang="scss">
.page404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: burlywood;

  img {
    width: 150px;
  }
}
</style>
