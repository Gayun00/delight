import Chart from "@/assets/chart.svg?react";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const IsNotSelected: Story = {
  args: {
    Icon: Chart,
  },
};

export const IsSelected: Story = {
  args: {
    Icon: Chart,
    isSelected: true,
  },
};
