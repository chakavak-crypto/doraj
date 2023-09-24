'use client';
import dynamic from "next/dynamic";
import {AdvancedRealTimeChartProps} from "react-ts-tradingview-widgets";

const AdvancedRealTimeChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

export default function CkkTechnicalChart(props: AdvancedRealTimeChartProps){
  return (
    <AdvancedRealTimeChart
      {...props}
    />
  );
}