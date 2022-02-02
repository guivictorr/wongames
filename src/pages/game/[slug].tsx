import { GetStaticPaths, GetStaticProps } from 'next'
import { QUERY_GAMES, QUERY_GAMES_BY_SLUG } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { initializeApollo } from 'api/apollo'

import Game, { GameTemplateProps } from 'templates/Game'
import gameCardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables
} from 'graphql/generated/QueryGamesBySlug'
import { formatNumber } from 'utils/format'

const apolloClient = initializeApollo()

function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games.length) {
    return {
      notFound: true,
      props: {},
      redirect: {
        destination: '/'
      }
    }
  }

  const game = data.games[0]

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${game.cover?.src}`,
      description: game.description,
      gameInfo: {
        title: game.name,
        price: formatNumber(game.price, { style: 'currency', currency: 'USD' }),
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        ...image,
        src: `http://localhost:1337${image.src}`
      })),
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        genres: game.categories.map((genre) => genre.name),
        rating: game.rating
      },
      upcomingGames: gameCardMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gameCardMock
    }
  }
}

export default Index
