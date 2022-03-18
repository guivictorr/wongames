import 'server.mock'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'
import FormResetPassword from '.'

let query = {}
const push = jest.fn()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const routerMock = jest.spyOn(require('next/router'), 'useRouter')

routerMock.mockImplementation(() => ({
  query,
  push
}))

describe('<FormResetPassword />', () => {
  it('should render the form', () => {
    const { container } = render(<FormResetPassword />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /redefine password/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should show error if passwords does not match', async () => {
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '123')
    userEvent.type(screen.getByPlaceholderText(/confirm password/i), '321')

    userEvent.click(screen.getByRole('button', { name: /redefine password/i }))

    expect(
      await screen.findByText(/confirm password does not match with password/i)
    ).toBeInTheDocument()
  })

  it('should show error when code provided is wrong', async () => {
    query = { code: 'wrong' }
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '123')
    userEvent.type(screen.getByPlaceholderText(/confirm password/i), '123')

    userEvent.click(screen.getByRole('button', { name: /redefine password/i }))

    expect(await screen.findByText(/This code is invalid/i)).toBeInTheDocument()
  })

  it('should reset password and signin if is all valid', async () => {
    query = { code: 'valid' }
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '123')
    userEvent.type(screen.getByPlaceholderText(/confirm password/i), '123')

    userEvent.click(screen.getByRole('button', { name: /redefine password/i }))

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/sign-in')
    })
  })
})
