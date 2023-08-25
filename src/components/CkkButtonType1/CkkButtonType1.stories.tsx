import type {Meta, StoryObj} from '@storybook/react';

import CkkButtonType1 from "./CkkButtonType1";

const meta = {
  title: 'Component/CkkButtonType1',
  component: CkkButtonType1,
  tags: ['autodocs'],
  argTypes: {},
}
satisfies
Meta<typeof CkkButtonType1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};