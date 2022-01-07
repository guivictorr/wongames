import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Heading'
}
