<template>
  <div class="page404">
    <img @load="isImg404Loaded=true" src="../assets/404.svg">
    <h1 >Сторінку не знайдено </h1>
    <h1 v-if="false">Помилка... спробуйте перезавантажитись)</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '~/.nuxt/imports';

// Проп error
defineProps<{
  error?: any;
}>();

// Реактивна змінна
const isImg404Loaded = ref(false);

// Визначення layout
definePageMeta({
  layout: 'error',
});
</script>

<style scoped lang="scss">
  .page404 {
    color: burlywood;

    img {
      width: 150px;
    }
  }
</style>
