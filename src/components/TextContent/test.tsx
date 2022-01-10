import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`
}
import TextContent from '.'

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    const { container } = renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render change text correct color for mobile/desktop', () => {
    renderWithTheme(<TextContent {...props} />)
    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement
    expect(wrapper).toHaveStyle({
      color: theme.colors.white
    })

    expect(wrapper).toHaveStyleRule('color', theme.colors.black, {
      media: '(min-width: 768px)'
    })
  })
})
