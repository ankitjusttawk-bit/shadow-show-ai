import WidgetContainer from "./WidgetContainer";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";

type ChartType = "line" | "bar" | "pie";

type ChartWidgetProps = {
  title: string;
  type: ChartType;
  data: Record<string, unknown>[];
  xKey: string;
  yKey: string;
};

export default function ChartWidget({
  title,
  type,
  data,
  xKey,
  yKey,
}: ChartWidgetProps) {
  return (
    <WidgetContainer title={title}>
      {type === "line" && (
        <LineChart
          data={data}
          xKey={xKey}
          yKey={yKey}
        />
      )}

      {type === "bar" && (
        <BarChart
          data={data}
          xKey={xKey}
          yKey={yKey}
        />
      )}

      {type === "pie" && (
        <PieChart
          data={data}
          dataKey={yKey}
          nameKey={xKey}
        />
      )}
    </WidgetContainer>
  );
}