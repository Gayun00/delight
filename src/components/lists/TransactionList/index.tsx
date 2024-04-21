import { ReactNode } from "react";
import TransactionItem from "./TransactionItem";

interface Props {
  children: ReactNode;
}

const TransactionList = ({ children }: Props) => {
  return <div className="flex flex-col space-y-[20px] h-full">{children}</div>;
};

TransactionList.Item = TransactionItem;

export default TransactionList;
