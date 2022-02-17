import { screen, render, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = render(
      <Checkbox label="checkbox label" labelFor="check" />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<Checkbox />)
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    render(<Checkbox label="checkbox label" labelFor="check" />)
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render with white label', () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="white" />
    )
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    render(<Checkbox onCheck={onCheck} label="Checkbox" />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    render(<Checkbox onCheck={onCheck} label="Checkbox" isChecked />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', async () => {
    render(<Checkbox label="Checkbox" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
