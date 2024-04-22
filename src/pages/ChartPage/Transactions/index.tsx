import React, { useState } from "react";
import Title from "@/components/titles/Title";
import Button from "@/components/buttons/Button";
import LoadError from "@/components/fallbacks/LoadError";
import SuspenseBoundary from "@/components/SuspenseBoundary";
import TransactionChartSkeleton from "@/components/fallbacks/TransactionChartSkeleton";
import Alert from "@/pages/ChartPage/Alert";
import dayjs from "dayjs";
import { DATE_RANGE, TODAY } from "@/constants";
import {
  calculateDatesAWeekAgo,
  calculateDatesAMonthAgo,
} from "@/utils/convertFormat";

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
  // 차트 데이터 표시를 위한 임의의 현재시점 날짜 지정
  const today = dayjs(TODAY).format("YYYY-MM-DD");

  const handleDates = (type: string) => {
    let endDate = "";
    if (type === DATE_RANGE.WEEK) {
      endDate = calculateDatesAWeekAgo(today);
    }
    if (type === DATE_RANGE.MONTH) {
      endDate = calculateDatesAMonthAgo(today);
    }

    return endDate;
  };
  const endDate = handleDates(type);

  const selectType = (type: string) => {
    setType(type);
  };

  const dateRangeText = `${dayjs(endDate).format("MMM DD")} - ${dayjs(today).format("MMM DD")}, ${dayjs(endDate).format("YYYY")}`;

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
            {dateRangeText}
          </p>
        </div>
        <SuspenseBoundary
          Fallback={TransactionChartSkeleton}
          ErrorFallback={LoadError}>
          <Chart type={type} startDate={today} endDate={endDate} />
        </SuspenseBoundary>
      </div>
    </div>
  );
};

export default Transactions;
