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

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    revalidate: 60,
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}

export default GamesPage
