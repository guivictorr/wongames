import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList, { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Omit<PaymentOptionsProps, 'handlePayment'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading line="left" lineColor="secondary">
          My card
        </Heading>

        <S.Content>
          <CartList items={items} total={total} />
          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>
        <Divider />
      </Container>

      <Showcase
        heading="You may like these games"
        gameCardSliderItems={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
