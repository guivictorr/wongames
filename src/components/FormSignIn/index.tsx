import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Email, Lock } from 'styled-icons/material-outlined'
import { signIn } from 'next-auth/client'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLink, FormWrapper, FormLoading } from 'components/Form'

import * as S from './styles'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(value) => handleInput('identifier', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInput('password', value)}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : 'Sign in now'}
        </Button>

        <FormLink>
          Don&apos;t have an account{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
