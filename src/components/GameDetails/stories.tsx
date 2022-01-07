import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import gameDetailsMock from './mock'

export default {
  title: 'Data display/GameDetails',
  component: GameDetails,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: gameDetailsMock.platforms
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: gameDetailsMock.genres
      }
    },
    releaseDate: {
      control: {
        type: 'date'
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: gameDetailsMock
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '140rem', margin: 'auto' }}>
    <GameDetails {...args} />
  </div>
)
