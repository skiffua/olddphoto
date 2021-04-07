<template>
  <div>
    <h1 v-if="error.statusCode === 404">Сторінку не знайдено</h1>
    <h1 v-else>Помилка... спробуйте перезавантажитись)</h1>
<!--    <NuxtLink to="/">Home page</NuxtLink>-->
  </div>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'error' // you can set a custom layout for the error page
    }
</script>
