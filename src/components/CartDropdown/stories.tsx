import { Story, Meta } from '@storybook/react'
import CartDropdown from '.'

import items from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
Default.args = {
  cartContextValue: { items, quantity: 2 }
}

export const EmptyCart: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)
