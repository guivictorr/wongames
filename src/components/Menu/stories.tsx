import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Structure/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<MenuProps>

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />
Logged.args = {
  username: 'John'
}
