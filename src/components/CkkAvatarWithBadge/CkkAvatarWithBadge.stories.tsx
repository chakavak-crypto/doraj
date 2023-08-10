import type { Meta, StoryObj } from '@storybook/react';

import CkkAvatarWithBadge from "./CkkAvatarWithBadge";

const meta = {
    title: 'Component/CkkAvatarWithBadge',
    component: CkkAvatarWithBadge,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof CkkAvatarWithBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
    },
};
