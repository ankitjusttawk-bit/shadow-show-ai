import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type LineChartProps = {
  data: Record<string, unknown>[];
  xKey: string;
  yKey: string;
};

export default function LineChart({
  data,
  xKey,
  yKey,
}: LineChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={xKey} />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey={yKey}
            stroke="#3B82F6"
            strokeWidth={3}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}