import RecentTransactions from "@/components/RecentTransactions";
import Transactions from "@/components/Transactions";
import PageLayout from "@/components/layouts/PageLayout";

const ChartPage = () => {
  return (
    <PageLayout>
      <Transactions />
      <RecentTransactions />
    </PageLayout>
  );
};

export default ChartPage;
