import FormProfile from 'components/FormProfile'
import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

function Me() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export default Me

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  return {
    props: {
      session
    }
  }
}
