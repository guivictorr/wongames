import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import args from './mock'

export default {
  title: 'Data display/Highlight',
  component: Highlight,
  args,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
)
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
