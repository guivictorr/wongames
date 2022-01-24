import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import Base from 'templates/Base'

import * as S from './styles'

export type ProfileProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileProps) => (
  <Base>
    <Container>
      <Heading line="left" lineColor="secondary">
        My account
      </Heading>

      <S.Main>
        <ProfileMenu />
        <S.Content>{children}</S.Content>
      </S.Main>
    </Container>
  </Base>
)

export default Profile
