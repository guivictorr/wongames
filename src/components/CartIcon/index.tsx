import { ShoppingCart } from '@styled-icons/material-outlined'
import { useCart } from 'hooks/useCart'

import * as S from './styles'

const CartIcon = () => {
  const { quantity } = useCart()
  return (
    <S.Wrapper>
      {quantity > 0 && (
        <S.Badge aria-label="Cart items">
          {quantity >= 100 ? '99+' : quantity}
        </S.Badge>
      )}
      <ShoppingCart aria-label="Shopping cart" />
    </S.Wrapper>
  )
}

export default CartIcon
