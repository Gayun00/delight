import PageLayout from "@/components/layouts/PageLayout";
import React from "react";

const RecentTransactions = React.lazy(
  () => import("@/pages/ChartPage/RecentTransactions")
);
const Transactions = React.lazy(() => import("@/pages/ChartPage/Transactions"));

const ChartPage = () => {
  return (
    <PageLayout>
      <Transactions />
      <RecentTransactions />
    </PageLayout>
  );
};

export default ChartPage;
