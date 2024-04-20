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
    list: [
      {
        name: "Week",
        prop: "week",
      },
      {
        name: "Month",
        prop: "month",
      },
    ],
  },
};

export const Secondary: Story = {
  args: {
    list: [
      {
        name: "Week",
        prop: "week",
      },
      {
        name: "Month",
        prop: "month",
      },
    ],
  },
};
