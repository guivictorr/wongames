import { Story, Meta } from '@storybook/react'
import GameDetails from '.'

export default {
  title: 'Data display/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '140rem', margin: 'auto' }}>
    <GameDetails platforms={['linux', 'windows', 'mac']} />
  </div>
)
