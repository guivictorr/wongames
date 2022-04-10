import Success, { SuccessTemplateProps } from 'templates/Success'

import { initializeApollo } from 'api/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gameSliderMapper, highlightMapper } from 'utils/mappers'

export default function SuccessPage(props: SuccessTemplateProps) {
  return <Success {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    revalidate: 60 * 60,
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gameSliderMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
