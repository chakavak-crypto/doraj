import type {StoryObj} from '@storybook/react';

import CkkThemeSwitch from "./CkkThemeSwitch";

const meta = {
  title: 'Component/CkkThemeSwitch',
  component: CkkThemeSwitch,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    defaultChecked: false
  },
};

export const Dark: Story = {
  args: {
    defaultChecked: true
  },
};