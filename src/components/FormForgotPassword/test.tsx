import 'server.mock'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import FormForgotPassword from '.'

let query = {}
// eslint-disable-next-line @typescript-eslint/no-var-requires
const routerMock = jest.spyOn(require('next/router'), 'useRouter')

routerMock.mockImplementation(() => ({
  query
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

  it('should validate the email', async () => {
    render(<FormForgotPassword />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'valid@gmail.com')

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(
      await screen.findByText(/You just received an email!/i)
    ).toBeInTheDocument()
  })

  it('should show an invalid email', async () => {
    render(<FormForgotPassword />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(
      await screen.findByText(/must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show error if email does not exist', async () => {
    render(<FormForgotPassword />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'fail@gmail.com')

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(
      await screen.findByText(/this email does not exist/i)
    ).toBeInTheDocument()
  })

  it('should autofill if comes via logged user', async () => {
    query = { email: 'valid@gmail.com' }
    render(<FormForgotPassword />)
    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('valid@gmail.com')

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(
      await screen.findByText(/You just received an email!/i)
    ).toBeInTheDocument()
  })
})
