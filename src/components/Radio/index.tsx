import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (status?: RadioValue) => void
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  isChecked?: boolean
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  onCheck,
  label,
  labelFor = '',
  labelColor,
  value,
  ...rest
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={labelFor}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
