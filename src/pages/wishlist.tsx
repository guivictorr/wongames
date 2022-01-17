import { GetStaticProps } from 'next'

import highlightMock from 'components/Highlight/mock'
import gamesSliderMock from 'components/GameCardSlider/mock'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      games: gamesSliderMock,
      recommendedGames: highlightMock,
      recommendedHighlight: gamesSliderMock.slice(0, 5)
    }
  }
}

export default WishlistPage
