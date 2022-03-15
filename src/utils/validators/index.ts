import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

const fieldValidators = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'confirm password does not match with password'
    })
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldValidators)
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(errorObject: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (errorObject.error) {
    errorObject.error.details.forEach((detail) => {
      errors[detail.path.join('.')] = detail.message
    })
  }

  return errors
}

type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>
export function signInValidate(values: SignInValues) {
  const { email, password } = fieldValidators

  const schema = Joi.object<SignInValues>({ email, password })
  const validation = schema.validate(values, { abortEarly: false })
  return getFieldErrors(validation)
}

type ForgotValidateParams = Pick<UsersPermissionsRegisterInput, 'email'>
export function forgotValidate(values: ForgotValidateParams) {
  const { email } = fieldValidators

  const schema = Joi.object({ email })
  const validation = schema.validate(values, { abortEarly: false })
  return getFieldErrors(validation)
}

type ResetValidateParams = {
  password: string
  confirm_password: string
}
export function resetValidate(values: ResetValidateParams) {
  const { password, confirm_password } = fieldValidators

  const schema = Joi.object({ password, confirm_password })
  const validation = schema.validate(values, { abortEarly: false })
  return getFieldErrors(validation)
}
