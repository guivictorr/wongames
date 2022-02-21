import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Wishlist, { WishlistTemplateProps } from '.'

const props: WishlistTemplateProps = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedTitle: 'Recommended for you'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Base mock">{children}</div>
  )
}))
jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: () => <div data-testid="Showcase mock" />
}))

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Showcase mock')).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
  })

  it('should render empty when there are no games', () => {
    render(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
        recommendedTitle="Recommended for you"
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
