import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/useCart'
import {
  AddShoppingCart,
  RemoveShoppingCart
} from 'styled-icons/material-outlined'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({ id, size = 'small', hasText }: CartButtonProps) => {
  const { addToCart, removeFromCart, isInCart } = useCart()
  const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'
  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart
            aria-label="
  Remove from cart"
          />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default CartButton
