import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'

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
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase heading="News" gameCardSliderItems={newGames} />
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

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
