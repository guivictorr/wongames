import Button from 'components/Button'
import { FormError, FormLoading, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { Email } from 'styled-icons/material-outlined'
import { FieldErrors } from 'utils/validators'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    identifier: ''
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

    const errors = {} // validate after

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
          name="email"
          placeholder="Email"
          type="email"
          error={fieldErrors?.email}
          onInputChange={(value) => handleInput('identifier', value)}
          icon={<Email />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : 'Send email'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
