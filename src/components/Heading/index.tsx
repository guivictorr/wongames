import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  line?: 'left' | 'bottom'
}

const Heading = ({ children, ...rest }: HeadingProps) => (
  <S.Wrapper {...rest}>{children}</S.Wrapper>
)

export default Heading
