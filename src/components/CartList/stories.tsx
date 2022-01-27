import { Story, Meta } from '@storybook/react/types-6-0'
import { CardsListProps } from 'components/CardsList'
import CartList, { CartListProps } from '.'

import mockItems from './mock'

export default {
  title: 'Payment/CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<CardsListProps>

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)
