<template>
  <div class="gallery">
    <div class="gallery-control-panel">
      <button class="gallery-buttons-keys"
              :class="{'gallery-buttons-keys--isActive': PhotosInstance.isSomeFilterChecked}"
              @click.prevent="resetAllFilters"
      >Усі</button>
      <button
        class="gallery-buttons-keys"
        :disabled="isFiltered"
        @click.prevent="getfilteredImages"
      >Фільтр</button>
      <div class="gallery-info-block"><i>
        <span>{{imagesByFilter.length}} / {{PhotosInstance.imagesCount}}</span> світлин</i>
      </div>
    </div>
    <div class="gallery-control-panel gallery-control-panel--keys">
      <button
        v-for="(filterButton, index) in Object.keys(PhotosInstance.wordsFiltersKeys)" :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--keys"
        :class="{'gallery-buttons-keys--isActive': PhotosInstance.isWordsKeyFiltersChecked(filterButton)}"
        :value="filterButton"
        @click="(e) => PhotosInstance.setWordsFilterKey(e.target.value)"
      >
        {{PhotosInstance.wordsFiltersKeys[filterButton].name}}
      </button>
    </div>
    <div class="gallery-control-panel gallery-control-panel--years">
      <button
        v-for="(filterButton, index) in Object.keys(PhotosInstance.yearsFiltersKeys)" :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--years"
        :class="{'gallery-buttons-keys--isActive': PhotosInstance.isYearsKeyFiltersChecked(filterButton)}"
        :value="filterButton"
        @click="(e) => PhotosInstance.setYearsFilterKey(e.target.value)"
      >
        {{PhotosInstance.yearsFiltersKeys[filterButton].name}}
      </button>
    </div>

    <div
      v-show="imagesByFilter.length"
      class="gallery-control-panel gallery-control-panel--swipe-block"
    >
      <transition name="gallery">
        <CustomSwipeComponent
          :items="galleryImages"
          v-model="imagesLoaded"
        ></CustomSwipeComponent>
      </transition>
    </div>

    <div
      v-show="!imagesByFilter.length && !isFiltered && isCorrectUrl"
      class="no-photo-finded"
    >
      <img src="../assets/no-photos.svg">
      <p>Вибачте, але світлин за параметрами фільтра не знайдено...</p>
      <p>Sorry, but images by filter keys, weren't found...</p>
    </div>

    <div
      v-show="imagesByFilter.length"
      class="gallery-control-panel gallery-control-panel--pagination">
      <button
        v-for="(paginationButton, index) in imagesPagesCount"
        :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--keys"
        :class="{
        'gallery-buttons-keys--isActive': page===index+1,
        'gallery-buttons-keys--disabled': activePage===index+1,
        }"
        :disabled="activePage===index+1"
        :value="index+1"
        @click="setGalleryPage"
      >
        {{index + 1}}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import PhotosModule, { Image } from '~/store/photos'
import { IMAGES_KEYS, IMAGES_YEARS, STATIC_FOLDER_PATH } from '~/store/constants'

@Component
export default class Album extends Vue {
  PhotosInstance = getModule(PhotosModule, this.$store)

    setGalleryPage(e: any): void {
        this.activePage = e.target!.value
        this.$router.replace({ path: `/gallery/${e.target!.value}` })
    }

    @Prop({ default: 1})
    page!: number

    activePage: number = this.page

    imagesByPageCount = 8

    isFiltered = false

    isCorrectUrl = false

    imagesLoaded = false

    get imagesPagesCount (): number {
        if (this.imagesByFilter?.length % this.imagesByPageCount === 0) {
            return this.imagesByFilter.length / this.imagesByPageCount
        } else {
            return Math.trunc(this.imagesByFilter.length / this.imagesByPageCount) + 1
        }
    }

    get imagesByFilter(): Image[] {
      return this.PhotosInstance ? this.PhotosInstance.imagesByFilter : [];
    }

    // get PhotosInstance(): any {
    //   return getModule(PhotosModule, this.$store);
    // }

    beforeCreate (): void {
        const currentPage: string = this.$route.params.page
      // this.PhotosInstance = getModule(PhotosModule, this.$store)

        if (isNaN(+currentPage) || (+currentPage < 1 || +currentPage > 15)) {
            this.$router.replace({ path: '/gallery/1' })
        } else {
            this.isCorrectUrl = true
        }
    }

    getfilteredImages (e: any): void {
        if (this.activePage !== 1) {
            this.$router.replace({ path: '/gallery/1' })
        }
    }

    resetAllFilters (): void {
        this.PhotosInstance.resetAllFilters()
    }

    get galleryImages (): any {
        return this.imagesByFilter
            .slice(this.page * this.imagesByPageCount - this.imagesByPageCount,
                this.page * this.imagesByPageCount)
            .map(image => ({
                    src: STATIC_FOLDER_PATH + image.src + '.jpg',
                    thumbnail: STATIC_FOLDER_PATH + image.src + '_prev.jpg',
                    w: image.w ? image.w : 1280,
                    h: image.w ? image.w : 822,
                    title: image.title,
                    description: image.description,
                    keys: image.keys.map(key => {
                        const allKeys = { ...IMAGES_YEARS, ...IMAGES_KEYS }
                        return allKeys[key]
                    }),
                    source: image.source
                })
            )
    }
}
</script>

<style scoped lang="scss">
  .gallery {
    width: 100%;
    max-width: 1500px;
    margin: auto;
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    .gallery-buttons-keys {
      background: black;
      color: white;
      border-radius: 10px;
      &:focus {
        outline: none;
      }
      &:hover {
        cursor: pointer;
        background: dimgrey;
      }
      &--isActive {
        box-shadow: 0 0 3px red,
        0 0 5px white;
      }
      &--disabled {
        cursor: default !important;
      }
    }
    .gallery-control-panel,
    .gallery-control-panel--keys,
    .gallery-control-panel--years {
      margin-bottom: 8px;
    }
    .gallery-control-panel {
      position: relative;
      &--swipe-block {
        flex-grow: 1;
        overflow: auto;
      }
     .gallery-info-block {
       display: inline-block;
       position: absolute;
       right: 0;
       padding: 0 20px;
       font-size: 11px;
       color: white;
     }
    }

    .no-photo-finded {
      padding: 20px 0;
      color: burlywood;
      img {
        width: 150px;
      }
    }
  }
  .gallery-control-panel,
  .gallery-control-panel--keys,
  .gallery-control-panel--years {
    :not(:last-child ) {
      margin-right: 5px;
    }
  }

  /* Анимации появления и исчезновения могут иметь */
  /* различные продолжительности и динамику.       */
  .gallery-enter-active {
    transition: all .6s ease;
  }
  .gallery-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .gallery-enter, .gallery-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    /*transform: translateX(10px);*/
    opacity: 0;
  }
</style>
