import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />)
    const columns = ['Contact', 'Follow us', 'Links', 'Location']

    columns.forEach((name) => {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logo with black color', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })
})
