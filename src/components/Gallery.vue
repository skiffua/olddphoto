<template>
  <div class="hello">
<!--    <LightGallery-->
<!--      :images="imagesSrc"-->
<!--      :index="index"-->
<!--      :disable-scroll="true"-->
<!--      @close="index = null"-->
<!--    />-->
<!--    <ul>-->
<!--      <li-->
<!--        v-for="(thumb, thumbIndex) in imagesSrc"-->
<!--        :key="thumbIndex"-->
<!--        @click="index = thumbIndex"-->
<!--      >-->
<!--        <img :src="thumb.thumbnail">-->
<!--        <div>sdflksdlfk;</div>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <lightbox :currentImage="currentImageFather"-->
<!--              :overlayActive="overlayActiveFather"-->
<!--              :images="imagesSrc"-->
<!--              :caption="true"-->
<!--    >-->
<!--      <div v-for="(image, index) in imagesSrc" :key="image.id">-->
<!--        <img :src="image.src" v-on:click="clickImage(index)">-->
<!--      </div>-->
<!--    </lightbox>-->
<!--    <div v-for="(image, index) in imagesSrc" :key="image.id">-->
<!--      <img :src="image.src" v-on:click="clickImage(index)">-->
<!--    </div>-->

        <custom-swipe-component :items="imagesSrc" :options="options"></custom-swipe-component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import CustomSwipeComponent from './CustomSwipeComponent.vue'
import { Image } from '@/store/imagesStore'
import { STATIC_FOLDER_PATH } from '@/store/constants'

@Component({
  components: {
    CustomSwipeComponent
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Getter('getImagesByFilter')
  getImages!: Image[];

  options = {
    rotationOn: true
  }

  get imagesSrc () {
    return this.getImages.map((image, index) => ({
      src: STATIC_FOLDER_PATH + image.src + '.jpg',
      thumbnail: STATIC_FOLDER_PATH + image.src + '_prev.jpg',
      w: 1280,
      h: 822,
      title: image.title
    })
    )
  }

  // getHtml () {
  //   const newDiv = document.createElement('div')
  //   newDiv.innerHTML = '<h1>Привет!</h1>'
  //   return newDiv
  // }
}
</script>

<style scoped lang="scss">
</style>
