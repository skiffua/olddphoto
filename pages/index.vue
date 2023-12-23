<template>
  <div>
    galleryUrlPage {{galleryUrlPage}}
    <Album />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import PhotosModule, { Image } from '~/store/photos'
import { IMAGES_KEYS, IMAGES_YEARS, STATIC_FOLDER_PATH } from '~/store/constants'

@Component
export default class GalleryPage extends Vue {
  get galleryUrlPage(): number {
    console.log('this.$route.params.page Index', this.$route);

    return +this.$route
  }
}
</script>
