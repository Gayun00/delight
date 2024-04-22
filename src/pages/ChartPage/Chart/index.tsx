import dayjs from "dayjs";
import { useHistoryQuery } from "@/queries";
import { DATE_RANGE } from "@/constants";
import {
  calculateDatesAWeekAgo,
  calculateDatesAMonthAgo,
  generateDateArray,
  filterAndSumByDateRange,
} from "@/utils/convertFormat";
import AreaChart from "@/components/charts/AreaChart";

const Chart = ({ type }: { type: string }) => {
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

export default Chart;
