import Button from 'components/Button'
import {
  FormError,
  FormLoading,
  FormSuccess,
  FormWrapper
} from 'components/Form'
import TextField from 'components/TextField'
import { FormEvent, useState } from 'react'
import { CheckCircleOutline, Email } from 'styled-icons/material-outlined'
import { FieldErrors, forgotValidate } from 'utils/validators'

const FormForgotPassword = () => {
  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    identifier: ''
  })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setFormError('')

    const errors = forgotValidate({ email: values.identifier })

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setLoading(false)
      return
    }

    setFieldErrors({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: values.identifier })
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }
  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && <FormError>{formError}</FormError>}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              error={fieldErrors?.email}
              onInputChange={(value) => handleInput('identifier', value)}
              icon={<Email />}
            />
            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <FormLoading /> : 'Send email'}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
