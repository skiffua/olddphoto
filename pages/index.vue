<template>
  <Album />
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import PhotosModule, { Image } from '~/store/photos'
import { IMAGES_KEYS, IMAGES_YEARS, STATIC_FOLDER_PATH } from '~/store/constants'

@Component
export default class GalleryPage extends Vue { }
</script>
