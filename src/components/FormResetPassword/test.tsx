import { render, screen } from 'utils/test-utils'
import FormResetPassword from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() }))
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
})
