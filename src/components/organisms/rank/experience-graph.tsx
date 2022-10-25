import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartArea,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { testExps } from "../../../constants/exp";

interface Props {
  range: {
    from: number;
    to: number;
  };
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ExperienceGraph = ({ range }: Props) => {
  const rankRange = Array.from(
    { length: range.to - range.from + 1 },
    (_, i) => i + range.from
  );
  const generateGradient = (
    ctx: CanvasRenderingContext2D,
    chartArea: ChartArea
  ) => {
    const gradient = ctx.createLinearGradient(
      chartArea.left,
      0,
      chartArea.right,
      0
    );
    gradient.addColorStop(0, "#93c5fd");
    gradient.addColorStop(1, "#3b82f6");
    return gradient;
  };

  const labelFormatJPN = (value: string | number) => {
    const fmt = new Intl.NumberFormat("ja-JP", {
      notation: "compact",
    });
    return fmt.format(isNaN(+value) ? 0 : +value);
  };

  return (
    <Line
      datasetIdKey="exp"
      data={{
        labels: rankRange,
        datasets: [
          {
            label: "経験値",
            data: rankRange.map((rank) => testExps[rank]),
            fill: true,
            backgroundColor: (context) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;

              if (!chartArea) return;
              return generateGradient(ctx, chartArea);
            },
            borderColor: "rgba(0, 0, 0, 0)",
          },
        ],
      }}
      options={{
        animation: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
            },
            ticks: {
              callback: (value) => labelFormatJPN(value),
            },
          },
        },
      }}
    />
  );
};
