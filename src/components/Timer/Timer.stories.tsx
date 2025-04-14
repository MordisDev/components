import { DateTime } from 'luxon';
import type { Meta, StoryObj } from '@storybook/react';

import { Timer } from './Timer';

const meta: Meta<typeof Timer> = {
  title: 'Timer',
  component: Timer,
  parameters: {
    layout: 'centered',
  },
  args: {
    targetTime: DateTime.fromISO("2026-10-10T12:31:22")
  },
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {}