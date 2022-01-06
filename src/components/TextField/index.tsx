import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  icon?: JSX.Element
  initialValue?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  initialValue = '',
  label = '',
  labelFor = '',
  onInput,
  icon,
  iconPosition,
  disabled,
  error,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper error={error} disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...rest}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
