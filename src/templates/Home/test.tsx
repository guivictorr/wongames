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

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: () => <div data-testid="Menu mock" />
}))
jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: () => <div data-testid="Showcase mock" />
}))
jest.mock('components/Footer', () => ({
  __esModule: true,
  default: () => <div data-testid="Footer mock" />
}))
jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: () => <div data-testid="Banner mock" />
}))

describe('<Home />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Menu mock')).toBeInTheDocument()
    expect(screen.getAllByTestId('Showcase mock')).toHaveLength(5)
    expect(screen.getByTestId('Footer mock')).toBeInTheDocument()
    expect(screen.getByTestId('Banner mock')).toBeInTheDocument()
  })
})
