import { ShoppingCart } from '@styled-icons/material-outlined'

import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && (
      <S.Badge aria-label="Cart items">
        {quantity >= 100 ? '99+' : quantity}
      </S.Badge>
    )}
    <ShoppingCart aria-label="Shopping cart" />
  </S.Wrapper>
)

export default CartIcon
