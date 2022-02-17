import { screen, render } from 'utils/test-utils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    render(<CartIcon quantity={12} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cart items/i)).toHaveTextContent('12')
  })

  it('should render 99+ if quantity pass 100', () => {
    render(<CartIcon quantity={100} />)
    expect(screen.getByLabelText(/cart items/i)).toHaveTextContent('99+')
  })

  it('should render only positive numbers', () => {
    render(<CartIcon quantity={-1} />)
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })
})
