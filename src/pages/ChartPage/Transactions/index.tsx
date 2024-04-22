import React, { useState } from "react";
import Title from "@/components/titles/Title";
import Button from "@/components/buttons/Button";
import { DATE_RANGE } from "@/constants";
import LoadError from "@/components/fallbacks/LoadError";
import SuspenseBoundary from "@/components/SuspenseBoundary";
import TransactionChartSkeleton from "@/components/fallbacks/TransactionChartSkeleton";
import Alert from "@/pages/ChartPage/Alert";

const Chart = React.lazy(() => import("@/pages/ChartPage/Chart"));

const list = [
  {
    name: "WEEK",
    type: DATE_RANGE.WEEK,
  },
  {
    name: "MONTH",
    type: DATE_RANGE.MONTH,
  },
];

const Transactions = () => {
  const [type, setType] = useState(DATE_RANGE.WEEK);

  const selectType = (type: string) => {
    setType(type);
  };

  return (
    <div className="flex flex-col space-y-[20px]">
      <div className="flex justify-between items-center">
        <Title>Transactions</Title>
        <Alert />
      </div>
      <div defaultValue="tab1">
        <div className="flex justify-between items-center">
          <div className="flex w-fit bg-gray-background rounded-lg">
            {list.map((item) => (
              <Button
                onClick={() => selectType(item.type)}
                key={item.type}
                variant={item.type === type ? "primary" : "secondary"}>
                {item.name}
              </Button>
            ))}
          </div>
          <p className="font-medium leading-md text-sm text-gray-secondary">
            MM DD.YYYY
          </p>
        </div>
        <SuspenseBoundary
          Fallback={TransactionChartSkeleton}
          ErrorFallback={LoadError}>
          <Chart type={type} />
        </SuspenseBoundary>
      </div>
    </div>
  );
};

export default Transactions;
