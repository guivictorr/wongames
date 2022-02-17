import { screen, render } from 'utils/test-utils'

import Highlight, { HighlightProps } from '.'

const props: HighlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render the heading and button', () => {
    const { container } = render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/rdr2'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render backgroundImage', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render floatImage', () => {
    render(<Highlight {...props} floatImage="/float-image.jpg" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.jpg'
    )
  })

  it('should render align right by default', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
  })

  it('should render align left when is passed', () => {
    const { container } = render(<Highlight {...props} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )
  })
})
