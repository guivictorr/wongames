import Showcase from 'components/Showcase'
import Heading from 'components/Heading'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'

import Base from 'templates/Base'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
}

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading line="left" lineColor="secondary">
        Wishlist
      </Heading>

      {games?.length ? (
        <Grid>
          {games?.map((gameCard, index) => (
            <GameCard key={`wishlist-${index}`} {...gameCard} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear hear"
          hasLink
        />
      )}
      <Divider />
    </Container>
    <Showcase
      heading={recommendedTitle}
      gameCardSliderItems={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
