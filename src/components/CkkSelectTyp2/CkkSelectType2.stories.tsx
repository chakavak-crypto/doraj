import type {StoryObj} from '@storybook/react';

import CkkSelectType2 from "./CkkSelectType2";


const meta = {
  title: 'Component/CkkSelectType2',
  component: CkkSelectType2,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
