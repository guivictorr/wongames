import { gql } from '@apollo/client'
import { GameSliderFragment } from 'graphql/fragments/game'

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlistt($input: updateWishlistInput!) {
    updateWishlist(input: $input) {
      wishlist {
        id
        games {
          ...GameSliderFragment
        }
      }
    }
  }
  ${GameSliderFragment}
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
          ...GameSliderFragment
        }
      }
    }
  }
  ${GameSliderFragment}
`
