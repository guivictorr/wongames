import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    image {
      src: url
    }
    title
    subtitle
    button {
      label
      link
    }
    ribbon {
      title
      color
      size
    }
  }
`
