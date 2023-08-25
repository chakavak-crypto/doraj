import type {Meta, StoryObj} from '@storybook/react';

import PasswordInput from "./PasswordInput";

const meta = {
  title: 'Component/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {},
}
satisfies
Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
};