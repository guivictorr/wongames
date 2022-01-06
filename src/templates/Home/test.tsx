import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

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
    renderWithTheme(<Home {...props} />)

    expect(screen.getAllByTestId('Showcase mock')).toHaveLength(5)
    expect(screen.getByTestId('Banner mock')).toBeInTheDocument()
  })
})
