import { gql } from '@apollo/client'

export const GameSliderFragment = gql`
  fragment GameSliderFragment on Game {
    id
    name
    slug
    price
    developers {
      name
    }
    cover {
      url
    }
  }
`
