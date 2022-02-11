import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Base from 'templates/Base'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'

import * as S from './styles'
import useQueryGames from 'hooks/useQueryGames'
import { useRouter } from 'next/router'
import {
  parseQueryStringToFilter,
  parseQueryStringToWhere
} from 'utils/filter-parser'
import { ParsedUrlQueryInput } from 'querystring'

export type GamesProps = {
  filterItems: ItemProps[]
}

const Games = ({ filterItems }: GamesProps) => {
  const { push, query } = useRouter()

  const { data, fetchMore, loading } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>loading...</p>

  const hasMoreGmaes =
    data?.games.length < (data?.gamesConnection?.values?.length || 0)

  const handleShowmore = () => {
    return fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }
  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {data?.games.length ? (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover?.url}`}
                  price={game.price}
                  slug={game.slug}
                  title={game.name}
                />
              ))}
            </Grid>

            {hasMoreGmaes && (
              <S.ShowMore role="button" onClick={handleShowmore}>
                {loading ? (
                  <S.ShowMoreLoading
                    src="img/dots.svg"
                    alt="Loading more games..."
                  />
                ) : (
                  <S.ShowMoreButton>
                    <p>Show more</p>
                    <ArrowDown size={35} />
                  </S.ShowMoreButton>
                )}
              </S.ShowMore>
            )}
          </section>
        ) : (
          <Empty title=":(" description="We didn't find any games" />
        )}
      </S.Main>
    </Base>
  )
}

export default Games
