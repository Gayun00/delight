import PageLayout from "@/components/layouts/PageLayout";
import React from "react";

const RecentTransactions = React.lazy(
  () => import("@/components/RecentTransactions")
);
const Transactions = React.lazy(() => import("@/components/Transactions"));

const ChartPage = () => {
  return (
    <PageLayout>
      <Transactions />
      <RecentTransactions />
    </PageLayout>
  );
};

export default ChartPage;
