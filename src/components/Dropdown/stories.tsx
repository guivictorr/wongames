import { Story, Meta } from '@storybook/react'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<DropdownProps>

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />
Default.args = {
  title: 'Dropdown',
  children: 'Dropdown content'
}
