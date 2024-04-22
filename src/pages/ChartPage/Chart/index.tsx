import { useHistoryQuery } from "@/queries";
import {
  generateDateArray,
  filterAndSumByDateRange,
} from "@/utils/convertFormat";
import AreaChart from "@/components/charts/AreaChart";

interface Props {
  type: string;
  startDate: string;
  endDate: string;
}

const Chart = ({ type, startDate, endDate }: Props) => {
  const { data } = useHistoryQuery({ type, startDate, endDate });

  const datesArray = generateDateArray(endDate, startDate);
  const { expense, income } = filterAndSumByDateRange(
    data?.data || [],
    datesArray
  );
  return (
    <AreaChart series1Data={expense} series2Data={income} dates={datesArray} />
  );
};

export default Chart;
