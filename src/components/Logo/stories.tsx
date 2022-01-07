import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Branding/Logo',
  component: Logo,
  args: {
    id: 'logo'
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
