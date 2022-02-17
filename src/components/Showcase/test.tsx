import 'match-media-mock'
import { screen, render } from 'utils/test-utils'

import cardSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Showcase from '.'

const props = {
  heading: 'Heading',
  highlight: highlightMock,
  gameCardSliderItems: cardSliderMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render correctly', () => {
    const { container } = render(<Showcase {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: cardSliderMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without heading', () => {
    const { heading, ...rest } = props
    render(<Showcase {...rest} />)
    expect(
      screen.queryByRole('heading', { name: heading })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: cardSliderMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without highlight', () => {
    const { highlight, ...rest } = props
    render(<Showcase {...rest} />)
    expect(
      screen.getByRole('heading', { name: props.heading })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: highlight.title })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: cardSliderMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without slider', () => {
    const { gameCardSliderItems, ...rest } = props
    render(<Showcase {...rest} />)
    expect(
      screen.getByRole('heading', { name: props.heading })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: gameCardSliderItems[0].title })
    ).not.toBeInTheDocument()
  })
})
