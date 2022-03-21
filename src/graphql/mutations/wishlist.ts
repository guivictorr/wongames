import { gql } from '@apollo/client'

export const MUTATION_UPDATE_WISHLIST = gql`
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

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishlist($input: createWishlistInput!) {
    createWishlist(input: $input) {
      wishlist {
        id
        user {
          id
          username
        }
        games {
          id
          name
          slug
        }
      }
    }
  }
`
