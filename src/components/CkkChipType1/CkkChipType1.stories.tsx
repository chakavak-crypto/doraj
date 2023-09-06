import type {StoryObj} from '@storybook/react';

import CkkChipType1 from "./CkkChipType1";
import Avatar from "@mui/material/Avatar";

const meta = {
  title: 'Component/CkkChipType1',
  component: CkkChipType1,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    label: "37%",
    avatar: <Avatar>IRT</Avatar>,
    onDelete: undefined
  },
};


export const Success: Story = {
  args: {
    color: 'success',
    avatar: <Avatar>IRT</Avatar>,
    label: "37%",
    onDelete: undefined
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    avatar: <Avatar>IRT</Avatar>,
    label: "37%",
    onDelete: undefined
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    icon: <span>Example</span>,
    label: "37%",
    onDelete: undefined
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    avatar: <Avatar alt="Natacha" src="https://mui.com/static/images/avatar/1.jpg"/>,
    label: "37%",
    onDelete: undefined
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    avatar: <Avatar>IRT</Avatar>,
    label: "37%",
    onDelete: undefined
  },
};