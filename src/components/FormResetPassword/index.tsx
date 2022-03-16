import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { Lock } from 'styled-icons/material-outlined'

import Button from 'components/Button'
import { FormError, FormLoading, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { FieldErrors, resetValidate } from 'utils/validators'

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    password: '',
    confirm_password: ''
  })
  const [loading, setLoading] = useState(false)
  const { query, push } = useRouter()

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

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: query.code,
          password: values.password,
          passwordConfirmation: values.confirm_password
        })
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      push('/sign-in')
    }
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
