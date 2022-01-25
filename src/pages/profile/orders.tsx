import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

import itemsMock from 'components/OrdersList/mock'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps<OrdersListProps> =
  async () => {
    return {
      props: {
        items: itemsMock
      }
    }
  }

export default ProfileCards
