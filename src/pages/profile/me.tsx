import { initializeApollo } from 'api/apollo'
import FormProfile, { FormProfileProps } from 'components/FormProfile'
import {
  QueryProfileMe,
  QueryProfileMeVariables
} from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export default Me

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session)
    return {
      props: {}
    }

  const { data } = await apolloClient.query<
    QueryProfileMe,
    QueryProfileMeVariables
  >({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: session?.id as string
    }
  })
  return {
    props: {
      session,
      username: data.user?.username,
      email: data.user?.email
    }
  }
}
