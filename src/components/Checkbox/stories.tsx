import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox labelFor="action" label="Action" isChecked {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox labelFor="adventure" label="Adventure" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox labelFor="strategy" label="Strategy" {...args} />
    </div>
  </>
)
