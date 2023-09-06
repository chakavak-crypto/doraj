import type {StoryObj} from '@storybook/react';

import CkkAvatarWithBadge from "./CkkAvatarWithBadge";

const meta = {
  title: 'Component/CkkAvatarWithBadge',
  component: CkkAvatarWithBadge,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
