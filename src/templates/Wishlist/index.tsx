import { useWishlist } from 'hooks/useWishlist'
import Base from 'templates/Base'

import Showcase from 'components/Showcase'
import Heading from 'components/Heading'
import Empty from 'components/Empty'
import Loader from 'components/Loader'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { HighlightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container>
        <Heading line="left" lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((gameCard, index) => (
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
}

export default Wishlist
