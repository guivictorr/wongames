import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingMoreGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  freeGames,
  freeHighlight,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase heading="News" gameCardSliderItems={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      heading="Most popular"
      highlight={mostPopularHighlight}
      gameCardSliderItems={mostPopularGames}
    />
    <S.SectionUpcoming>
      <Showcase heading="Upcoming" gameCardSliderItems={upcomingGames} />
      <Showcase
        highlight={upcomingHighlight}
        gameCardSliderItems={upcomingMoreGames}
      />
    </S.SectionUpcoming>

    <Showcase
      heading="Free games"
      highlight={freeHighlight}
      gameCardSliderItems={freeGames}
    />
  </Base>
)

export default Home
