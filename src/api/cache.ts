import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: concatPagination(['where', 'sort'])
      }
    }
  }
})

export default apolloCache
