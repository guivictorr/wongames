import { screen, render } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: {}
}))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    const { container } = render(<UserDropdown username="Jorge" />)

    expect(screen.getByText('Jorge')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
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
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })
})
