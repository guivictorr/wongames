import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    const columns = ['Contact', 'Follow us', 'Links', 'Location']

    columns.forEach((name) => {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    })

    const sections = ['News', 'Most popular', 'Upcoming', 'Free games']

    sections.forEach((name) => {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    })
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    expect(screen.getAllByText(/red dead redemption 2/i)).toHaveLength(3)
  })
})
