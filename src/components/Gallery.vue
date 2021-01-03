<template>
  <div class="hello">
    <v-gallery :images="imagesSrcPreview"
               :index="index"
               :options="options"
               @close="index = null"
    />
    <div
      class="image"
      v-for="(image, imageIndex) in imagesSrc"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    >titleProperty</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Image } from '@/store/imagesStore'
import { STATIC_FOLDER_PATH } from '@/store/constants'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Getter('getImagesByFilter')
  getImages!: Image[];

  options = {
    titleElement: 'span',
    titleProperty: 'TEST'
  }

  index = null;

  get imagesSrc () {
    return this.getImages.map(image => {
      console.log(image.src)
      return STATIC_FOLDER_PATH + image.src + '_prev.jpg'
    })
    // return [
    //   'https://dummyimage.com/800/ffffff/000000',
    //   'https://dummyimage.com/1600/ffffff/000000',
    //   'https://dummyimage.com/1280/000000/ffffff',
    //   'https://dummyimage.com/400/000000/ffffff'
    // ]
  }

  get imagesSrcPreview () {
    return this.getImages.map(image => {
      return STATIC_FOLDER_PATH + image.src + '.jpg'
    })
  }
}
</script>

<style scoped lang="scss">
</style>
