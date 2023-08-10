import type { Meta, StoryObj } from '@storybook/react';

import ThemeSwitch from "./ThemeSwitch";

const meta = {
    title: 'Component/ThemeSwitch',
    component: ThemeSwitch,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ThemeSwitch>;

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