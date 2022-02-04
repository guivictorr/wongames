import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      src: url
    }
    floatImage {
      src: url
    }
    buttonLink
    buttonLabel
    alignment
  }
`
