import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={12} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cart items/i)).toHaveTextContent('12')
  })

  it('should render 99+ if quantity pass 100', () => {
    renderWithTheme(<CartIcon quantity={100} />)
    expect(screen.getByLabelText(/cart items/i)).toHaveTextContent('99+')
  })

  it('should render only positive numbers', () => {
    renderWithTheme(<CartIcon quantity={-1} />)
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })
})
