'use client';
import dynamic from "next/dynamic";
import {AdvancedRealTimeChartProps} from "react-ts-tradingview-widgets";
import {memo} from "react";

const AdvancedRealTimeChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

const CkkTechnicalChart = memo(function CkkTechnicalChart(props: AdvancedRealTimeChartProps){
  return (
    <AdvancedRealTimeChart
      {...props}
    />
  );
});

export default CkkTechnicalChart;