import type {Meta, StoryObj} from '@storybook/react';

import CkkSelectTyp1 from "./CkkSelectTyp1";


const meta = {
  title: 'Component/CkkSelectTyp1',
  component: CkkSelectTyp1,
  tags: ['autodocs'],
  argTypes: {},
}
satisfies
Meta<typeof CkkSelectTyp1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
