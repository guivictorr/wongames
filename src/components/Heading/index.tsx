import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  line?: 'left' | 'bottom'
  size?: 'small' | 'medium' | 'huge'
  lineColor?: LineColors
}

const Heading = ({ children, ...rest }: HeadingProps) => (
  <S.Wrapper {...rest}>{children}</S.Wrapper>
)

export default Heading
