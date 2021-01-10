<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Галерея | Gallery</router-link> |
      <router-link to="/about">Проект... | About project...</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  font-size: 15px;

  a {
    font-weight: bold;
    color: dimgrey;

    &.router-link-exact-active {
      color: white;
    }
  }
}

body {
  background-color: black;
}
</style>
