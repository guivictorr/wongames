import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameSliderFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome($today: String!, $limit: Int!) {
    banners {
      ...BannerFragment
    }
    newGames: games(
      where: { release_date_lte: $today }
      sort: "release_date:desc"
      limit: $limit
    ) {
      ...GameSliderFragment
    }
    upcomingGames: games(
      where: { release_date_gt: $today }
      sort: "release_date:asc"
      limit: $limit
    ) {
      ...GameSliderFragment
    }
    freeGames: games(
      where: { price: 0 }
      sort: "release_date:asc"
      limit: $limit
    ) {
      ...GameSliderFragment
    }
    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      popularGames {
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
  ${BannerFragment}
`
