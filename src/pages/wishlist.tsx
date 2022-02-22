import { GetServerSideProps } from 'next'

import gamesSliderMock from 'components/GameCardSlider/mock'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { initializeApollo } from 'api/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { gameSliderMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

const apolloClient = initializeApollo()

function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      games: gamesSliderMock,
      recommendedTitle: data.recommended && data.recommended.section?.title,
      recommendedGames: gameSliderMapper(data?.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data?.recommended?.section?.highlight
      )
    }
  }
}

export default WishlistPage
