import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'
import { formatNumber } from 'utils/format'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" line="bottom">
      {title}
    </Heading>

    <Ribbon color="secondary">
      {formatNumber(price, { style: 'currency', currency: 'USD' })}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
