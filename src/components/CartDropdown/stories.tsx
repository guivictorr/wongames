import { Story, Meta } from '@storybook/react'
import CartDropdown, { CartDropdownProps } from '.'

import itemsMock from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: itemsMock,
    total: 'R$ 330,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<CartDropdownProps>

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
export const EmptyCart: Story<CartDropdownProps> = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)
