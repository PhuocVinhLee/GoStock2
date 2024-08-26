import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { transformedData } from "./generateData";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";

import { options } from "./options";

const StockChart = dynamic(() => import("./stock-chart"), { ssr: false });

const data: { x: number; y: number }[] = transformedData;

interface HomeChartProps {
  selectedRange: string;
}
export default function HomeChart({ selectedRange }: HomeChartProps) {
  const { theme } = useTheme();
  const [chartData, setChartData] = useState(data);

  const [chartOptions, setChartOptions] = useState<ApexOptions>(options);

  const zoomToRange = (startDate: Date, endDate: Date) => {
    const newData = data.filter(
      ({ x }) => x >= startDate.getTime() && x <= endDate.getTime()
    );

    setChartData(newData);
    const themeOption: Partial<ApexOptions> = {
      theme: {
        mode: theme === "dark" ? "dark" : "light", // Ensure these values are correct literals
        palette: "palette1",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
    };
    const newOptions: ApexOptions = {
      ...chartOptions,
      ...themeOption,
      xaxis: {
        ...chartOptions.xaxis,
        min: startDate.getTime(),
        max: endDate.getTime(),
      },
    };

    setChartOptions(newOptions);
  };
  useEffect(() => {
    console.log("chan theme");
    if (selectedRange === "1day") {
      zoomToRange(new Date("2013-01-30"), new Date("2013-01-31"));
    } else if (selectedRange === "1week") {
      zoomToRange(new Date("2013-01-24"), new Date("2013-01-31"));
    } else if (selectedRange === "1month") {
      zoomToRange(new Date("2013-01-01"), new Date("2013-01-31"));
    } else if (selectedRange === "6month") {
      zoomToRange(new Date("2012-08-01"), new Date("2013-01-31"));
    } else if (selectedRange === "1year") {
      zoomToRange(new Date("2012-01-01"), new Date("2013-01-01"));
    } else if (selectedRange === " 5year") {
      zoomToRange(new Date("2012-01-01"), new Date());
    } else if (selectedRange === " all") {
      zoomToRange(new Date("2012-08-01"), new Date("2013-01-31"));
    }
  }, [selectedRange, theme]);

  return (
    <div>
      <div className="  grid grid-cols-1 ">
        <StockChart data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
