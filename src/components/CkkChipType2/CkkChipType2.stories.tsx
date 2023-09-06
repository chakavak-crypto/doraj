import type {StoryObj} from '@storybook/react';

import CkkChipType2 from "./CkkChipType2";

const meta = {
  title: 'Component/CkkChipType2',
  component: CkkChipType2,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    label: "foo",
    onDelete: undefined
  },
};


export const Success: Story = {
  args: {
    color: 'success',
    label: "Done",
    onDelete: undefined
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    label: "failed",
    onDelete: undefined
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    label: "Pending",
    onDelete: undefined
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    label: "Foo",
    onDelete: undefined
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: "Bar",
    onDelete: undefined
  },
};

export const LongText: Story = {
  args: {
    color: 'primary',
    label: "Very long text",
    onDelete: undefined
  },
};