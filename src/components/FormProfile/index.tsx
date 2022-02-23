import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
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
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        label="Password"
      />
      <TextField
        name="new-password"
        type="password"
        placeholder="New password"
        label="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
