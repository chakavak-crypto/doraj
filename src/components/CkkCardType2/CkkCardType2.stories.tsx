import type {Meta, StoryObj} from '@storybook/react';

import CkkCardType2 from "./CkkCardType2";

const meta = {
  title: 'Component/CkkCardType2',
  component: CkkCardType2,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};