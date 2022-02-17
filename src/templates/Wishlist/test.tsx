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

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: () => <div data-testid="Showcase mock" />
}))
jest.mock('components/Menu', () => ({
  __esModule: true,
  default: () => <div data-testid="Menu mock" />
}))

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Showcase mock')).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Menu mock')).toBeInTheDocument()
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
