import { Story, Meta } from '@storybook/react/types-6-0'
import { Message } from 'styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
WithIcon.args = {
  icon: <Message />
}
export const Disabled: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
Disabled.args = {
  disabled: true
}
export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
WithError.args = {
  ...WithIcon.args,
  error: 'Invalid email'
}
