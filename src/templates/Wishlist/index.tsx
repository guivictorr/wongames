import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading line="left" lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((gameCard, index) => (
        <GameCard key={`wishlist-${index}`} {...gameCard} />
      ))}
    </Container>
    <Showcase
      heading="You may like these games"
      gameCardSliderItems={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
