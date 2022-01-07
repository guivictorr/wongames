import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        labelFor="primeiro"
        label="Primeiro"
        value="primeiro"
        id="primeiro"
        name="nome"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        labelFor="segundo"
        label="Segundo"
        value="segundo"
        id="segundo"
        name="nome"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        labelFor="terceiro"
        label="Terceiro"
        value="terceiro"
        id="terceiro"
        name="nome"
        {...args}
      />
    </div>
  </>
)
