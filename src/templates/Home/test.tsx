import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    const columns = ['Contact', 'Follow us', 'Links', 'Location']

    columns.forEach((name) => {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    })
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)

    const sections = ['News', 'Most popular', 'Upcoming', 'Free games']

    sections.forEach((name) => {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    })
  })
})
