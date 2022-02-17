import { screen, render } from 'utils/test-utils'

import items from 'components/CartList/mock'

import CartDropdown from '.'
import { CartContextDefaultValues } from 'hooks/useCart'

describe('<CartDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: 'R$ 330,00'
    }

    render(<CartDropdown />, { cartProviderProps })
  })

  it('should render CartIcon and its badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
