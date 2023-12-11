<template>
  <div id="nav">
    <NuxtLink to="/gallery">Галерея</NuxtLink> -
    <NuxtLink to="/documents">Документи</NuxtLink> -
    <NuxtLink to="/about">Проект</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  #nav {
    padding: 10px;
    font-size: 15px;

    a {
      font-weight: bold;
      color: dimgrey;
      text-decoration: none;

      &.nuxt-link-exact-active {
        color: white;
      }
    }
  }
</style>
