import React, { useState } from "react";
import dayjs from "dayjs";
import Title from "@/components/titles/Title";
import AlertButton from "@/components/buttons/AlertButton";
import Button from "@/components/buttons/Button";
import { useHistoryQuery } from "@/queries";
import { DATE_RANGE } from "@/constants";
import {
  calculateDatesAWeekAgo,
  calculateDatesAMonthAgo,
  generateDateArray,
  filterAndSumByDateRange,
} from "@/utils/convertFormat";
import LoadError from "@/components/fallbacks/LoadError";
import SuspenseBoundary from "@/components/SuspenseBoundary";
import TransactionChartSkeleton from "@/components/fallbacks/TransactionChartSkeleton";

const AreaChart = React.lazy(() => import("@/components/charts/AreaChart"));

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
        {/* TODO: 새 알림 상태관리 로직 추가 */}
        <AlertButton hasNew />
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

export const Chart = ({ type }: { type: string }) => {
  // 차트 데이터 표시를 위한 임의의 현재시점 날짜 지정
  const today = dayjs("2024-06-30").format("YYYY-MM-DD");

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
  const { data } = useHistoryQuery({ type, startDate: today, endDate });

  const datesArray = generateDateArray(endDate, today);
  const { expense, income } = filterAndSumByDateRange(
    data?.data || [],
    datesArray
  );
  return (
    <AreaChart series1Data={expense} series2Data={income} dates={datesArray} />
  );
};
