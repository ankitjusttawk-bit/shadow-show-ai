import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

type BarChartProps = {
  data: Record<string, unknown>[];
  xKey: string;
  yKey: string;
};

export default function BarChart({
  data,
  xKey,
  yKey,
}: BarChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={xKey} />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey={yKey}
            fill="#3B82F6"
            radius={[6, 6, 0, 0]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}