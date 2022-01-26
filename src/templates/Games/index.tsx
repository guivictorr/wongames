import { GameCardProps } from 'components/GameCard'
import * as S from './styles'

export type GamesProps = {
  games?: GameCardProps[]
}

const Games = ({ games = [] }: GamesProps) => (
  <S.Wrapper>
    {games.map((game) => (
      <h1 key={game.title}>{game.title}</h1>
    ))}
  </S.Wrapper>
)

export default Games
