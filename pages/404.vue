<template>
  <div class="page404">
    <img @load="isImg404Loaded=true" src="../assets/404.svg">
    <h1 >Сторінку не знайдено </h1>
    <h1 v-if="false">Помилка... спробуйте перезавантажитись)</h1>
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
