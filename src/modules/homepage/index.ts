import { createModule } from '@vue-storefront/core/lib/module'
// TODO: Move the logic to appropriate modules and depreciate this one

const KEY = 'homepage'
const store = {
  namespaced: true,
  state: {
    new_collection: [],
    new_products: [],
    promotions: [],
    popular_products: []
  }
}
export const Homepage = createModule({
  key: KEY,
  store: { modules: [{ key: KEY, module: store }] }
})
