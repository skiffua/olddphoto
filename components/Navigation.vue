<template>
  <div id="nav">
    <NuxtLink to="/home">Галерея</NuxtLink> -
    <NuxtLink to="/about">Проект</NuxtLink>
  </div>
</template>

<script>
    import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
    // import { IMAGES_KEYS, IMAGES_YEARS, STATIC_FOLDER_PATH } from '~/src/store/constants'

    @Component({
        name: 'Navigation'
    })
    export default class Navigation extends Vue {}
</script>

<style scoped lang="scss">
  #nav {
    padding: 10px;
    font-size: 15px;

    a {
      font-weight: bold;
      color: dimgrey;
      text-decoration: none;

      &.router-link-exact-active {
        color: white;
      }
    }
  }
</style>
