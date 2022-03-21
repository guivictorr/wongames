import { gql } from '@apollo/client'

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
        }
      }
    }
  }
`
