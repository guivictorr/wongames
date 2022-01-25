import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

import itemsMock from './mock'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} />)

    expect(screen.getByRole('heading', { name: /price/i }))
    expect(screen.getByRole('heading', { name: /sort by/i }))
    expect(screen.getByRole('heading', { name: /system/i }))
    expect(screen.getByRole('heading', { name: /genre/i }))
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} />)

    expect(screen.getByRole('checkbox', { name: /under \$50/i }))
    expect(screen.getByRole('radio', { name: /low to high/i }))
  })

  it('should render a filter button', () => {
    renderWithTheme(<ExploreSidebar items={itemsMock} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
})
