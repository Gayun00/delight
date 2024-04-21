import type { Meta, StoryObj } from "@storybook/react";

import Component from "./index";

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    selectedMenu: "chart",
  },
};
