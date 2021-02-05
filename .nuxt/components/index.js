export { default as Gallery } from '../..\\components\\Gallery.vue'
export { default as Helpers } from '../..\\components\\helpers.ts'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as CustomSwipeComponent } from '../..\\components\\customSwipeComponent\\index.vue'
export { default as Figcaption } from '../..\\components\\figcaption\\index.vue'

export const LazyGallery = import('../..\\components\\Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => c.default || c)
export const LazyHelpers = import('../..\\components\\helpers.ts' /* webpackChunkName: "components/helpers" */).then(c => c.default || c)
export const LazyNavigation = import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c)
export const LazyCustomSwipeComponent = import('../..\\components\\customSwipeComponent\\index.vue' /* webpackChunkName: "components/custom-swipe-component" */).then(c => c.default || c)
export const LazyFigcaption = import('../..\\components\\figcaption\\index.vue' /* webpackChunkName: "components/figcaption" */).then(c => c.default || c)
