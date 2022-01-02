import Home from 'templates/Home'
import { HomeTemplateProps } from '../templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: cardSliderMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: cardSliderMock,
      upcomingGames: cardSliderMock,
      upcomingMoreGames: cardSliderMock,
      upcomingHighlight: highlightMock,
      freeGames: cardSliderMock,
      freeHighlight: highlightMock
    }
  }
}
