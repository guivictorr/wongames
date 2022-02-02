import { GetStaticProps } from 'next'
import Games, { GamesProps } from 'templates/Games'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'api/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

function GamesPage(props: GamesProps) {
  return <Games {...props} />
}

export const getStaticProps: GetStaticProps<GamesProps> = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      games: data.games.map((game) => ({
        title: game.name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price),
        developer: game.developers[0].name
      })),
      filterItems: filterItemsMock
    }
  }
}

export default GamesPage
