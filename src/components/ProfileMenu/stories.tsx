import { Story, Meta } from '@storybook/react'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'Navigation/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)
