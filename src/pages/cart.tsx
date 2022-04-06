import { GetServerSideProps } from 'next'
import Cart, { CartProps } from 'templates/Cart'

import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { initializeApollo } from 'api/apollo'
import { gameSliderMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      recommendedTitle: data.recommended && data.recommended.section?.title,
      recommendedGames: gameSliderMapper(data?.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data?.recommended?.section?.highlight
      )
    }
  }
}

export default CartPage
