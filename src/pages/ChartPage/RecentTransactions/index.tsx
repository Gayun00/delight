import { useState } from "react";
import SubTitle from "@/components/titles/SubTitle";
import TextButton from "@/components/buttons/TextButton";
import TransactionList from "@/components/lists/TransactionList";
import { useHistoryQuery } from "@/queries";
import { TRANSACTIONS_TYPE } from "@/constants";
import SuspenseBoundary from "@/components/SuspenseBoundary";
import LoadError from "@/components/fallbacks/LoadError";
import RecentTransactionSkeleton from "@/components/fallbacks/RecentTransactionSkeleton";

const list = [
  {
    type: TRANSACTIONS_TYPE.ALL,
    name: "All",
  },
  {
    type: TRANSACTIONS_TYPE.EXPENSE,
    name: "Expense",
  },
  {
    type: TRANSACTIONS_TYPE.INCOME,
    name: "Income",
  },
];

const RecentTransactions = () => {
  const [type, setType] = useState(TRANSACTIONS_TYPE.ALL);

  const handleSelect = (type: string) => {
    setType(type);
  };

  return (
    <div>
      <SubTitle>Recent Transactions</SubTitle>
      <div defaultValue="tab1" className="mt-[30px]">
        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex w-fit space-x-[25px]">
            {list.map((item) => (
              <TextButton
                onClick={() => handleSelect(item.type)}
                key={item.type}
                variant={type === item.type ? "primary" : "secondary"}>
                {item.name}
              </TextButton>
            ))}
          </div>
        </div>
        <SuspenseBoundary
          Fallback={RecentTransactionSkeleton}
          ErrorFallback={LoadError}>
          <RecentTransactionList type={type} />
        </SuspenseBoundary>
      </div>
    </div>
  );
};

export default RecentTransactions;

export const RecentTransactionList = ({ type }: { type: string }) => {
  const { data } = useHistoryQuery({
    type,
    offset: 0,
    limit: type === TRANSACTIONS_TYPE.ALL ? 20 : 10,
  });

  return (
    <div className="h-screen overflow-y-scroll">
      <TransactionList>
        {data?.data?.map((item) => (
          <TransactionList.Item key={item.timestamp} {...item} />
        ))}
      </TransactionList>
    </div>
  );
};
