<template>
  <div class="about about--page">
    <div class="about-section">
      <h1 class="title">Історичні фото Добромильщини</h1>
      <p class="description"><span>Привіт.</span> Вітаю на сайті проекту "Історичні фото Добромильщини", мета якого - зібрати в одному місці історично вагомі та
        цікаві фото, спогади, документи нашого міста та місцевості.</p>
      <p class="description">У розділі Галлерая (Gallery) публікуються усі наявні в автора світлини.</p>
      <p class="description">Якщо у Вас є цікаві фото і Ви бажаєте ними поділитись, прошу надіслати їх на адресу електронної
        скриньки dobromyl.photo[равлик]gmail.com.</p>
      <p class="description">Автор ідеї та розробка ресурсу - Олег Мушора.</p>
    </div>

    <div class="coffee-section" v-if="false">
      <div><img alt="support project" src="../assets/icons/coffee.png" class="coffee-cup"></div>
      <transition
        name="fade"
      >
        <div
          v-if="!isShowLess"
        >
          <p><i></i></p>
        </div>
      </transition>
      <button
        v-if="isShowLess"
        @click="toggleDocumentText"
        class="button-dark"
      >допомогти проекту</button>
      <button
        v-else
        @click="toggleDocumentText"
        class="button-dark"
      >згорнути</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShowLess = ref(true);

const toggleDocumentText = () => {
  isShowLess.value = !isShowLess.value;
};
</script>

<style scoped lang="scss">
  .about {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    color: burlywood;

    .about-section {
      .title {
        font-size: 18px;
      }
      .description {
        text-align: left;
      }
      p {
        /*margin: 5px auto;*/
        text-indent: 20px;
        padding: 10px 0;
      }
    }
    :not(.about--page) {
      /*padding-bottom: 10px;*/
    }

    .coffee-section {
      font-size: 13px;

      p {
        padding: 10px 0;
      }

      .coffee-cup {
        animation: shake 5s;
        animation-iteration-count: infinite;
        animation-delay: 2s;
      }
    }
  }

  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>
