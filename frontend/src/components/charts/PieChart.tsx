import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

type PieChartProps = {
  data: Record<string, unknown>[];
  dataKey: string;
  nameKey: string;
};

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
];

export default function PieChart({
  data,
  dataKey,
  nameKey,
}: PieChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}