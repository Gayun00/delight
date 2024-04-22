import TransactionList from "@/components/lists/TransactionList";
import { useHistoryQuery } from "@/queries";
import { TRANSACTIONS_TYPE } from "@/constants";

const RecentTransactionList = ({ type }: { type: string }) => {
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

export default RecentTransactionList;
