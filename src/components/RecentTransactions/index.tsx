import { useState } from "react";
import SubTitle from "@/components/titles/SubTitle";
import TextButton from "@/components/buttons/TextButton";
import TransactionList from "@/components/lists/TransactionList";
import { useHistoryQuery } from "@/queries";
import { TRANSACTIONS_TYPE } from "@/constants";

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
  const { data } = useHistoryQuery(type);

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
        <div className="h-[550px] overflow-y-scroll">
          <TransactionList>
            {data?.data?.map((item) => <TransactionList.Item {...item} />)}
          </TransactionList>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
