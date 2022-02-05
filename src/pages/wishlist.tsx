import { GetStaticProps } from 'next'

import gamesSliderMock from 'components/GameCardSlider/mock'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { initializeApollo } from 'api/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { gameSliderMapper, highlightMapper } from 'utils/mapper'

const apolloClient = initializeApollo()

function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    revalidate: 60,
    props: {
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
