import dayjs from "dayjs";
import ReactApexChart from "react-apexcharts";
import { COLORS } from "@/constants";

interface Props {
  series1Data: number[];
  series2Data: number[];
  dates: string[];
}

interface TooltipCustomProps {
  seriesIndex: number;
  dataPointIndex: number;
  w: {
    config: {
      series: { data: string[] }[];
      xaxis: {
        categories: string[];
      };
    };
  };
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
      height: 319,
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
    legend: {
      show: false,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      custom: function ({
        seriesIndex,
        dataPointIndex,
        w,
      }: TooltipCustomProps) {
        const income = seriesIndex === 0;
        const date = w.config.xaxis.categories[dataPointIndex];
        const formattedDate = dayjs(date).format("MMM DD, HH:mm");
        return (
          `<div class="${income ? "bg-purple-primary" : "bg-green-primary"} h-[56px] text-white p-[8px] rounded-md border-none">` +
          `<p class="mb-[1px] font-bold text-md leading-sm">${income ? "+" : "-"}$${w.config.series[seriesIndex].data[dataPointIndex]}</p>` +
          `<p class="text-sm leading-xs font-medium">${formattedDate}</p>+
          </div>`
        );
      },
    },
  };

  return (
    <div>
      <div className="mt-[10px] mb-[47px] flex space-x-[20px]">
        <div className="flex items-center space-x-[9px]">
          <div className="mt-[3px] w-[32px] h-[5px] bg-purple-primary" />
          <p className="font-medium text-sm leading-md text-gray-secondary">
            Income
          </p>
        </div>
        <div className="flex items-center space-x-[9px]">
          <div className="mt-[3px] w-[32px] h-[5px] bg-green-primary" />
          <p className="font-medium text-sm leading-md text-gray-secondary">
            Expense
          </p>
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={161}
      />
    </div>
  );
};

export default ApexChart;
