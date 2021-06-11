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
      class="document--button"
    >Розгорнути</button>
    <button
      v-else
      @click="toggleDocumentText"
      class="document--button"
    >Згорнути</button>
    <p class="document--author" v-html="document.author"></p>
  </article>
</template>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { IMAGES_KEYS, IMAGES_YEARS, STATIC_FOLDER_PATH } from '~/store/constants'
import DocumentsModule from "~/store/documents";

@Component
export default class Document extends Vue {
    @Prop({ default: {} })
    document!: {}

    isShowLess = true

    toggleDocumentText(): void {
       this.isShowLess = !this.isShowLess
    }

    enter() {
        console.log('enter')
    }

    afterEnter() {
        console.log('afterEnter')
    }

    leave() {
        console.log('leave')
    }
}
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
    &--button {
      min-width: 100px;
      background: black;
      color: white;
      border-radius: 10px;
    }
  }

  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
</style>
