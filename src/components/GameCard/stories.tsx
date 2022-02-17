import { Story, Meta } from '@storybook/react'
import { CartContextData } from 'hooks/useCart'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'Data display/GameCard',
  component: GameCard,
  argTypes: {
    onFavorite: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  args: {
    title: 'Super Mario Odyssey',
    developer: 'Nintendo',
    img: 'https://source.unsplash.com/random',
    price: 50.0,
    slug: 'super-mario-odyssey'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
IsInCart.args = {
  isInCart: () => true
}

export const Promotional: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
Promotional.args = {
  promotionalPrice: 25.0
}

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
WithRibbon.args = {
  ribbon: '20% OFF'
}
