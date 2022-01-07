import { screen } from '@testing-library/react'

import GameDetails, { GameDetailsProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props: GameDetailsProps = {
  platforms: ['mac', 'windows', 'linux'],
  developer: 'Naughty Dog',
  genres: ['Action', 'Adventure', 'RPG'],
  publisher: 'Naughty Dog',
  rating: 'BR0',
  releaseDate: '2020-11-21T23:00:00.000'
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    const { container } = renderWithTheme(<GameDetails {...props} />)
    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('FREE')).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)
    expect(screen.getByText('18+')).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)
    expect(screen.getByText('Action / Adventure / RPG')).toBeInTheDocument()
  })
})
