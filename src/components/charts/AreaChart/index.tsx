import ReactApexChart from "react-apexcharts";
import { COLORS } from "@/constants";

interface Props {
  series1Data: number[];
  series2Data: number[];
  dates: string[];
}

const ApexChart = ({ series1Data, series2Data, dates }: Props) => {
  const series = [
    {
      name: "series1",
      data: series1Data,
      color: COLORS.PURPLE_PRIMARY,
    },
    {
      name: "series2",
      data: series2Data,
      color: COLORS.GREEN_PRIMARY,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      type: "datetime",
      categories: dates,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
