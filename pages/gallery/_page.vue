<template>
  <Gallery
    :page="galleryUrlPage"
    @activePswp="emitActivePswp"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class GalleryPage extends Vue {
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.activeImageSrc}` }
          ]
        }
    }

  activeImageSrcDefault = '/photos/general/00051.jpg'

  activeImageSrc = `https://dobromyl-historical-photos.herokuapp.com${this.activeImageSrcDefault}`

  get galleryUrlPage(): number {
    return +this.$route.params.page
  }

  emitActivePswp(activePswp: any) {
    if (activePswp.currItem?.src) {
        this.activeImageSrc = `https://dobromyl-historical-photos.herokuapp.com${activePswp.currItem.src}`
    }
  }
}
</script>
