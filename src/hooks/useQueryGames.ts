import { QueryHookOptions, useQuery } from '@apollo/client'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'

const useQueryGames = (
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) => useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options)

export default useQueryGames
