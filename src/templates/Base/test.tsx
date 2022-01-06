import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: () => <div data-testid="Footer mock" />
}))
jest.mock('components/Menu', () => ({
  __esModule: true,
  default: () => <div data-testid="Menu mock" />
}))

describe('<Base />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId('Menu mock')).toBeInTheDocument()
    expect(screen.getByTestId('Footer mock')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })
})
