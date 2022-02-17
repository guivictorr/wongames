import useQueryGames from 'hooks/useQueryGames'
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'
import { formatNumber } from 'utils/format'
import { getStorageItem, setStorageItem } from 'utils/local-storage'
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
  loading: boolean
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
  loading: false,
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null
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

  const { data, loading } = useQueryGames({
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

  const isInCart = (id: string) => cartItems.includes(id)

  const addToCart = (id: string) => saveCart([...cartItems, id])

  const saveCart = (items: string[]) => {
    setCartItems(items)
    setStorageItem(CART_KEY, items)
  }

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((item) => item !== id)
    saveCart(newCartItems)
  }

  const clearCart = () => saveCart([])

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatNumber(getCartTotal || 0, {
          style: 'currency',
          currency: 'USD'
        }),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart, CartContext }
