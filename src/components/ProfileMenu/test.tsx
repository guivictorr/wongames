import { screen, render } from 'utils/test-utils'

import theme from 'styles/theme'

import ProfileMenu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: {}
}))

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my account/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/orders" />)

    expect(screen.getByRole('link', { name: /my orders/i })).toHaveStyle({
      backgroundColor: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
