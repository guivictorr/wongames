import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import mockItems from './mock'

import Gallery from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({
      opacity: 0
    })

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({
      opacity: 1
    })
  })

  it('should open modal with the correct image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    )

    const img = await screen.findByAltText(/Gallery Image 2/i)
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )

    fireEvent.click(screen.getByLabelText(/close modal/i))
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({
      opacity: 0
    })
  })

  it('should handle close modal when click esc', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )

    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({
      opacity: 0
    })
  })
})
