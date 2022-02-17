import { screen, render } from 'utils/test-utils'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import theme from 'styles/theme'

import Button from '.'

describe('<Button />', () => {
  it('should render large button by default', () => {
    const { container } = render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '5rem',
      'font-size': theme.font.sizes.medium,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render medium button when passed medium size', () => {
    render(<Button size="medium">Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '4rem',
      'font-size': theme.font.sizes.small,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    })
  })

  it('should render small button when passed small size', () => {
    render(<Button size="small">Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      height: '3rem',
      'font-size': theme.font.sizes.xsmall
    })
  })

  it('should render 100% width button when passed fullWidth size', () => {
    render(<Button fullWidth>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render button with icon when passed icon', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Button</Button>
    )

    expect(screen.getByText(/button/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button with minimal style', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Button
      </Button>
    )

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      background: 'none',
      color: theme.colors.primary
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Button
      </Button>
    )

    expect(screen.getByRole('link', { name: /button/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
