import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Link from 'next/link'
import * as S from './styles'

export type FormProfileProps = {
  username: string
  email: string
}

const FormProfile = ({ email, username }: FormProfileProps) => (
  <>
    <Heading line="bottom" size="small" color="black">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />
      <TextField
        name="email"
        type="email"
        placeholder="Email"
        label="Email"
        initialValue={email}
        disabled
      />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset Password
          </Button>
        </Link>
        <Button size="large">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </>
)

export default FormProfile
