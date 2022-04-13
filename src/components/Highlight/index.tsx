import Button from 'components/Button'
import Image from 'next/image'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'left' | 'right'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  floatImage,
  backgroundImage,
  ...props
}: HighlightProps) => (
  <S.Wrapper {...props}>
    <Image src={backgroundImage} alt={title} layout="fill" />
    {!!floatImage && (
      <S.FloatImage>
        <Image src={floatImage} alt={title} layout="fill" />
      </S.FloatImage>
    )}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
