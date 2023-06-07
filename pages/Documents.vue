<template>
  <div>
    <Document
      v-for="(document, index) in documents"
      :key="index"
      :document="document"
    />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import { getModule } from 'vuex-module-decorators';
    import DocumentsModule from "~/store/documents";

    @Component
    export default class Documents extends Vue {
        DocumentsInstance = getModule(DocumentsModule, this.$store);

        get documents (): any {
            return this.DocumentsInstance.articles
        }
    }
</script>

<style scoped lang="scss">
</style>

