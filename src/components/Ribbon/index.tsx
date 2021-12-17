import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'small' | 'normal'

export type RibbonProps = {
  color?: RibbonColors
  size?: RibbonSizes
  children: React.ReactNode
}

const Ribbon = ({ children, ...props }: RibbonProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Ribbon
