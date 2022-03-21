import { gql } from '@apollo/client'

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      id
      games {
        id
        name
      }
    }
  }
`
