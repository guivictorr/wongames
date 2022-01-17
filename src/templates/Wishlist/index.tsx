import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading line="left" lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
    <Showcase
      heading="You may like these games"
      gameCardSliderItems={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
