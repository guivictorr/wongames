import { gql } from '@apollo/client'
import { GameSliderFragment } from 'graphql/fragments/game'

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
