import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { Settings } from 'react-slick'
import Slider, { SliderProps } from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story<SliderProps> = (args) => (
  <Slider settings={args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
    <Slide>9</Slide>
    <Slide>10</Slide>
  </Slider>
)
Horizontal.args = settings

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  ...settings,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story<SliderProps> = (args) => (
  <Slider settings={args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
    <Slide>9</Slide>
    <Slide>10</Slide>
  </Slider>
)
Vertical.args = verticalSettings
