import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions } from '@testing-library/react'
import {
  CartContextDefaultValues,
  CartContext,
  CartContextData
} from 'hooks/useCart'
import theme from 'styles/theme'

type CustomRenderProps = {
  cartProviderProps?: CartContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) => {
  return render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        {ui}
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )
}

export * from '@testing-library/react'
export { customRender as render }
