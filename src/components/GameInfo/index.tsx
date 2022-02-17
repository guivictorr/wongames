import Button from 'components/Button'
import CartButton from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import { FavoriteBorder } from 'styled-icons/material-outlined'
import { formatNumber } from 'utils/format'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
  id: string
}

const GameInfo = ({ title, description, price, id }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" line="bottom">
      {title}
    </Heading>

    <Ribbon color="secondary">
      {formatNumber(price, { style: 'currency', currency: 'USD' })}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
