<template>
  <div id="nav">
    <NuxtLink to="/">Галерея</NuxtLink> -
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

      &.router-link-exact-active {
        color: white;
      }
    }
  }
</style>
