import Button from 'components/Button'
import { FormError, FormLoading, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { Lock } from 'styled-icons/material-outlined'
import { FieldErrors, resetValidate } from 'utils/validators'

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    password: '',
    confirm_password: ''
  })
  const [loading, setLoading] = useState(false)
  const { push, query } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setFormError('')

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setLoading(false)
      return
    }

    setFieldErrors({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)

    setFormError('username or password is invalid')
  }
  return (
    <FormWrapper>
      {!!formError && <FormError>{formError}</FormError>}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          onInputChange={(value) => handleInput('password', value)}
          placeholder="Password"
          type="password"
          error={fieldErrors?.password}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          error={fieldErrors?.confirm_password}
          onInputChange={(value) => handleInput('confirm_password', value)}
          type="password"
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : 'Redefine password'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
