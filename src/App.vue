<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Галерея | Gallery</router-link> -
      <router-link to="/about">Проект | About project</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 6px;
    border-radius: 6px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: white;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: white;
  }
#app {
  padding: 8px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

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

body {
  height: 100vh;
  background-color: black;
}

body,html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
