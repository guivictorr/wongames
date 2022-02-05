import { gql } from '@apollo/client'

import { GameSliderFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameSliderFragment
        }
      }
    }
  }

  ${GameSliderFragment}
  ${HighlightFragment}
`
