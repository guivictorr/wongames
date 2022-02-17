import { screen, render } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container } = render(<Footer />)
    const columns = ['Contact', 'Follow us', 'Links', 'Location']

    columns.forEach((name) => {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logo with black color', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })
})
