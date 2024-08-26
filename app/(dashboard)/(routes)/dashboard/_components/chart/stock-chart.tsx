import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface StockChartProps {
  data: { x: number; y: number }[];
  options: ApexOptions;
}

const StockChart: React.FC<StockChartProps> = ({ data, options }) => {
  return <ApexCharts options={options} series={[{ name: 'Stock Price', data }]} type="area" height={350} />;
};

export default StockChart;
