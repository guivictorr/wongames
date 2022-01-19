import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'
import cards from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should render select card when clicking on the label', async () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    userEvent.click(screen.getByLabelText(/4325/))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/i })).toBeChecked()
    })
  })

  it('should enable buy now button when select a credit card', async () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByRole('button', { name: /buy now/i })).toBeDisabled()
    userEvent.click(screen.getByLabelText(/4325/))
    expect(screen.getByRole('button', { name: /buy now/i })).not.toBeDisabled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const mockFunction = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={mockFunction} />
    )

    userEvent.click(screen.getByLabelText(/4325/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(mockFunction).toHaveBeenCalled()
  })

  it('should not call handlePayment when credit card is not selected', async () => {
    const mockFunction = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={mockFunction} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(mockFunction).not.toHaveBeenCalled()
    })
  })
})
