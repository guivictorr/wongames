import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions } from '@testing-library/react'
import {
  CartContextDefaultValues,
  CartContext,
  CartContextData
} from 'hooks/useCart'
import theme from 'styles/theme'
import {
  WishlistContext,
  WishlistContextData,
  WishlistContextDefaultValues
} from 'hooks/useWishlist'

type CustomRenderProps = {
  cartProviderProps?: CartContextData
  wishlistProviderProps?: WishlistContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    wishlistProviderProps = WishlistContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) => {
  return render(
    <ThemeProvider theme={theme}>
      <WishlistContext.Provider value={wishlistProviderProps}>
        <CartContext.Provider value={cartProviderProps}>
          {ui}
        </CartContext.Provider>
      </WishlistContext.Provider>
    </ThemeProvider>,
    renderOptions
  )
}

export * from '@testing-library/react'
export { customRender as render }
