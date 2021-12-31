import SlickSlider, { Settings } from 'react-slick'
import * as S from './styles'

export type SliderProps = {
  children: React.ReactNode
  settings: Settings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
