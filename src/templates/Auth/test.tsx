import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render logos, title, subtitle and children', () => {
    renderWithTheme(<Auth title="Sign In">children</Auth>)

    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/children/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /won is the best and mos complete gaming platform/i
      })
    ).toBeInTheDocument()
  })
})
