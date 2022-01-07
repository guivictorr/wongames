import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'Data display/GameDetails',
  component: GameDetails,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['mac', 'windows', 'linux']
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    platforms: ['mac', 'windows', 'linux']
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '140rem', margin: 'auto' }}>
    <GameDetails {...args} />
  </div>
)
