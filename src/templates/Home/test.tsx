import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home, { HomeTemplateProps } from '.'

const props: HomeTemplateProps = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock,
  newGamesTitle: 'New Games',
  freeGamesTitle: 'Free Games',
  mostPopularGamesTitle: 'Most Popular',
  upcomingGamesTitle: 'Upcoming'
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
jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: () => <div data-testid="Banner mock" />
}))

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home {...props} />)

    expect(screen.getAllByTestId('Showcase mock')).toHaveLength(5)
    expect(screen.getByTestId('Banner mock')).toBeInTheDocument()
  })
})
