import type { Meta, StoryObj } from "@storybook/react";

import Component from ".";

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    amount: "4573.84",
    name: "Mr. Chester Kshlerin",
    timestamp: "2023-07-01T00:14:00Z",
    type: "transfer",
  },
};

export const Secondary: Story = {
  args: {
    amount: "-1380.95",
    name: "Prince Jules Friesen",
    timestamp: "2023-07-01T00:00:00Z",
    type: "transfer",
  },
};
