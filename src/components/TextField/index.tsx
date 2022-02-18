import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  icon?: JSX.Element
  initialValue?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  initialValue = '',
  label = '',
  onInputChange,
  icon,
  iconPosition,
  disabled,
  name,
  error,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper error={error} disabled={disabled}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...rest}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
