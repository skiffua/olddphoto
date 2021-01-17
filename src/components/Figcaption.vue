<template>
  <figcaption class="figcaption figcaption--block">
    <span><b>{{item.title}}</b></span>
    <div class="figcaption figcaption--description">
      <p v-html="item.description"></p>
      <p v-if="item.source">Джерело: <span v-html="item.source"></span></p>
    </div>
    <div v-if="item.keys.length" class="figcaption figcaption--keys-block">
      <p class="keys-paragraph">
        <i>(мітки: {{itemKeys}})</i>
      </p>
    </div>
  </figcaption>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CustomSwipeComponent from './CustomSwipeComponent.vue'

@Component({
  components: {
    CustomSwipeComponent
  }
})
export default class FigcaptionComponent extends Vue {
  @Prop() private item!: any

  get itemKeys (): string {
    return this.item.keys.join(', ')
  }
}
</script>

<style scoped lang="scss">
.figcaption {
  font-size: 15px;
  color: white;
  &--block {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word-wrap: break-word;
    word-break: normal;
  }
  &--description {
    margin: 5px 0;
    padding: 5px 0;
    font-size: 13px;
    text-align: left;
    /*border-right: 1px solid white;*/
    /*border-left: 1px solid white;*/
    overflow: auto;
    p {
      margin: 5px 0;
    }
  }
  &--keys-block {
    /*padding: 0 5px;*/
    flex-grow: 0;
    text-align: left;
    font-size: 12px;
    color: #BCBCBC;
    .keys-paragraph {
      margin: 5px 0;
    }
  }
}
</style>
