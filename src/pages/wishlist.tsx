import { GetStaticProps } from 'next'

import gamesSliderMock from 'components/GameCardSlider/mock'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      games: gamesSliderMock,
      recommendedGames: gamesSliderMock,
      recommendedHighlight: gamesSliderMock.slice(0, 5)
    }
  }
}

export default WishlistPage
