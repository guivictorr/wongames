import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { useMutation } from '@apollo/client'
import { signIn } from 'next-auth/client'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form'
import {
  MutationRegister,
  MutationRegisterVariables
} from 'graphql/generated/MutationRegister'
import { FieldErrors, signUpValidate } from 'utils/validators'

const FormSignUp = () => {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
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
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
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
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})

    createUser({
      variables: {
        input: values
      }
    })
  }

  return (
    <FormWrapper>
      {!!formError && <FormError>{formError}</FormError>}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="name"
          error={fieldErrors?.username}
          onInputChange={(value) => handleInput('username', value)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldErrors?.email}
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />
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
