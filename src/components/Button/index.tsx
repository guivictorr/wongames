import * as S from './styles'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, icon, ...props }: ButtonProps) => (
  <S.Wrapper hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
