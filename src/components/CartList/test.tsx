import { CartContextDefaultValues } from 'hooks/useCart'
import { screen, render } from 'utils/test-utils'

import CartList from '.'
import items from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: 'R$ 330,00'
    }

    const { container } = render(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }

    render(<CartList hasButton />, { cartProviderProps })
    expect(screen.getByRole('link', { name: 'Buy now' })).toBeInTheDocument()
  })

  it('should render empty cart', () => {
    render(<CartList />)
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })
})
