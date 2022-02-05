import { gql } from '@apollo/client'
import { GameSliderFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($today: String!, $limit: Int!) {
    upcomingGames: games(
      where: { release_date_gt: $today }
      sort: "release_date:asc"
      limit: $limit
    ) {
      ...GameSliderFragment
    }
    sections: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${GameSliderFragment}
  ${HighlightFragment}
`
