<template>
  <div class="page404">
    <img @load="test=true" src="../assets/404.svg">
    <h1 v-if="error.statusCode === 404 && test">Сторінку не знайдено </h1>
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

    test = false;
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
