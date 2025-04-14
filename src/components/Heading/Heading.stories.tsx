import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from ".";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,
  args: {
    type: "main",
    children: "Lorem ipsum dolor.",
  },
  render: (args) => <Heading type={args.type}>{args.children}</Heading>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {};

export const Secondary: Story = {
  args: {
    type: "secondary",
  },
};

export const Small: Story = {
  args: {
    type: "small",
  },
};
