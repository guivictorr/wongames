import Button from 'components/Button'
import { useCart } from 'hooks/useCart'
import {
  AddShoppingCart,
  RemoveShoppingCart
} from 'styled-icons/material-outlined'

type CartButtonProps = {
  id: string
}

const CartButton = ({ id }: CartButtonProps) => {
  const { addToCart, removeFromCart, isInCart } = useCart()
  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart
            aria-label="
  Remove from cart"
            size="small"
          />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
      size="small"
    />
  )
}

export default CartButton
