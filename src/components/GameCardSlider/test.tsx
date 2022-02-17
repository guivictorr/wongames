import 'match-media-mock'
import { screen, render } from 'utils/test-utils'

import theme from 'styles/theme'

import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235.0,
    promotionalPrice: 215.0,
    slug: 'population-zero'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235.0,
    promotionalPrice: 215.0,
    slug: 'population-zero'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235.0,
    promotionalPrice: 215.0,
    slug: 'population-zero'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235.0,
    promotionalPrice: 215.0,
    slug: 'population-zero'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235.0,
    promotionalPrice: 215.0,
    slug: 'population-zero'
  }
]

describe('<GameCardSlider />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCardSlider items={items} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render 4 active items', () => {
    const { container } = render(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should white arrows by default', () => {
    render(<GameCardSlider items={items} />)
    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should black arrows if black color is passed', () => {
    render(<GameCardSlider items={items} color="black" />)
    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.black
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.black
    })
  })
})
