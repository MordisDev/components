import type { Meta, StoryObj } from '@storybook/react';

import { Journal } from './Journal';

const meta: Meta<typeof Journal> = {
  title: 'Journal',
  component: Journal,
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
}