import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

import OrdersList, { OrdersListProps } from 'components/OrdersList'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'api/apollo'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { ordersMapper } from 'utils/mappers'

function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id as string
    },
    fetchPolicy: 'no-cache'
  })
  return {
    props: {
      session,
      items: ordersMapper(data.orders)
    }
  }
}

export default ProfileCards
