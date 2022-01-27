import { GetServerSideProps } from 'next'
import Games, { GamesProps } from 'templates/Games'

import gamesMock from 'components/GameCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

function GamesPage(props: GamesProps) {
  return <Games {...props} />
}

export const getServerSideProps: GetServerSideProps<GamesProps> = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}

export default GamesPage
