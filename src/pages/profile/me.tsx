import { initializeApollo } from 'api/apollo'
import FormProfile, { FormProfileProps } from 'components/FormProfile'
import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
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

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })
  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email
    }
  }
}
