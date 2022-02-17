import { screen, render } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Jorge" />)

    expect(screen.getByText('Jorge')).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Jorge" />)

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
