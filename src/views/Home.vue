<template>
  <div class="home">
    <Gallery msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Gallery from '@/components/Gallery.vue' // @ is an alias to /src

@Component({
  components: {
    Gallery
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {
    height: 100%;
    display: flex;
    flex-grow: 0;
    overflow: auto;
  }
</style>
