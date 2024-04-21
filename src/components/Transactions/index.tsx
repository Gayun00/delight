import React, { useState } from "react";
import dayjs from "dayjs";
import * as Tabs from "@radix-ui/react-tabs";
import Button from "@/components/buttons/Button";
import Title from "@/components/titles/Title";
import AlertButton from "@/components/buttons/AlertButton";
import { useHistoryQuery } from "@/queries";
import { DATE_RANGE } from "@/constants";
import {
  calculateDatesAWeekAgo,
  calculateDatesAMonthAgo,
  generateDateArray,
  filterAndSumByDateRange,
} from "@/utils/convertFormat";
// import AreaChart from "@/components/charts/AreaChart";

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
  const today = dayjs("2024-07-30").format("YYYY-MM-DD");

  const handleDates = (type: string) => {
    let endDate = "";
    if (type === DATE_RANGE.WEEK) {
      endDate = calculateDatesAWeekAgo(today);
    }
    endDate = calculateDatesAMonthAgo(today);

    return endDate;
  };
  const [type, setType] = useState(DATE_RANGE.WEEK);
  const endDate = handleDates(type);
  const { data } = useHistoryQuery({ type, startDate: today, endDate });

  const selectType = (type: string) => {
    setType(type);
  };

  const datesArray = generateDateArray(endDate, today);
  const { expense, income } = filterAndSumByDateRange(
    data?.data || [],
    datesArray
  );
  console.log(datesArray, expense, income);
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
        {/* TODO: 대시보드 추가 */}
        {/* <AreaChart
          series1Data={expense}
          series2Data={income}
          dates={handleDates(type)}
        /> */}
      </div>
    </div>
  );
};

export default Transactions;
