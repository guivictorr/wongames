import { screen, render, fireEvent } from 'utils/test-utils'

import theme from 'styles/theme'

import GameCard from '.'

const props = {
  title: 'Super Mario Odyssey',
  developer: 'Nintendo',
  img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  price: 50,
  slug: 'super-mario-odyssey'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByText(/\$50.00/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'alt',
      props.title
    )
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)
    const price = screen.getByText('$50.00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render promotional price', () => {
    render(<GameCard {...props} promotionalPrice={25} />)

    expect(screen.getByText('$50.00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('$25.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    render(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    render(<GameCard {...props} onFavorite={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="20% OFF"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/20% OFF/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    })
  })
})
