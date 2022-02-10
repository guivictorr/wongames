import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Base from 'templates/Base'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import useQueryGames from 'hooks/useQueryGames'

export type GamesProps = {
  filterItems: ItemProps[]
}

const Games = ({ filterItems }: GamesProps) => {
  const { data, fetchMore } = useQueryGames({
    variables: { limit: 15, start: 0 }
  })
  const handleShowmore = () => {
    return fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }
  const handleFilter = () => {
    return
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

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

          <S.Showmore role="button" onClick={handleShowmore}>
            <p>Show more</p>
            <ArrowDown size={35} />
          </S.Showmore>
        </section>
      </S.Main>
    </Base>
  )
}

export default Games
