import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render black label when color black is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a normal size logo by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem'
    })
  })

  it('should render a bigger logo when size large is passed', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem'
    })
  })

  it('should render a logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)

    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: '(max-width: 768px)' }
    )
  })

  it('should render the logo with id', () => {
    renderWithTheme(<Logo id="myId" />)

    expect(document.querySelector('#myId')).toBeInTheDocument()
  })
})
