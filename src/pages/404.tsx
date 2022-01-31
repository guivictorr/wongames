import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

function NotFoundPage() {
  return (
    <Base>
      <Container>
        <Empty
          title="404 Not found"
          description="Ops... this page does not exist. Go back to the store and enjoy our offers "
        />
      </Container>
    </Base>
  )
}

export default NotFoundPage
