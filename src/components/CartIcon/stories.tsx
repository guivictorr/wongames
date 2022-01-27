import { Story, Meta } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'Data display/CartIcon',
  component: CartIcon,
  args: {
    quantity: 12
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<CartIconProps>

export const Default: Story<CartIconProps> = (args) => <CartIcon {...args} />
