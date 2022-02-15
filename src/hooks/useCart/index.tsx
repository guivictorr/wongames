import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'
import { getStorageItem } from 'utils/local-storage'

const CART_KEY = 'cartItems'

export type CartContextData = {
  items: string[]
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

  return (
    <CartContext.Provider
      value={{
        items: cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
