import { screen, render } from 'utils/test-utils'

import itemsMock from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render CartIcon and its badge', () => {
    render(<CartDropdown items={itemsMock} total="$300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${itemsMock.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    render(<CartDropdown items={itemsMock} total="$300,00" />)

    expect(screen.getByText('$300,00')).toBeInTheDocument()
    expect(screen.getByText(`${itemsMock[0].title}`)).toBeInTheDocument()
  })
})
