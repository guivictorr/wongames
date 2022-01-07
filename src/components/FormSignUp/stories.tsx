import { Story, Meta } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

export const Default: Story = () => (
  <div style={{ width: '36rem', margin: '0 auto' }}>
    <FormSignUp />
  </div>
)
