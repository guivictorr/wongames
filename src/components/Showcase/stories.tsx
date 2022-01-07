import { Story, Meta } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'
import cardSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default {
  title: 'Data display/Showcase',
  component: Showcase,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />
Default.args = {
  heading: 'Title',
  highlight: highlightMock,
  gameCardSliderItems: cardSliderMock
}
export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)
WithoutTitle.args = {
  ...Default.args,
  heading: ''
}
export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)
WithoutHighlight.args = {
  ...Default.args,
  highlight: undefined
}
export const WithoutSlider: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)
WithoutSlider.args = {
  ...Default.args,
  gameCardSliderItems: undefined
}
