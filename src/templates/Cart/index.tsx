import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList, { CartListProps } from 'components/CartList'
import PaymentForm from 'components/PaymentForm'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
} & CartListProps

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading line="left" lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />
          <PaymentForm />
        </S.Content>
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

export default Cart
