import React from "react";
import SubTitle from "../titles/SubTitle";
import * as Tabs from "@radix-ui/react-tabs";
import TextButton from "../buttons/TextButton";

const TabButton = React.forwardRef<
  React.ElementRef<typeof Tabs.Trigger>,
  React.ComponentPropsWithoutRef<typeof Tabs.Trigger>
>((props) => {
  return (
    <TextButton
      {...props}
      variant={props["aria-selected"] ? "primary" : "secondary"}>
      {props.children}
    </TextButton>
  );
});

const RecentTransactions = () => {
  return (
    <div>
      <SubTitle>Recent Transactions</SubTitle>
      <Tabs.Root defaultValue="tab1" className="mt-[30px]">
        <Tabs.List className="flex justify-between items-center mb-[30px]">
          <div className="flex w-fit space-x-[25px]">
            <Tabs.Trigger value="tab1" asChild>
              <TabButton value="tab1">All</TabButton>
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2" asChild>
              <TabButton value="tab2">Expense</TabButton>
            </Tabs.Trigger>
            <Tabs.Trigger value="tab3" asChild>
              <TabButton value="tab3">Income</TabButton>
            </Tabs.Trigger>
          </div>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <p>all content</p>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <p>expense content</p>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <p>income content</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default RecentTransactions;
