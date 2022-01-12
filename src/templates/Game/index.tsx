import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import TextContent from 'components/TextContent'
import Base from 'templates/Base'
import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
}

const Game = ({ cover, gameInfo, gallery, description }: GameTemplateProps) => (
  <section>
    <Base>
      <S.Cover src={cover} role="image" aria-label="cover" />
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
      </S.Main>
    </Base>
  </section>
)

export default Game
