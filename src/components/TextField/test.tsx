import { screen, render, waitFor } from 'utils/test-utils'

import userEvent from '@testing-library/user-event'
import { Message } from 'styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    render(<TextField label="Label" name="label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render without label', () => {
    render(<TextField />)
    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextField placeholder="hey you" />)
    expect(screen.getByPlaceholderText(/hey you/i)).toBeInTheDocument()
  })

  it('should change the value when typing', async () => {
    const onInput = jest.fn()
    render(
      <TextField
        onInputChange={onInput}
        label="Label"
        name="textfield"
        id="textfield"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This text should be written'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be accessible by tab', () => {
    render(<TextField name="textfield" label="Textfield" id="textfield" />)
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render with icon', () => {
    render(
      <TextField
        name="textfield"
        label="Textfield"
        id="textfield"
        icon={<Message data-testid="icon" />}
      />
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render icon on the right side', () => {
    render(
      <TextField iconPosition="right" icon={<Message data-testid="icon" />} />
    )

    expect(screen.getByRole('textbox').parentElement).toHaveStyle({
      'flex-direction': 'row-reverse'
    })
  })

  it('should not change the value when is disabled', async () => {
    const onInput = jest.fn()
    render(
      <TextField
        onInputChange={onInput}
        label="Label"
        name="textfield"
        id="textfield"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This text should be written'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('should not be accessible by tab when is disabled', () => {
    render(
      <TextField disabled name="textfield" label="Textfield" id="textfield" />
    )
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })

  it('should render error message and change style', () => {
    const { container } = render(
      <TextField
        disabled
        name="textfield"
        label="Textfield"
        id="textfield"
        error="Error message"
      />
    )
    expect(screen.getByText(/error message/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
