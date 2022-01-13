import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  recommendedGames,
  upcomingGames,
  upcomingHighlight
}: GameTemplateProps) => (
  <section>
    <Base>
      <S.Cover src={cover} role="img" aria-label="cover" />
      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>
        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>
        <S.SectionTextContent>
          <TextContent content={description} title={gameInfo.title} />
        </S.SectionTextContent>
        <S.SectionGameDetails>
          <GameDetails {...details} />
        </S.SectionGameDetails>
        <Showcase
          highlight={upcomingHighlight}
          gameCardSliderItems={upcomingGames}
          heading="Upcoming"
        />
        <Showcase
          gameCardSliderItems={recommendedGames}
          heading="You may like these games"
        />
      </S.Main>
    </Base>
  </section>
)

export default Game
