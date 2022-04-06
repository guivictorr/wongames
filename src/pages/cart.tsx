import { GetServerSideProps } from 'next'
import Cart, { CartProps } from 'templates/Cart'

import cartItems from 'components/CartList/mock'
import cards from 'components/PaymentOptions/mock'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { initializeApollo } from 'api/apollo'
import { gameSliderMapper, highlightMapper } from 'utils/mappers'

function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const session = await protectedRoutes()
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      cards,
      items: cartItems,
      total: '$ 430,00',
      recommendedTitle: data.recommended && data.recommended.section?.title,
      recommendedGames: gameSliderMapper(data?.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data?.recommended?.section?.highlight
      )
    }
  }
}

export default CartPage
