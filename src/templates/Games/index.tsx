import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import Base from 'templates/Base'
import * as S from './styles'

import { Grid } from 'components/Grid'

export type GamesProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ games = [], filterItems }: GamesProps) => {
  const handleShowmore = () => {
    return
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
            {games.map((game) => (
              <GameCard {...game} key={game.title} />
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
