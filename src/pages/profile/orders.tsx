import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

import itemsMock from 'components/OrdersList/mock'
import OrdersList, { OrdersListProps } from 'components/OrdersList'
import protectedRoutes from 'utils/protected-routes'

function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  return {
    props: {
      session,
      items: itemsMock
    }
  }
}

export default ProfileCards
