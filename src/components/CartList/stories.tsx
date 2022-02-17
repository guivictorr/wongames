import { Story, Meta } from '@storybook/react/types-6-0'
import CartList from '.'

import items from './mock'

export default {
  title: 'Payment/CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
Default.args = {
  cartContextValue: { items },
  total: 'R$ 330,00'
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)
WithButton.args = {
  ...Default.args
}

export const EmptyCart: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
