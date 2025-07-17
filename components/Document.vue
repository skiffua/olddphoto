<template>
  <article class="document">
    <h2 class="document--title">{{document.title}}</h2>
    <div v-if="isShowLess" class="document--intro" v-html="document.intro"></div>
    <transition
      name="fade"
    >
      <div
        v-if="!isShowLess"
        class="document--text" v-html="document.description"
        :class="{'document--text__less': isShowLess}"
      ></div>
    </transition>
    <button
      v-if="isShowLess"
      @click="toggleDocumentText"
      class="button-dark"
    >розгорнути</button>
    <button
      v-else
      @click="toggleDocumentText"
      class="button-dark"
    >згорнути</button>
    <p class="document--author" v-html="document.author"></p>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDocumentsStore } from '~/stores/documents';

// Проп document
defineProps<{
  document?: Record<string, any>;
}>();

// Реактивна змінна
const isShowLess = ref(true);

// Метод toggleDocumentText
const toggleDocumentText = () => {
  isShowLess.value = !isShowLess.value;
};

// Ініціалізація Pinia стора (для сумісності, якщо потрібен)
const documentsStore = useDocumentsStore();
</script>

<style scoped lang="scss">
  .document {
    max-width: 1200px;
    margin: auto;
    padding: 20px 0;
    text-align: left;
    color: burlywood;

    &--title {
      font-size: 18px;
    }
    &--text, &--intro {
      font-size: 16px;
      padding: 10px 0;
      line-height: 1.4em;
      text-indent: 20px;

      &__less {
        height: 100px;
        overflow: hidden !important;
        text-overflow: ellipsis;
      }
    }
    &--intro {
      font-size: 14px;
    }
    &--author {
      font-size: 14px;
      text-align: right;
    }
  }

  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>
