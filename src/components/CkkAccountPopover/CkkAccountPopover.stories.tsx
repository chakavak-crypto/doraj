import type {Meta, StoryObj} from '@storybook/react';

import CkkAccountPopover from "./CkkAccountPopover";

const meta = {
  title: 'Component/CkkAccountPopover',
  component: CkkAccountPopover,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
