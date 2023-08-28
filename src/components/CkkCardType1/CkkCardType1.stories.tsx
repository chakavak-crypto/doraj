import type {Meta, StoryObj} from '@storybook/react';

import CkkCardType1 from "./CkkCardType1";

const meta = {
  title: 'Component/CkkCardType1',
  component: CkkCardType1,
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