import useQueryGames from 'hooks/useQueryGames'
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'
import { formatNumber } from 'utils/format'
import { getStorageItem } from 'utils/local-storage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
}

const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00'
}

const CartContext = createContext<CartContextData>(CartContextDefaultValues)

export type CartProviderProps = {
  children: ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const { data } = useQueryGames({
    skip: !cartItems?.length, // If there are no items in the cart, skip the query
    variables: {
      where: {
        id: cartItems
      }
    }
  })

  const getCartTotal =
    data?.games.reduce((acc, item) => {
      return acc + item.price
    }, 0) || 0

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatNumber(getCartTotal, {
          style: 'currency',
          currency: 'USD'
        })
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
