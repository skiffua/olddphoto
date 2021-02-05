<template>
  <div class="home">
    <Navigation />
    <Gallery />
  </div>
</template>

<script>
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {
    /*height: 100%;*/
    /*display: flex;*/
    /*flex-grow: 0;*/
    /*overflow: auto;*/
  }
</style>
