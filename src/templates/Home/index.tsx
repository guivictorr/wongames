import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading line="left" lineColor="secondary" color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading line="left" lineColor="secondary">
        Most popular
      </Heading>
    </Container>

    <Container>
      <Heading line="left" lineColor="secondary">
        Upcoming
      </Heading>
    </Container>

    <Container>
      <Heading line="left" lineColor="secondary">
        Free games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
