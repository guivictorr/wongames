import useQueryGames from 'hooks/useQueryGames'
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'
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
}

const CartContextDefaultValues = {
  items: []
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

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
