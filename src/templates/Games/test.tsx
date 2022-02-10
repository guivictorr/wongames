import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

const mocks = [
  {
    request: {
      query: QUERY_GAMES,
      variables: { limit: 15, start: 0 }
    },
    result: {
      data: {
        games: [
          {
            name: 'RimWorld',
            slug: 'rimworld',
            cover: {
              url: '/uploads/rimworld_8e93acc963.jpg'
            },
            developers: [{ name: 'Ludeon Studios' }],
            price: 65.99,
            __typename: 'Game'
          }
        ]
      }
    }
  }
]

describe('<Games />', () => {
  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByText('RimWorld')).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: 'Show more' })
    ).toBeInTheDocument()
  })
})
