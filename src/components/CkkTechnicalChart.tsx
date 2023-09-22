'use client';
import dynamic from "next/dynamic";
const AdvancedRealTimeChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);
import {AdvancedRealTimeChartProps} from "react-ts-tradingview-widgets";

export default function CkkTechnicalChart(props: AdvancedRealTimeChartProps){
  return (
    <AdvancedRealTimeChart
      {...props}
    />
  );
}