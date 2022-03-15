import FormResetPassword from 'components/FormResetPassword'
import Auth from 'templates/Auth'

function ForgotPassword() {
  return (
    <Auth title="Redefine your password">
      <FormResetPassword />
    </Auth>
  )
}

export default ForgotPassword
