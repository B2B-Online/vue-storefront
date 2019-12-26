import { createModule } from '@vue-storefront/core/lib/module'

const KEY = 'categoryhomepage'
const store = {
  namespaced: true,
  state: {
    new_products: [],
    promotions: [],
    popular_products: [],
    blogs: []
  }
}
export const CategoryHomePage = createModule({
  key: KEY,
  store: { modules: [{ key: KEY, module: store }] }
})
