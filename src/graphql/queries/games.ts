import { gql } from '@apollo/client'
import { GameSliderFragment } from 'graphql/fragments/game'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!, $start: Int) {
    games(limit: $limit, start: $start) {
      ...GameSliderFragment
    }
  }

  ${GameSliderFragment}
`

export const QUERY_GAMES_BY_SLUG = gql`
  query QueryGamesBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      name
      short_description
      description
      price
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
        label: alternativeText
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`
