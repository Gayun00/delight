import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Button from "@/components/Button";

export const TabButton = React.forwardRef<
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
    <Tabs.Root defaultValue="tab1">
      <Tabs.List
        aria-label="Manage your account"
        className="flex justify-between items-center">
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
      <Tabs.Content className="TabsContent" value="tab1">
        <p>week content</p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <p>month content</p>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default Transactions;
