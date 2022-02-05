import { gql } from '@apollo/client'

export const GameSliderFragment = gql`
  fragment GameSliderFragment on Game {
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
