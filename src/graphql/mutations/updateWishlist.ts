import { gql } from '@apollo/client'

export const UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlistt($input: updateWishlistInput!) {
    updateWishlist(input: $input) {
      wishlist {
        id
        games {
          id
          name
          slug
        }
      }
    }
  }
`
