import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Button from "@/components/buttons/Button";
import Title from "../titles/Title";
import BEll from "@/assets/bell.svg?react";

const TabButton = React.forwardRef<
  React.ElementRef<typeof Tabs.Trigger>,
  React.ComponentPropsWithoutRef<typeof Tabs.Trigger>
>((props) => {
  return (
    <Button
      {...props}
      variant={props["aria-selected"] ? "primary" : "secondary"}>
      {props.children}
    </Button>
  );
});

const Transactions = () => {
  return (
    <div className="flex flex-col space-y-[20px]">
      <div className="flex justify-between items-center">
        <Title>Transactions</Title>
        <BEll />
      </div>
      <Tabs.Root defaultValue="tab1">
        <Tabs.List className="flex justify-between items-center">
          <div className="flex w-fit bg-gray-background rounded-lg">
            <Tabs.Trigger value="tab1" asChild>
              <TabButton value="tab1">Week</TabButton>
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2" asChild>
              <TabButton value="tab2">Month</TabButton>
            </Tabs.Trigger>
          </div>
          <p className="font-medium leading-md text-sm text-gray-secondary">
            MM DD.YYYY
          </p>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <p>week content</p>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <p>month content</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Transactions;
