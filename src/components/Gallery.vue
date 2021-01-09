<template>
  <div class="gallery">
    {{keysFilters}}
    <div class="gallery-control-panel">
      <button class="gallery-buttons-keys"
              :class="{'gallery-buttons-keys--isActive': isSomeFilterChecked}"
      >Усі | All</button>
      <button class="gallery-buttons-keys">Фільтр | Filter</button>
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

    <custom-swipe-component :items="imagesSrc" :options="options"></custom-swipe-component>

    <div class="gallery-control-panel gallery-control-panel--pagination">
      <button
        v-for="(paginationButton, index) in 5"
        :key="index"
        class="gallery-buttons-keys gallery-buttons-keys--keys"
        :class="{'gallery-buttons-keys--isActive': true}"
        :value="index+1"
      >
        {{index + 1}}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import CustomSwipeComponent from './CustomSwipeComponent.vue'
import { Image } from '@/store/imagesStore'
import { IMAGES_KEYS, STATIC_FOLDER_PATH, YEARS_KEYS } from '@/store/constants'

@Component({
  components: {
    CustomSwipeComponent
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Getter('getImagesByFilter')
  getImages!: (filters: string[]) => Image[];

  filterButtonsKeys = IMAGES_KEYS

  filterButtonsYears = YEARS_KEYS

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

    get imagesSrc () {
      return this.getImages([]).map(image => ({
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
  }
</style>
