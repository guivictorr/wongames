import { screen, render } from 'utils/test-utils'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    const { container } = render(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('New password')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
