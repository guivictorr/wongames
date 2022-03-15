import FormForgotPassword from 'components/FormForgotPassword'
import Auth from 'templates/Auth'

function ForgotPassword() {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  )
}

export default ForgotPassword
