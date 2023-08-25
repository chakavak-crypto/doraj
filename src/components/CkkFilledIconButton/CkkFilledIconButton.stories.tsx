import type {Meta, StoryObj} from '@storybook/react';

import CkkFilledIconButton from "./CkkFilledIconButton";
import DeleteIcon from '@mui/icons-material/Delete';

const meta = {
  title: 'Component/CkkFilledIconButton',
  component: CkkFilledIconButton,
  tags: ['autodocs'],
  argTypes: {},
}
satisfies
Meta<typeof CkkFilledIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Success: Story = {
  args: {
    color: 'success',
    children: <DeleteIcon/>,
  },
};

export const Error: Story = {
  args: {
    color: 'error',
    children: <DeleteIcon/>,
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: <DeleteIcon/>,
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: <DeleteIcon/>,
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: <DeleteIcon/>,
  },
};