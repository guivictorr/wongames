import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Borderlands 3',
  description: 'My game description',
  price: '200.00'
}

describe('<GameInfo />', () => {
  it('should render the heading, description and price', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText(`$${props.price}`)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})
