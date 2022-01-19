import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading line="bottom" size="small" color="black">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="name"
        initialValue="Wongames"
      />
      <TextField
        name="email"
        type="email"
        placeholder="Email"
        label="Email"
        initialValue="Wongames@email.com"
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
  </S.Wrapper>
)

export default FormProfile
