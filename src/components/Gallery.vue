<template>
  <div class="gallery">
    <div class="gallery-control-panel">
      <button class="gallery-buttons-keys"
              :class="{'gallery-buttons-keys--isActive': isSomeFilterChecked}"
              @click="resetAllFilters"
      >Усі | All</button>
      <button
        class="gallery-buttons-keys"
        :disabled="isFiltered"
        @click="getfilteredImages"
      >Фільтр | Filter</button>
      <div class="gallery-info-block"><i>На ресурсі розміщено <span>{{getImgsCount}}</span> світлин</i></div>
    </div>
    <div class="gallery-control-panel gallery-control-panel--keys">
      <button
        v-for="(filterButton, index) in Object.keys(keysFilters)" :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--keys"
        :class="{'gallery-buttons-keys--isActive': keysFilters[filterButton].isActive}"
        :value="filterButton"
        @click="(e) => turnOnOffKeyFilter(e, 'keysFilters')"
      >
        {{keysFilters[filterButton].name}}
      </button>
    </div>
    <div class="gallery-control-panel gallery-control-panel--years">
      <button
        v-for="(filterButton, index) in Object.keys(yearsFilters)" :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--years"
        :class="{'gallery-buttons-keys--isActive': yearsFilters[filterButton].isActive}"
        :value="filterButton"
        @click="(e) => turnOnOffKeyFilter(e, 'yearsFilters')"
      >
        {{yearsFilters[filterButton].name}}
      </button>
    </div>

    <div
      v-if="imagesByFilter.length"
      class="gallery-control-panel gallery-control-panel--swipe-block"
    >
      <custom-swipe-component :items="imagesSrc" :options="options"></custom-swipe-component>
    </div>

    <div
      v-if="!imagesByFilter.length && !isFiltered"
      class="no-photo-finded"
    >
      <img src="../assets/no-photos.svg">
      <p>Вибачте, але світлин за параметрами фільтра не знайдено...</p>
      <p>Sorry, but images by filter keys, weren't found...</p>
    </div>

    <div
      v-if="imagesByFilter.length"
      class="gallery-control-panel gallery-control-panel--pagination">
      <button
        v-for="(paginationButton, index) in imagesPagesCount"
        :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--keys"
        :class="{'gallery-buttons-keys--isActive': activeImagesPage===index+1}"
        :value="index+1"
        @click="(e) => { activeImagesPage = +e.target.value }"
      >
        {{index + 1}}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import CustomSwipeComponent from './CustomSwipeComponent.vue'
import { Image } from '@/store/imagesStore'
import { IMAGES_KEYS, IMAGES_YEARS, STATIC_FOLDER_PATH } from '@/store/constants'

@Component({
  components: {
    CustomSwipeComponent
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Getter('getImagesByFilter')
  getImages!: (filters: string[]) => Image[];

  @Getter('getImagesCount')
  getImgsCount!: number;

  @Watch('imagesByFilter')
  holdOnWhileFiltering (): void {
    this.isFiltered = false
  }

  imagesByPageCount = 8

  activeImagesPage = 1

  imagesByFilter: Image[] = []

  isFiltered = false

  get imagesPagesCount (): number {
    if (this.imagesByFilter?.length % this.imagesByPageCount === 0) {
      return this.imagesByFilter.length / this.imagesByPageCount
    } else {
      return Math.trunc(this.imagesByFilter.length / this.imagesByPageCount) + 1
    }
  }

  mounted (): void {
    this.imagesByFilter = this.getImages([])
  }

  filterButtonsKeys = IMAGES_KEYS

  filterButtonsYears = IMAGES_YEARS

  keysFilters = Object.keys(this.filterButtonsKeys).reduce((filtersObject, key) => {
    filtersObject[key] = {
      name: this.filterButtonsKeys[key],
      isActive: false
    }
    return filtersObject
  }, {})

  yearsFilters = Object.keys(this.filterButtonsYears).reduce((filtersObject, key) => {
    filtersObject[key] = {
      name: this.filterButtonsYears[key],
      isActive: false
    }
    return filtersObject
  }, {})

    options = {
      rotationOn: true
    }

    turnOnOffKeyFilter (e, filterType): void {
      this[filterType][e.target.value].isActive = !this[filterType][e.target.value].isActive
    }

    getfilteredImages (): void {
      if (this.filteredImages.length) {
        this.isFiltered = true
        this.imagesByFilter = this.getImages(this.filteredImages)
      } else {
        this.imagesByFilter = this.getImages([])
      }
    }

    resetAllFilters (): void {
      Object.keys(this.keysFilters).forEach(key => {
        this.keysFilters[key].isActive = false
      })

      Object.keys(this.yearsFilters).forEach(key => {
        this.yearsFilters[key].isActive = false
      })
    }

    get filteredImages (): string[] {
      const keysFilters: string[] = Object.keys(this.keysFilters)
        .filter(keyFilter => this.keysFilters[keyFilter].isActive === true)
        .map(keyFilter => keyFilter)
      const yearsFilters: string[] = Object.keys(this.yearsFilters)
        .filter(keyFilter => this.yearsFilters[keyFilter].isActive === true)
        .map(keyFilter => keyFilter)

      return [...keysFilters, ...yearsFilters]
    }

    get imagesSrc () {
      return this.imagesByFilter
        .slice(this.activeImagesPage * this.imagesByPageCount - this.imagesByPageCount,
          this.activeImagesPage * this.imagesByPageCount)
        .map(image => ({
          src: STATIC_FOLDER_PATH + image.src + '.jpg',
          thumbnail: STATIC_FOLDER_PATH + image.src + '_prev.jpg',
          w: image.w ? image.w : 1280,
          h: image.w ? image.w : 822,
          title: image.title
        })
        )
    }

    get isSomeFilterChecked () {
      return !Object.keys(this.keysFilters)
        .some(filter => this.keysFilters[filter].isActive === true) && !Object.keys(this.yearsFilters)
        .some(filter => this.yearsFilters[filter].isActive === true)
    }
}
</script>

<style scoped lang="scss">
  .gallery {
    width: 100%;
    height: 100%;
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
    }
    .gallery-control-panel,
    .gallery-control-panel--keys,
    .gallery-control-panel--years {
      margin-bottom: 8px;
      :not(:last-child ) {
        margin-right: 5px;
      }
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
</style>
