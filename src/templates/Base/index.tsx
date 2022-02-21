import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { useSession } from 'next-auth/client'
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const [session] = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} />
      </Container>
      <S.Content>{children}</S.Content>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
