import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'Buy now'
}
export const Icon: Story<ButtonProps> = (args) => <Button {...args} />
Icon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
}
export const Link: Story<ButtonProps> = (args) => <Button {...args} />
Link.args = {
  children: 'Buy now',
  as: 'a',
  size: 'large',
  href: '/link'
}
export const Minimal: Story<ButtonProps> = (args) => <Button {...args} />
Minimal.args = {
  ...Icon.args,
  minimal: true
}
