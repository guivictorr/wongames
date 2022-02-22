import { GetServerSideProps } from 'next'
import CardsList, { CardsListProps } from 'components/CardsList'
import Profile from 'templates/Profile'

import cardsMock from 'components/PaymentOptions/mock'
import protectedRoutes from 'utils/protected-routes'

function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps<CardsListProps> = async (
  context
) => {
  const session = await protectedRoutes(context)

  return {
    props: {
      session,
      cards: cardsMock
    }
  }
}

export default ProfileCards
