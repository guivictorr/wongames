import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { useMutation } from '@apollo/client'
import { signIn } from 'next-auth/client'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink, FormLoading } from 'components/Form'
import {
  MutationRegister,
  MutationRegisterVariables
} from 'graphql/generated/MutationRegister'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    password: '',
    username: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  const [createUser, { loading, error }] = useMutation<
    MutationRegister,
    MutationRegisterVariables
  >(MUTATION_REGISTER, {
    onError: (err) => console.error(err),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          identifier: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    createUser({
      variables: {
        input: values
      }
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="name"
          onInputChange={(value) => handleInput('username', value)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          onInputChange={(value) => handleInput('password', value)}
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : 'Sign up now'}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
