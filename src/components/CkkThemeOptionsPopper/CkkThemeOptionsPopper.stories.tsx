import type {StoryObj} from '@storybook/react';

import CkkThemeOptionsPopper from "./CkkThemeOptionsPopper";

const meta = {
  title: 'Component/CkkThemeOptionsPopper',
  component: CkkThemeOptionsPopper,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
