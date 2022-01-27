import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the title', () => {
    renderWithTheme(<Dropdown title="title">content</Dropdown>)

    expect(screen.getByText('title')).toBeInTheDocument()
  })

  it('should render with dropdown closed', () => {
    renderWithTheme(<Dropdown title="title">content</Dropdown>)

    expect(screen.queryByText('content')).toHaveStyle({ opacity: 0 })
    expect(screen.queryByText('content')).toHaveAttribute('aria-hidden', 'true')
  })

  it('should open the dropdown when click on the title', () => {
    renderWithTheme(<Dropdown title="title">content</Dropdown>)

    userEvent.click(screen.getByText('title'))

    expect(screen.queryByText('content')).toHaveStyle({ opacity: 1 })
    expect(screen.queryByText('content')).toHaveAttribute(
      'aria-hidden',
      'false'
    )
  })
})
