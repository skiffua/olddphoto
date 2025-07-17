<template>
  <div>
    <Document
      v-for="(document, index) in documents"
      :key="index"
      :document="document"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDocumentsStore } from '~/stores/documents';

const documentsStore = useDocumentsStore();
const { documents } = storeToRefs(documentsStore);
</script>
