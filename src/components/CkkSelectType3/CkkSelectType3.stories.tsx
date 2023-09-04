import type {Meta, StoryObj} from '@storybook/react';

import CkkSelectType3 from "./CkkSelectType3";


const meta = {
  title: 'Component/CkkSelectType3',
  component: CkkSelectType3,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
