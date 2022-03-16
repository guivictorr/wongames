import { render, screen } from 'utils/test-utils'
import FormForgotPassword from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn(), query: { email: 'email' } }))
}))

describe('<FormForgotPassword />', () => {
  it('should render the form', () => {
    const { container } = render(<FormForgotPassword />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send email/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
