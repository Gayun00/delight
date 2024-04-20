import type { Meta, StoryObj } from "@storybook/react";

import Component from ".";
import TransactionItem from "./TransactionItem";

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
};

const mockData = [
  {
    amount: "750.78",
    name: "Prince Danial Dickens",
    timestamp: "2023-07-01T00:12:00Z",
    type: "transfer",
  },
  {
    amount: "4573.84",
    name: "Mr. Chester Kshlerin",
    timestamp: "2023-07-01T00:14:00Z",
    type: "transfer",
  },
];

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    children: (
      <>
        {mockData.map((data) => (
          <TransactionItem {...data} />
        ))}
      </>
    ),
  },
};
