import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Message } from 'styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="Label" labelFor="field" id="field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)
    expect(screen.getByPlaceholderText(/hey you/i)).toBeInTheDocument()
  })

  it('should change the value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="Label"
        labelFor="textfield"
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
    renderWithTheme(
      <TextField labelFor="textfield" label="Textfield" id="textfield" />
    )
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render with icon', () => {
    renderWithTheme(
      <TextField
        labelFor="textfield"
        label="Textfield"
        id="textfield"
        icon={<Message data-testid="icon" />}
      />
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render icon on the right side', () => {
    renderWithTheme(
      <TextField iconPosition="right" icon={<Message data-testid="icon" />} />
    )

    expect(screen.getByRole('textbox').parentElement).toHaveStyle({
      'flex-direction': 'row-reverse'
    })
  })

  it('should not change the value when is disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="Label"
        labelFor="textfield"
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
    renderWithTheme(
      <TextField
        disabled
        labelFor="textfield"
        label="Textfield"
        id="textfield"
      />
    )
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })
})
