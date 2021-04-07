<template>
  <div class="page404" v-show="isImg404Loaded">
    <img @load="isImg404Loaded=true" src="../assets/404.svg">
    <h1 v-if="error.statusCode === 404 && isImg404Loaded">Сторінку не знайдено </h1>
    <h1 v-else-if="error.statusCode !== 404">Помилка... спробуйте перезавантажитись)</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Gallery extends Vue {
    @Prop({ default: ''})
    error!: any;

    layout() { return 'error' }

    isImg404Loaded = false;
 }
</script>

<style scoped lang="scss">
  .page404 {
    color: burlywood;

    img {
      width: 150px;
    }
  }
</style>
