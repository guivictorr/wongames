import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Jorge" />)

    expect(screen.getByText('Jorge')).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Jorge" />)

    userEvent.click(screen.getByText('Jorge'))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /my wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })
})
