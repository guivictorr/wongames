import Home from 'templates/Home'
import { HomeTemplateProps } from '../templates/Home'

import cardSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { GetStaticProps } from 'next'
import { initializeApollo } from 'api/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

const apollo = initializeApollo()

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apollo.query<QueryHome>({ query: QUERY_HOME })

  return {
    revalidate: 60,
    props: {
      banners: data.banners.map((banner) => ({
        title: banner.title,
        subtitle: banner.subtitle,
        img: `http://localhost:1337${banner.image?.src}`,
        ...(banner.button && {
          buttonLabel: banner.button.label,
          buttonLink: banner.button.link
        }),
        ...(banner.ribbon && {
          ribbon: banner.ribbon.title,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGames: cardSliderMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: cardSliderMock,
      upcomingGames: cardSliderMock,
      upcomingMoreGames: cardSliderMock,
      upcomingHighlight: highlightMock,
      freeGames: cardSliderMock,
      freeHighlight: highlightMock
    }
  }
}
