import { Story, Meta } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'Data display/CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = (args) => <CartIcon {...args} />
export const WithIcon: Story = (args) => <CartIcon {...args} />
WithIcon.args = {
  quantity: 3
}
