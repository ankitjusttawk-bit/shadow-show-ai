import type { DashboardWidget } from "../../services/dashboard/dashboardGenerator";
import WidgetRenderer from "./WidgetRenderer";

type DashboardCanvasProps = {
  widgets: DashboardWidget[];
  data: Record<string, unknown>[];
};

export default function DashboardCanvas({
  widgets,
  data,
}: DashboardCanvasProps) {
  return (
    <div className="grid grid-cols-12 gap-6">
      {widgets.map((widget) => (
        <div
          key={widget.id}
          className={
            widget.type === "kpi"
              ? "col-span-12 sm:col-span-6 xl:col-span-3"
              : widget.type === "table"
              ? "col-span-12"
              : "col-span-12 xl:col-span-6"
          }
        >
          <WidgetRenderer
            widget={widget}
            data={data}
          />
        </div>
      ))}
    </div>
  );
}