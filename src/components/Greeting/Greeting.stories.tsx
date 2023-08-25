import type {Meta, StoryObj} from '@storybook/react';

import Greeting from "./Greeting";

const meta = {
  title: 'Component/Greeting',
  component: Greeting,
  tags: ['autodocs'],
  argTypes: {},
}
satisfies
Meta<typeof Greeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    name: 'test'
  },
};
