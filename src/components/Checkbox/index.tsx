import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
}

const Checkbox = ({ label, labelFor = '', labelColor }: CheckboxProps) => (
  <S.Wrapper>
    <input type="checkbox" id={labelFor} />
    {!!label && (
      <S.Label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
