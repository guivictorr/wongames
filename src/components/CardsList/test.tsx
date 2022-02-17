import { screen, render } from 'utils/test-utils'

import cardsMock from 'components/PaymentOptions/mock'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    const { container } = render(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
