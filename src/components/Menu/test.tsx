import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

jest.mock('components/CartDropdown', () => ({
  __esModule: true,
  default: () => <div data-testid="CartDropdown Mock">CartDropdown Mock</div>
}))

describe('<Menu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByTestId('CartDropdown Mock')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({
      opacity: 1
    })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText('Wishlist')).not.toBeInTheDocument()
    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Test" />)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText('Wishlist')).toBeInTheDocument()
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
