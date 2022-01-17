import Showcase from 'components/Showcase'
import Heading from 'components/Heading'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'

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

      <Grid>
        {games?.map((gameCard, index) => (
          <GameCard key={`wishlist-${index}`} {...gameCard} />
        ))}
      </Grid>
    </Container>
    <Showcase
      heading="You may like these games"
      gameCardSliderItems={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
