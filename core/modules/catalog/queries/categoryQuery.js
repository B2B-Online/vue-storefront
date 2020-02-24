import SearchQuery from '@vue-storefront/core/lib/search/searchQuery'
import config from 'config'

export function prepareCategoryQuery ({category = '', queryText = '', filters = [], queryConfig = ''}) {
  let query = new SearchQuery()
  // prepare filters and searchText
  if (filters.length === 0 && queryConfig !== '') {
    // try get filters from config
    if (config.hasOwnProperty('categoryQuery') && config.categoryQuery[category].hasOwnProperty(queryConfig) && config.categoryQuery[category][queryConfig].hasOwnProperty('filter')) {
      filters = config.categoryQuery[category][queryConfig].filter
    }
  }

  if (queryText === '') {
    // try to get searchText from config
    if (config.hasOwnProperty('categoryQuery') && config.categoryQuery[category].hasOwnProperty(queryConfig) && config.categoryQuery[category][queryConfig].hasOwnProperty('searchText')) {
      queryText = config.categoryQuery[category][queryConfig].searchText
    }
  }

  // Process filters and searchText if exists
  if (filters.length > 0) {
    filters.forEach(filter => {
      query = query.applyFilter({key: filter.key, value: filter.value}) // Tees category
    })
  }

  if (queryText !== '') {
    query = query.setSearchText(queryText)
  }

  // Add basic filters
  query = query
    .applyFilter({key: 'visibility', value: {'in': [2, 3, 4]}})
    .applyFilter({key: 'status', value: {'in': [0, 1]}})

  return query
}