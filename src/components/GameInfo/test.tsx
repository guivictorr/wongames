import { screen, render } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  id: '1',
  title: 'Borderlands 3',
  description: 'My game description',
  price: 200.0
}

describe('<GameInfo />', () => {
  it('should render the heading, description and price', () => {
    const { container } = render(<GameInfo {...props} />)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText(/\$200\.00/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    render(<GameInfo {...props} />)
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})
