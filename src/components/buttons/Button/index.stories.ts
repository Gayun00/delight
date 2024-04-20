import type { Meta, StoryObj } from "@storybook/react";

import Component from ".";

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    children: "Week",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Month",
    variant: "secondary",
  },
};
