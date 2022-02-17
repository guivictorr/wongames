import { screen, render } from 'utils/test-utils'

import Empty from '.'

const props = {
  title: 'Title',
  description: 'Description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('img', { name: /a game in a couch playing videogame/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should not render link when hasLink is false', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
