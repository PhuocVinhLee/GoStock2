// src/types/apexcharts.d.ts
import 'apexcharts';

declare module 'apexcharts' {
  export type ApexAxisChartSeries = {
    name: string;
    data: Array<{ x: number | string | Date; y: number }>;
  }[];
}
