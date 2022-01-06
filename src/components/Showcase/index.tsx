import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type ShowcaseProps = {
  heading?: string
  highlight?: HighlightProps
  gameCardSliderItems?: GameCardProps[]
}

const Showcase = ({
  gameCardSliderItems,
  heading,
  highlight
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!heading && (
      <Heading line="left" lineColor="secondary">
        {heading}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!gameCardSliderItems && <GameCardSlider items={gameCardSliderItems} />}
  </S.Wrapper>
)

export default Showcase
