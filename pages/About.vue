<template>
  <div>
    <Navigation />
    <div class="about about--page">
      <h1 class="about about--title">Історичні фото Добромильщини</h1>
      <p class="about about--description"><span>Привіт.</span> Вітаю на сайті проекту "Історичні фото Добромильщини", мета якого - зібрати в одному місці історично вагомі та
        цікаві фото нашого міста та місцевості.
      <p class="about about--description">У розділі Галлерая (Gallery) публікуються усі наявні в автора світлини.</p>
      <p class="about about--description">Якщо у Вас є цікаві фото і Ви бажаєте ними поділитись, прошу надіслати їх на адресу електронної
        скриньки dobromyl.photo[равлик]gmail.com.</p>
      <p class="about about--description">Автор ідеї та розробка ресурсу - Олег Мушора.</p>
      <p class="about about--description"><i>Допомогти проекту - 5169 3600 1000 8112</i></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about {
    &--page {
      padding: 20px 0;
      color: burlywood;
    }
    :not(.about--page) {
      padding-bottom: 10px;
    }
    &--title {
      font-size: 18px;
    }
    &--description {
      text-align: left;
    }
    p {
      margin: 5px auto;
      text-indent: 20px;
    }
  }
</style>
