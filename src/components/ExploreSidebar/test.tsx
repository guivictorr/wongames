import { screen, render } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'

import ExploreSidebar from '.'

import itemsMock from './mock'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    render(<ExploreSidebar onFilter={jest.fn} items={itemsMock} />)

    expect(screen.getByRole('heading', { name: /price/i }))
    expect(screen.getByRole('heading', { name: /sort by/i }))
    expect(screen.getByRole('heading', { name: /platforms/i }))
    expect(screen.getByRole('heading', { name: /genre/i }))
  })

  it('should render inputs', () => {
    render(<ExploreSidebar onFilter={jest.fn} items={itemsMock} />)

    expect(screen.getByRole('checkbox', { name: /under \$50/i }))
    expect(screen.getByRole('radio', { name: /low to high/i }))
  })

  it('should render a filter button', () => {
    render(<ExploreSidebar onFilter={jest.fn} items={itemsMock} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should render with initial values ', () => {
    render(
      <ExploreSidebar
        onFilter={jest.fn}
        items={itemsMock}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high'
        }}
      />
    )

    expect(screen.getByLabelText(/windows/i)).toBeChecked()
    expect(screen.getByLabelText(/low to high/i)).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()
    render(
      <ExploreSidebar
        items={itemsMock}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high'
        }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toHaveBeenCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()
    render(<ExploreSidebar items={itemsMock} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    expect(onFilter).toHaveBeenCalledTimes(4)

    expect(onFilter).toHaveBeenCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })

    expect(screen.getByLabelText(/windows/i)).toBeChecked()
    expect(screen.getByLabelText(/linux/i)).toBeChecked()

    expect(screen.getByLabelText(/low to high/i)).toBeChecked()
  })

  it('should altern between radio options', () => {
    const onFilter = jest.fn()
    render(<ExploreSidebar items={itemsMock} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/high to low/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    expect(onFilter).toHaveBeenCalledTimes(3)

    expect(onFilter).toHaveBeenCalledWith({
      sort_by: 'low-to-high'
    })
  })

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = render(
      <ExploreSidebar items={itemsMock} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))
  })
})
