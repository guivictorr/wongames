import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
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
  }
`
