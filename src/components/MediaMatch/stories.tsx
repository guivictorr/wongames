import { Story, Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'Utils/MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on desktop</MediaMatch>
)

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
