import { GetServerSideProps } from 'next'

import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { initializeApollo } from 'api/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { gameSliderMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session)
    return {
      redirect: {
        destination: '/sign-in'
      },
      props: {}
    }

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user?.email as string
    },
    context: { session }
  })

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      initialApolloState: apolloClient.cache.extract(),
      recommendedTitle: data.recommended && data.recommended.section?.title,
      recommendedGames: gameSliderMapper(data?.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data?.recommended?.section?.highlight
      )
    }
  }
}

export default WishlistPage
