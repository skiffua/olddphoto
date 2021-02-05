import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import photos from '~/store/photos'

let exampleStore: photos

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(photos, store)
}

export { initialiseStores, exampleStore }
