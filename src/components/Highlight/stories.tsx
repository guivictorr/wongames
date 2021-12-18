import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red dead redemption 2',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/read-dead-float.jpg'
  },
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
