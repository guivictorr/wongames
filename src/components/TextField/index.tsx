import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  icon?: JSX.Element
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  initialValue,
  label = '',
  labelFor = '',
  onInput,
  icon,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input type="text" onChange={onChange} value={value} {...rest} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
