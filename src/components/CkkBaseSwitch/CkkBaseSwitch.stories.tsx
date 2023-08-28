import type {Meta, StoryObj} from '@storybook/react';

import CkkBaseSwitch from "./CkkBaseSwitch";

const meta = {
  title: 'Component/CkkBaseSwitch',
  component: CkkBaseSwitch,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    rightColor: 'red'
  },
};

export const Dark: Story = {
  args: {
    rightColor: 'red'
  },
};