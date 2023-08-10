import type { Meta, StoryObj } from '@storybook/react';

import CkkSimpleSwitch from "./CkkSimpleSwitch";

const meta = {
    title: 'Component/CkkSimpleSwitch',
    component: CkkSimpleSwitch,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof CkkSimpleSwitch>;

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