import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import itemsMock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: itemsMock
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<ExploreSidebarProps>

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)
