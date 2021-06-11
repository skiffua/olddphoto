import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import photos from '~/store/photos'
import documents from '~/store/documents'

let exampleStore

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(photos, store)
  exampleStore = getModule(documents, store)
}

export { initialiseStores, exampleStore }
