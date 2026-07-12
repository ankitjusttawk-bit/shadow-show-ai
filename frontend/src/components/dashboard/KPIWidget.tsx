import WidgetContainer from "./WidgetContainer";

type KPIWidgetProps = {
  title: string;
  value: number | string;
  change?: number;
};

export default function KPIWidget({
  title,
  value,
  change,
}: KPIWidgetProps) {
  const hasChange = typeof change === "number";

  return (
    <WidgetContainer title={title}>
      <div className="space-y-3">
        <h2 className="text-4xl font-bold text-white">
          {value}
        </h2>

        {hasChange && (
          <div
            className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
              change >= 0
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {change >= 0 ? "▲" : "▼"} {Math.abs(change)}%
          </div>
        )}
      </div>
    </WidgetContainer>
  );
}