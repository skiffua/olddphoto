<template>
  <div class="gallery">
    <div class="gallery-control-panel">
      <button class="gallery-buttons-keys"
              :class="{'gallery-buttons-keys--isActive': isSomeFilterChecked}"
              @click.prevent="resetAllFilters"
      >Усі</button>
      <button
        class="gallery-buttons-keys"
        :disabled="isFiltered"
        @click.prevent="getfilteredImages"
      >Фільтр</button>
      <div class="gallery-info-block">
        <i><span>{{imagesByFilter.length}} / {{imagesCount}}</span> світлин</i>
      </div>
    </div>

    <div class="gallery-control-panel gallery-control-panel--keys">
      <button
        v-for="(filterButton, index) in Object.keys(wordsFiltersKeys)" :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--keys"
        :class="{'gallery-buttons-keys--isActive': isWordsKeyFiltersChecked(filterButton)}"
        :value="filterButton"
        @click="(e) => setWordsFilterKey(e.target.value)"
      >
        {{wordsFiltersKeys[filterButton].name}}
      </button>
    </div>

    <div class="gallery-control-panel gallery-control-panel--years">
      <button
        v-for="(filterButton, index) in Object.keys(yearsFiltersKeys)" :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--years"
        :class="{'gallery-buttons-keys--isActive': isYearsKeyFiltersChecked(filterButton)}"
        :value="filterButton"
        @click="(e) => setYearsFilterKey(e.target.value)"
      >
        {{yearsFiltersKeys[filterButton].name}}
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
      <img src="../assets/no-photos.svg" />
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

<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app';
import { computed, ref, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePhotosStore } from '~/stores/photos';
import type { Image } from '~/stores/photos';
import { IMAGES_KEYS, IMAGES_YEARS, STATIC_FOLDER_PATH } from '~/stores/constants';

// Проп page
const props = defineProps<{ page?: number }>();

// Store
const photosStore = usePhotosStore();

// Reactive state + getters from store
const {
  imagesByFilter,
  imagesCount,
  isSomeFilterChecked,
  wordsFiltersKeys,
  yearsFiltersKeys
} = storeToRefs(photosStore);

// Methods from store
const {
  isWordsKeyFiltersChecked,
  isYearsKeyFiltersChecked,
  setWordsFilterKey,
  setYearsFilterKey,
  resetAllFilters
} = photosStore;

// Local state
const activePage = ref(props.page ?? 1);
const imagesByPageCount = ref(8);
const isFiltered = ref(false);
const isCorrectUrl = ref(false);
const imagesLoaded = ref(false);

const config = useRuntimeConfig();

// Router
const route = useRoute();
const router = useRouter();

// Validate URL
onBeforeMount(() => {
  const currentPage = route.params.page as string;
  if (isNaN(+currentPage) || +currentPage < 1 || +currentPage > 17) {
    router.replace({ path: '/gallery/1/' });
  } else {
    isCorrectUrl.value = true;
  }
});

// Pagination logic
const setGalleryPage = (e: Event) => {
  const target = e.target as HTMLInputElement;
  activePage.value = Number(target.value);
  router.replace({ path: `/gallery/${target.value}/` });
};

const imagesPagesCount = computed(() => {
  const length = imagesByFilter.value.length;
  return Math.ceil(length / imagesByPageCount.value);
});

// Filter logic
const getfilteredImages = () => {
  if (activePage.value !== 1) {
    router.replace({ path: '/gallery/1/' });
  }
};

// Gallery images for display
const galleryImages = computed(() =>
  imagesByFilter.value
    .slice(
      activePage.value * imagesByPageCount.value - imagesByPageCount.value,
      activePage.value * imagesByPageCount.value
    )
    .map((image: Image) => ({
      src: `${config.public.apiBaseUrl}${STATIC_FOLDER_PATH}${image.src}.jpg`,
      // src: `http://localhost:3000${STATIC_FOLDER_PATH}${image.src}.jpg`,
      thumbnail: `${STATIC_FOLDER_PATH}${image.src}_prev.jpg`,
      w: image.w ?? 1280,
      h: image.h ?? 822,
      title: image.title,
      description: image.description,
      alt: image.title,
      keys: image.keys.map((key) => {
        const allKeys = { ...IMAGES_YEARS, ...IMAGES_KEYS };
        return allKeys[key];
      }),
      source: image.source
    }))
);
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
