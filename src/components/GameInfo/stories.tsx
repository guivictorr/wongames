import { Story, Meta } from '@storybook/react'
import { CartContextData } from 'hooks/useCart'
import GameInfo, { GameInfoProps } from '.'
import gameInfoMock from './mock'

export default {
  title: 'Data display/GameInfo',
  component: GameInfo,
  args: gameInfoMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

export const IsInCart: Story<GameInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
IsInCart.args = {
  isInCart: () => true
}
