<template>
  <Album :page="galleryUrlPage" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Отримання сторінки з URL
const route = useRoute();
const galleryUrlPage = computed(() => Number(route.params.page));
</script>
