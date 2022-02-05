import Home from 'templates/Home'
import { HomeTemplateProps } from '../templates/Home'

import { GetStaticProps } from 'next'
import { initializeApollo } from 'api/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gameSliderMapper, highlightMapper } from 'utils/mapper'

const apollo = initializeApollo()

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { banners, newGames, freeGames, upcomingGames, sections }
  } = await apollo.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { limit: 8, today: new Date().toISOString() }
  })

  return {
    revalidate: 60,
    props: {
      freeGamesTitle: sections?.freeGames && sections.freeGames.title,
      mostPopularGamesTitle:
        sections?.popularGames && sections.popularGames.title,
      newGamesTitle: sections?.newGames && sections.newGames.title,
      upcomingGamesTitle:
        sections?.upcomingGames && sections.upcomingGames.title,
      banners: bannerMapper(banners),
      newGames: gameSliderMapper(newGames),
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gameSliderMapper(sections?.popularGames?.games),
      upcomingGames: gameSliderMapper(upcomingGames),
      upcomingMoreGames: gameSliderMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGames: gameSliderMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
