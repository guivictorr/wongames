import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  img: string
}

const Banner = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  img
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
