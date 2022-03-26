import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import { setContext } from '@apollo/client/link/context'
import apolloCache from './cache'
import { Session } from 'next-auth'
let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  })

  const authorization = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.jwt || clientSession?.jwt || ''
    const authorization = jwt ? `Bearer ${jwt}` : ''
    return { headers: { ...headers, authorization } }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authorization.concat(httpLink),
    cache: apolloCache
  })
}

export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return apolloClientGlobal

  if (!apolloClient) apolloClient = apolloClientGlobal

  return apolloClientGlobal
}

export function useApollo(initialState = null, session?: Session | null) {
  return useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  )
}
