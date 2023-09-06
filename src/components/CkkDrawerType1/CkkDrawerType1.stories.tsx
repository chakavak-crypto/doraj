import type {StoryObj} from '@storybook/react';

import CkkDrawerType1 from "./CkkDrawerType1";

const meta = {
  title: 'Component/CkkDrawerType1',
  component: CkkDrawerType1,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    open: true
  },
};