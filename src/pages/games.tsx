import { GetServerSideProps } from 'next'
import Games, { GamesProps } from 'templates/Games'

import gamesMock from 'components/GameCardSlider/mock'

function GamesPage(props: GamesProps) {
  return <Games {...props} />
}

export const getServerSideProps: GetServerSideProps<GamesProps> = async () => {
  return {
    props: {
      games: gamesMock
    }
  }
}

export default GamesPage
