import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameSliderFragment } from 'graphql/fragments/game'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      id
      games {
        ...GameSliderFragment
      }
    }
  }
  ${GameSliderFragment}
`

export const useQueryWishlist = (
  options: QueryHookOptions<QueryWishlist, QueryWishlistVariables>
) => {
  return useQuery<QueryWishlist, QueryWishlistVariables>(
    QUERY_WISHLIST,
    options
  )
}
