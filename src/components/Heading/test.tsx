import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import Heading from '.'

describe('<Heading />', () => {
  it('should render white color by default', () => {
    renderWithTheme(<Heading>Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render black color when is passed', () => {
    renderWithTheme(<Heading color="black">Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading line="left">Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'padding-left': theme.spacings.xxsmall,
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading line="bottom">Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading line="left" lineColor="primary">
        Won games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`,
      'padding-left': theme.spacings.xxsmall
    })
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading line="left" lineColor="secondary">
        Won games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`,
      'padding-left': theme.spacings.xxsmall
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': theme.font.sizes.medium
    })

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      `3rem`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a medium size by default', () => {
    renderWithTheme(<Heading>Won games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': theme.font.sizes.large
    })
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xxlarge,
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
